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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BMZHJzSzlGTHJCREs1TVZTSGg4TUxYSGdjS0ZYQTlBVmFOTU9KUENFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURBODJLODRSaTc5MFZwWmtnRDhOaTYxL1VmTzZiOEp2ZWFSWi9XMk1Fcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTUs3MUVmTEJ3eFo2NFV6M21rWEVaOGgyZERxQ2JYdHVuOTNaZVFQYkg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyVUs0WjIrR25mblFtaFRDY2d0UXFxNzVvQm9Cb3I4aXU1bzR2WURCVEVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFCZm5qZGdSWFNpVXkxY2JxSHZOTENxNjIzVStteHVVa2RhSUI5SGJzSFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImEwd3BjV3NsSktyZWdGdWVlZGt3RklTWnBpQ2c5K05IRDg3SzVPU01WbGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0IvanZTQTc2Z3BZa1NUU0pBWXphY0xZOGlCd2dxV2dQM3VkZ0JMbUFVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVhkS25paTdKdGtxM3dRWmk2aENGcS9HQWF6WUFiU2IrSEdjMjhDdGJYRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllRNm1QblQ4c3QvR1hsUVJ3VHZqVWVvdk41V1R0V2pxYzIzZGNiMDhzTGZTWHFHWGtob1N1aUY5aEhuOVUyMDhLVlpIb3JFU2dSV2Zva2JML1puR2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IlJXaE9TYWxBOFhERDQ4T1hBU3h3RjNtdk9tbXJJSWZpMnliSlNteDI2aWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InE4QTFqZU4yUWQySjBGZ0VMbGY3NXciLCJwaG9uZUlkIjoiZTNhNmY5MmYtYmZiYi00MzdhLWJjMjktM2QxY2E1N2NjODIzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9hc1lhMlFVVEJpT204OWZPa3B5SkV5SXBzaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSkJCQXFObFhhcWpNU1NIbjRiaVY1dUx4NUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiODFEVDI0UUMiLCJtZSI6eyJpZCI6IjkyMzE4OTQ5Mjk5NTo0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdnQvTThHRUxidDViWUdHQklnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzejkvSlpEV2VUMGFRTXhaWlVDeGROYzkzTGhJYmlvdkRoRzZGNFpTdGdnPSIsImFjY291bnRTaWduYXR1cmUiOiI3VmtGbE1kdVVSRnVhakd6UGplSlMra3F4TERjNjVwL2tER2hPMlYwMXhSbzNhUzFhdDFBZndFNEMxb2k4NEVoZ3pZV2JhdVlyMURrVVdBT0Z1WEVCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidmozSVh5eDdqQWRoTFZTRjczdFJ4U0Q1VExlMUZ5MXJJSHlFc1Y5NEM4N1plTWNuRnh1MzdrVGljdkVkeFJqMEI2T0FTaTZNMFdTczc4eXp2VXEzaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxODk0OTI5OTU6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkOC9meVdRMW5rOUdrRE1XV1ZBc1hUWFBkeTRTRzRxTHc0UnVoZUdVcllJIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NTI3NzQ3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx6MCJ9"
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
