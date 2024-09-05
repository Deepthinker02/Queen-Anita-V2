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
  "{"noiseKey":{"private":{"type":"Buffer","data":"cEM3CHS4LqkmLhKY8cpmPsDTx+idwq4h/SbGvDhfGlA="},"public":{"type":"Buffer","data":"OpPrKxQC+YsyHMBM4xfaRWxw+mibt91qJPdbqCPdsBI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"EJuxD6zQz0c8h761/iMFTC05zw3AlOjZ4lEQNvdRJFk="},"public":{"type":"Buffer","data":"3oPSERGwwwZgzYCQpgYRWtFPeWQq8DS4ejBFWrSboGQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"OFZFoX371kR7g6vJh498zZm3epJwAJTFVyHC7PQEM0Q="},"public":{"type":"Buffer","data":"1jMZf6LQHJ6AQMui/aNIo3rj6dLjd1+IYq+qLb+myXE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"6A819nDnE7k1lIDfr0ZdjTSagKFL1IHdKS84YiHr/UQ="},"public":{"type":"Buffer","data":"V9ZIcDokEk3CfLHWtWa8c09Kf4HJ3dax+Y369AhqdAA="}},"signature":{"type":"Buffer","data":"Btlbh6tBzJ567sUoupL6w9AEe/D8xTeYlCs1+FfwN7ACrMpMhl/Urk3OAtWM/7AiJ6daLq3JD+Bvn9bl38drAQ=="},"keyId":1},"registrationId":18,"advSecretKey":"FlX36ixbCLhlw/brTxomD3G9pkC3aW4eEc7La0jSIPc=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"AwvOz1BsTOqQr2VTaVvjZw","phoneId":"34d42f88-08fb-480f-a858-6656ea836969","identityId":{"type":"Buffer","data":"2g45M92pvthKQ2tBbdf4IasUp4M="},"registered":true,"backupToken":{"type":"Buffer","data":"97XzYsopjVv6mGA7IMPUkf3ePnc="},"registration":{},"pairingCode":"CXKARQPH","me":{"id":"923189492995:3@s.whatsapp.net","lid":"119808381182150:3@lid"},"account":{"details":"CPvt/M8GELzG5bYGGBEgACgA","accountSignatureKey":"3z9/JZDWeT0aQMxZZUCxdNc93LhIbiovDhG6F4ZStgg=","accountSignature":"NAU/pmm7PKMsGOc2zalqtygDOgc5o/I2e0sYKfZAUhv3PyaXir6e/eiyo4Ppwn4P7u3y9RtkybqPXvImqfAbCw==","deviceSignature":"9FLabo7vKCpJnlyecFfz1VY2BGkS4zeLvkWIMYzQX2dIp/c7Mbt/EH81e2CTTH+UN04V+2s6k6y8vjslytu0Ag=="},"signalIdentities":[{"identifier":{"name":"923189492995:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bd8/fyWQ1nk9GkDMWWVAsXTXPdy4SG4qLw4RuheGUrYI"}}],"platform":"android","lastAccountSyncTimestamp":1725522753,"myAppStateKeyId":"AAAAALz0"}"
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
