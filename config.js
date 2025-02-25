const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID, 'LEZWRRCK#6O2ySoxiDjM_VodBUC-azesAUf9XdlwKI_n5OkY5Vfw'
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/DHzs33fY/828f15825089f9ca.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃𝐐𝐮𝐞𝐧𝐧 𝐒𝐞𝐧𝐮 𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝐉𝐄𝐒𝐓𝐄𝐑",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
