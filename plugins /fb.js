const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();
//fb downloader
cmd({
    pattern: "fb",
    desc: "Download fb videos",
    category: "download",
    react: "🔎",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q || !q.startsWith("https://")) return reply("ᴘʟᴇᴀꜱᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ꜰᴀᴄᴇʙᴏᴏᴋ ᴠɪᴅᴇᴏ ᴜʀʟ!");
        const data = await fetchJson(`${baseUrl}/api/fdown?url=${q}`);
        let desc = ` *ꜱᴇɴᴜ ᴍᴅ ꜰʙ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ...⚙️*

*Reply This Message With Option*

*1 ᴅᴏᴡɴʟᴏᴀᴅ ꜰʙ ᴠɪᴅᴇᴏ ɪɴ ʜᴅ Qᴜᴀʟɪᴛʏ*
*2 ᴅᴏᴡɴʟᴏᴀᴅ ꜰʙ ᴠɪᴅᴇᴏ ɪɴ ꜱᴅ Qᴜᴀʟɪᴛʏ*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴇꜱᴛᴇʀ ᴛᴇᴄʜ*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://files.catbox.moe/de82e3.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        await conn.sendMessage(from, { video: { url: data.data.hd }, mimetype: "video/mp4", caption: "> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*" }, { quoted: mek });
                        break;
                    case '2':               
                    await conn.sendMessage(from, { video: { url: data.data.sd }, mimetype: "video/mp4", caption: "> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴇꜱᴛᴇʀ ᴛᴇᴄʜ*" }, { quoted: mek });
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
