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

    const job = {
        id: getRandomId(),
        street: req.body.street,
        city: req.body.city,
        province: req.body.province,
        postalCode: req.body.postalCode,
        time: req.body.time,
        description: req.body.description
    }

    const jobs = readJobs();
    jobs.push(job);

    writeJobs(jobs);
    res.json(job);
});
router.get('/', (req, res) => {
    res.json(readJobs().reverse());
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

module.exports = router;
