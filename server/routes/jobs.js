const express = require('express');
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');
const { getProfileId } = require('../tokens');
// const emailValidator = require('email-validator');

function readJobs() {
    const jobs = fs.readFileSync('./data/jobs.json');
    const parsedData = JSON.parse(jobs);
    return parsedData;
}
function writeJobs(jobs) {
    const jsonJob = JSON.stringify(jobs, null, '  ');
    fs.writeFileSync('./data/jobs.json', jsonJob);
}

const getRandomId = () => crypto.randomBytes(20).toString('hex');
router.post('/', (req, res) => {
    const token = req.body.token;
    const profileId = getProfileId(token);
    if(!profileId){
        res.status(400).json('Invalid Token');
    }

    const job = {
        id: getRandomId(),
        street: req.body.street,
        city: req.body.city,
        province: req.body.province,
        postalCode: req.body.postalCode,
        time: req.body.time,
        description: req.body.description,
        postedBy: profileId
    }

    const jobs = readJobs();
    jobs.push(job);

    writeJobs(jobs);
    res.json(job);
});
router.get('/', (req, res) => {
    res.json(readJobs().reverse());
})

router.get('/recent', (req, res) => {
    res.json(readJobs().reverse().slice(0, 4));
})


router.get('/my', (req, res) => {
    const token = req.query.token;
    const profileId = getProfileId(token);
    if(!profileId){
        res.status(400).json("Invalid Token");
    }
    const jobs = readJobs().reverse();
    const myJobs = jobs.filter(job=>job.postedBy === profileId);

    res.json(myJobs);
})


router.post('/apply', (req, res) => {
    const jobId = req.body.jobId;
    const token = req.body.token;

    const profileId = getProfileId(token);

    // "applicantId": "<profileId>",
    // "status": "applied"


    const jobs = readJobs();
    const foundJob = jobs.find(job=>job.id ===jobId);
    foundJob.applicantId = profileId;
    foundJob.status = 'applied';
    writeJobs(jobs);

    res.json('');
})

router.post('/confirm', (req, res) => {
    const jobId = req.body.jobId;
    const token = req.body.token;

    const profileId = getProfileId(token);

    const jobs = readJobs();
    const foundJob = jobs.find(job=>job.id ===jobId);
    if(foundJob.postedBy === profileId){
        foundJob.status = "confirmed";
        writeJobs(jobs);
        res.json('');
    }
    else{
        res.status(400).json('User not allowed');
    }

})

router.post('/reject', (req, res) => {
    const jobId = req.body.jobId;
    const token = req.body.token;

    const profileId = getProfileId(token);

    const jobs = readJobs();
    const foundJob = jobs.find(job=>job.id ===jobId);
    if(foundJob.postedBy === profileId){
        delete foundJob.status;
        delete foundJob.applicantId;
        writeJobs(jobs);
        res.json('');
    }
    else{
        res.status(400).json('User not allowed');
    }

})

module.exports = router;
