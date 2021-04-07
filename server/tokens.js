const crypto = require('crypto');
const getRandomId = () => crypto.randomBytes(20).toString('hex');

console.log("RESETTING TOKEN");
const tokens = {};

const createToken = (profileId) =>{
    const newToken = getRandomId();
    tokens[newToken] = profileId;
    return newToken;
}

const getProfileId = (token) => tokens[token];

const deleteToken = (token) => {
    delete tokens[token]
}

module.exports = {createToken, getProfileId, deleteToken };