require('dotenv').config();
const contentful = require('contentful')

if (process.env.CTF_SPACE_ID) {
    module.exports = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN
    })
}