const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============ping=======
cmd({
    pattern: "ping",
    react: "⚡",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '```Pinging To index.js!!!```'  }, { quoted: mek } )
var final = new Date().getTime();
return await conn.edit(ping, '*Pong*\n *' + (final - inital) + ' ms* ' )
} catch (e) {
reply(`${e}`)
console.log(e)
}
})

//===========menu========
cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "⚡",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let menu = {
ᴍᴀɪɴ: '',
ᴅᴏᴡɴʟᴏᴀᴅ: '',
ɢʀᴏᴜᴘ: '',
ᴏᴡɴᴇʀ: '',
ᴄᴏɴᴠᴇʀᴛ: '',
ᴀɪ: '',
ᴛᴏᴏʟꜱ: '',
ꜱᴇᴀʀᴄʜ: '',
ꜰᴜɴ: '',
ᴠᴏɪᴄᴇ: '',
ᴏᴛʜᴇʀ: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `
👋 ʜᴇʟʟᴏᴡ, ${pushname}!

✨ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ꜱᴇɴᴜ ᴍᴅ ᴠ3 ✨ 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ ʀᴜɴᴛɪᴍᴇ * ${runtime(process.uptime())}
│◈ ᴏᴡɴᴇʀ ɴᴀᴍᴇ * ᴄʏʙᴇʀ ᴊᴇꜱᴛᴇʀ
│◈ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ * 94788770020 
╰──────────●●►
╭──────────●●►
 📥 *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*
  ───────
 ${menu.download}
╰───────────●●►
╭──────────●●►
 👾 *ᴀɪ ᴍᴇɴᴜ*
  ───────
 ${menu.ai}
╰───────────●●►
╭──────────●●►
 🔧 *ᴍᴀɪɴ ᴍᴇɴᴜ*
  ───────
 ${menu.main}
╰───────────●●►
╭──────────●●►
 🎉 *ꜰᴜɴ ᴍᴇɴᴜ*
  ───────
 ${menu.fun}
╰───────────●●►
╭──────────●●►
 🔄 *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
  ───────
 ${menu.convert}
╰───────────●●►
╭──────────●●►
 🔍 *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
  ───────
 ${menu.search}
╰───────────●●►
╭──────────●●►
 👥 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
  ───────
 ${menu.group}
╰───────────●●►
╭──────────●●►
 🔒 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
  ───────
 ${menu.owner}
╰───────────●●►
╭──────────●●►
 ⚙️ *ᴏᴛʜᴇʀ ᴍᴇɴᴜ*
  ───────
 ${menu.other}
╰───────────●●►
╭──────────●●►
 🛠️ *ᴛᴏᴏʟꜱ ᴍᴇɴᴜ*
  ───────
 ${menu.tools}
╰───────────●●►

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ᴊᴇꜱᴛᴇʀ*`

return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/de82e3.jpg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`𝔼𝕣𝕣𝕣𝕠𝕣`)
}
})
