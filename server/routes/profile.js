const express = require('express');
const router = express.Router();
const app = express();
const fs = require('fs');
const crypto = require('crypto');
const {createToken, deleteToken, getProfileId} = require('../tokens');

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
    
    
    

    const profiles = readProfiles();
    profiles.push(profile);

    writeProfiles(profiles);
    res.json(profile);
});


router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const profiles = readProfiles();
    const profile = profiles.find(profile => profile.email === email && profile.password === password)

    if(profile){
        const newToken = createToken(profile.id);
        res.json({token: newToken});
    }
    else{
        res.status(404)
    }

});

router.post('/logout', (req, res) => {
    const token = req.body.token;
    deleteToken(token);
    res.json({deleted: true});
});

// app.get ('/profiles', function(req, res){
//     res.send(profiles)

// })

module.exports = router;