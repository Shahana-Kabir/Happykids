const express = require('express');
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');
// const emailValidator = require('email-validator');

function readProfiles() {
    const profiles = fs.readFileSync('./data/profiles.json');
    const parsedData = JSON.parse(profiles);
    return parsedData;
}
function writeProfiles(profiles) {
    const jsonProfile = JSON.stringify(profiles, null, '  ');
    fs.writeFileSync('./data/profiles.json', jsonProfile);
}

const getRandomId = () => crypto.randomBytes(20).toString('hex');

router.post('/', (req, res) => {

    const profile = {
        id: getRandomId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        bio: req.body.bio
        }
    
    
    // const errors = validateWarehouse(newWarehouse);
    // if (errors.length > 0) {
    //     res.status(400).json(errors);
    //     return;
    // }

    const profiles = readProfiles();
    profiles.push(profile);

    writeProfiles(profiles);
    res.json(profile);
});

module.exports = router;