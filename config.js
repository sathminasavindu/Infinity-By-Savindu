const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID,
BTN: "MADE FOR LOVE",
FOOTER: "PinkVenom-MD",
BTNURL: "https://github.com/ayooh-us",
MAX_SIZE: 200,
LOGO: process.env.LOGO === undefined ? 'https://telegra.ph/file/091fc81528af5881cdf47.jpg': process.env.LOGO
};
