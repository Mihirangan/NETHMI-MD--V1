
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "owner",
    react: "👦",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `❏━━━━━━━━━━━━━━━━━━━❐
❒⁠ᴺᴱᵀᴴᴹᴵ ᴍᴅ sᴜᴘᴘᴏʀᴛ❑
*https://joeljamestech.netlify.app*

❒ᴡᴀ ᴄʜᴀɴɴᴇʟ❑
*ˢᵒᵒⁿ*

❐ʏᴏᴜ-ᴛᴜʙᴇ❏
*ˢᵒᵒⁿ*

❐ᴛɪᴋ ᴛᴏᴋ❏
*ˢᵒᵒⁿ*

❏ɢɪᴛ ʜᴜʙ❐
*github.com/mihirangan*

❏ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀs❐
ʟᴏʀᴅ 𝙽𝙴𝚃𝙷𝙼𝙸
wa.me 94760771665
wa.me 94789345531
wa.me 666666666
αм 24 уєяαѕ σℓ∂ αм ωα¢нιηg 
αηιмє тσ ƒєєℓ вєттєя
⁠⁠⁠❏━━━━━━━━━━━━━━━━━━━❐
*ᴋᴇᴇᴘ ᴜsɪɴɢ ᴊᴏᴇʟ ᴍᴅ ʙᴏᴛ*`

await conn.sendMessage(from,{image:{url:config.OWNER_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`ᴛʜᴏsᴇ ᴀʀᴇ ᴍʏ ᴏᴡɴᴇʀ ɪɴғᴏ`)
}
})
