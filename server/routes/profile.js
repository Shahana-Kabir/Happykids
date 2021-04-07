const express = require('express');
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');
const { createToken, deleteToken, getProfileId } = require('../tokens');

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

    
    const image = req.files.image;
    const uploadPath = __dirname + '/../public/images/' + profile.id + '-' + image.name;

    image.mv(uploadPath, (err) => {
        if (err){
          return res.status(500).send(err);
        }

        profile.imagePath = 'http://localhost:8080/images/' + profile.id + '-' + image.name;

        const profiles = readProfiles();
        profiles.push(profile);
        writeProfiles(profiles);
        res.json(profile);
      });
    

    
});

router.get('/:profileId', (req, res) => {
    const profileId = req.params.profileId;
    const profiles = readProfiles();
    const profile = profiles.find(p => p.id === profileId);
    if(!profile){
        res.json({});
        return;
    }
    const data = {
        name: profile.name,
        email: profile.email,
        bio: profile.bio,
        imagePath: profile.imagePath
    };
    res.json(data);
})


router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const profiles = readProfiles();
    const profile = profiles.find(profile => profile.email === email && profile.password === password)

    if (profile) {
        const newToken = createToken(profile.id);
        res.json({ token: newToken, profileId: profile.id, name: profile.name });
    }
    else {
        res.status(404).json()
    }

});

router.post('/logout', (req, res) => {
    const token = req.body.token;
    deleteToken(token);
    res.json({ deleted: true });
});

// app.get ('/profiles', function(req, res){
//     res.send(profiles)

// })

module.exports = router;