const config = require('../config')
const os = require('os')
const {
    cmd,
    commands
} = require('../command')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')

cmd({
    pattern: "left", 
    react: "🚷",        
    alias: ["leave"],
    desc: "(null).",
    category: "group",
    filename: __filename,
    use: '<.>',
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return;
if (!m.isGroup) {
reply(mg.onlygroup)   
}
try {                
const gleave = m.chat
await conn.groupLeave(gleave)         
} catch (e) {
    reply('*Error !!*')
    console.log(e)
}
})
