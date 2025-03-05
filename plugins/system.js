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
    pattern: "system",
    react: "🧬",
    alias: ["status"],
    desc: "Check bot system status.",
    category: "genaral",
    use: '.system',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
try{
    if(isGroup){
        const fsh = await fetchJson(); 
        if(fsh &&  (fsh?.error || fsh?.data?.type == 'false')) return;
         
 }else if(!isGroup){
        const fshh = await fetchJson(); 
        if(fshh &&  (fshh?.error || fshh?.data?.type == 'false')) return;
      }
    var start = new Date().getTime();
var end = new Date ().getTime();
const ping = (end - start)

if (os.hostname().length == 12) {
  hostname = mg.replithostname
} else {
  if (os.hostname().length == 36) {
    hostname = mg.herokuhostname
} else {
    if (os.hostname().length == 8) {
      hostname = mg.koyebhostname
} else {
      hostname = os.hostname()
}}}


const rtime = await runtime(process.uptime())

const txt =` DARK SHAN.MD

╭───────────────────●●►
├⚙️𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 : ${hostname}  
├⏰𝚄𝙿𝚃𝙸𝙼𝙴 : ${rtime}       
├📟𝚁𝙰𝙼 :  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB         
├👨‍💻𝙾𝚆𝙽𝙴𝚁𝚂 : shan
╰───────────────────●●►`
await conn.sendMessage(m.chat, { text:txt }, { quoted: mek })
} catch (e) {
    reply('*Error !!*')
    console.log(e)
}
})
