//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaV3nsc9Gv7VaFujMv1G";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaV3nsc9Gv7VaFujMv1G";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c71eab884ac90ecbf8d1c.png";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "923189492995";
global.owner = process.env.OWNER_NUMBER || "923189492995";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/0f089184835ed3d3b1f8c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tTRlozTWNpVXJHaGtGN212NEZnMERhR3VJaENPQmIvV2dJOFV5Y2tuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzBlc1QrcXBoNGo2dkY3VEJ1WTl4bUNEWnJGZi9BZ21wN0Y1SWpKa1dBYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUGtqeXZFYTg3ZTRNOTJvb2ZQTVowdDhzVnVSMXdSUGhBTWRZbHpZQmtBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIUjNGTlNuamNUdEJqSXNNREtoYXF4M0twbTFzeGh0Mkc2RUM1S3E4TW1nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktIQmN3aFh2SVB3OXROMS95NEd2OHpOMGpxaitHcE0wT2RsU1RjMXNTV2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDQjExb0hXZXFPRnlMVnpVKzFRbDdBOUk4eVZxV2hBN3owUW9ELzJ2M289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdrYXFseVpCU2VicEZUMU1xd05BWWhRQkc2SEpYcU9QWFJ3bVFYY0Jtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pvM2ZZMVNPQ21qSFpoTkRFZVdLbS9xS2RLczBna0hVNTNiZnZiZGpXND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklSQWszaTB1c3kzZGpYQ1BBcCt1Wk9BUjNBODMyNHpjZitmVE9wSFVBZWpCNTRSc05BWS9pcmxMbkhqT1V6NTZLQXJER01PQXhqZ01ucXJ1TW5yb2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6IjZrNHFuOXZFclR3RlB4M1Iwd2ZPS0YwM3NPNHBYVlZSTW9yb1U4S2JRa1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik8ybXUxdjE1VGxlQTgwZDdzblA3OEEiLCJwaG9uZUlkIjoiN2JmZDk2MTctZDc0NS00MmZiLThkODEtZjg5MmE1ZWRlODFmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhrMmhvdzMveVJMNDVxZWNEYTJPaElYcmdXWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5N01XT2VMSnZaTWpwZzlNUFJoZ09BNmpZUUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTY4VkoxUlgiLCJtZSI6eyJpZCI6IjkyMzE4OTQ5Mjk5NToxMUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHZ0L004R0VKaVg5TFlHR0JrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM3o5L0paRFdlVDBhUU14WlpVQ3hkTmM5M0xoSWJpb3ZEaEc2RjRaU3RnZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTmIweDY2elFMYzVkSWtZNHFjRW8xUEFseUJmcHo4RUw4cnkwTU9aR05jUDVEZE1ZR0ovN0hKSHNUT3phWGlvOERJUm1BRU9raTdQcUlNY1k0NXlHQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InRrR3dkYVhpQjMyNFVYcm9WdW5PVjRTSVNlM29JUGNvMnlqNXFkNGt4b3psM251UXpnV1Q1NE5qeU1renFUbUtPMWlVOFR0Y0JqSjIwSnFDZk1HQ2lBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTg5NDkyOTk1OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ4L2Z5V1Exbms5R2tETVdXVkFzWFRYUGR5NFNHNHFMdzRSdWhlR1VyWUkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU3NjI0NzB9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ᴘᴏᴡᴇʀᴇᴅ ʙʏ *༈֎Ă̈wais Ĭ̈qbal⭐⃟❀❥︎* ㋛︎`",
  author: process.env.PACK_AUTHER || "AWAIS IQBAL",
  packname: process.env.PACK_NAME || "W A S I🥀",
  botname: process.env.BOT_NAME || "AWAIS IQBAL",
  ownername: process.env.OWNER_NAME || "❣️W A S I🥀🍂",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "b1a3a2e8cb4558da4a93873d8ea1b670",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
