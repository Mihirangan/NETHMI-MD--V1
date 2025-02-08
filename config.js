const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "cL1HzJ6C#qBR07P1fe7ev77d5_8-f9oA_mESEvrWHGKpCjoFtWIY",
    CAPTION: process.env.CAPTION || "кєєρ υѕιηg 𝗡𝗘𝗧𝗛𝗠𝗜 𝗠𝗗 вσт",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || " false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    OWNER_IMG: process.env.OWNER_IMG || "https://files.catbox.moe/y2vb9u.jpg",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/y2vb9u.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "*𝙷𝙸 𝚂𝚄𝙳𝚄 𝙼𝙰𝙽𝙸𝙺𝙰 𝙼𝙰𝙼𝙰 𝙸𝙽𝙽𝚆𝙰 𝙸 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 💓🤗*",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "𝙽𝙴𝚃𝙷𝙼𝙸 𝙼𝙳 ʙᴏᴛ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "𝙼𝙰𝙼𝙰 𝙴𝙺𝙰 𝙱𝙰𝙻𝚄𝚆𝙰 𝙴𝙺𝙰 𝙷𝙰𝚁𝙸𝙼𝙰 𝙻𝙰𝚂𝚂𝙽𝙰𝚈𝙸 𝙼𝙰𝙽𝙸𝙺𝙰",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
