const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0FZM1I3K2g3OUlzd2tveCtUaytHTlhqbWtZNDVRcGhxNDkyTUNrZmUzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzFITXg4VHhQV2NOMmMwZkxpSjRBUVZDUjh1RThSSjJNV2owVUlXNjFEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXR1dTdWxHVm1Ld3FCTFI2cXpiZlRKYlB3V0VRVCtVeFZhZnU4SmljQTJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyWFdUZUo1SFlXWHVqUVNIZlcyOUgzejdBSTZidFlaRktxaTYyK09OVUhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9KTnE0WWJGd0hURldSZGxLVDdIdysxM3QxcGU4Rm9IWDhsTk9HQ0MxRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpwNHNJYnhsL3NxZmdNdllEWEZ5anBvMnArVHpSTDRUcjY1VkoxcW9lems9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUR2UExNeWxObjRMWkk0NU9LL2ZLaFFzdTFWZnQ4RXo3TGNUNmFyYVRrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEhUMnhOaDJVQnZwUmNGMTVHVHlpQXc0V0xGaEYrblEyUmMxbjFQMEV6ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBZEk5KzZCcVBJaTlaVWNnZ2k3NFAwOGF0d1BkVnYwYVpCTC81MTRXMjdXMWk0andDNmJGdFRkOURkYUd4S2JHcFE2WWhwRkcycTdUQkNSclVaUkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6Im1IWFdFWTd5bC9CQzVLeGlRdm9MeS9ydjc4Qk1kQ3FYbmptQUx5YXBKMXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjQ4cnkxUHFmVHdTYzZZQ2Y1WW5KX1EiLCJwaG9uZUlkIjoiYzdhMGM5MTEtYzI3My00Njk2LWJmNTgtZmE5ZmQ4Mjk2YmQ4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik15S3dieDFDRGYzMmVPRlMxSmgrd3lvS3JQWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpZUJSbEFiWVRneGtDV1NYVkJib3dFcVNlUkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTTRNR1ZGWjUiLCJtZSI6eyJpZCI6IjIzMzUzOTMzOTEwMDoxN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkxhdS9vR0VNNjd2cnNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZE53WVRqcWZVYmJacExlTWo3dGxCeUVJaHpFaGQrVm5MalR1SlRYMUlEZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY3V1eWZyT1c2aGtoWXM0ODhrRDUyaDJmRko0MkNQTTlkM0xGWXp3OG4rMWVJZmpxMlJ6VGlydWQ3YktxamF4a2R5Unc0amdKZTNXZG8wa0U5eHdEQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjRXUlVNM241Q0NiY3lDWUhIaE1RTEREVFBXWG5jcm95aHgzSHBsUlBwSzFMelZiMXhqUFhJYjI4WXJhTmRvMkd6eXgwUitocFRUUnIxUnZHdGZIckF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTM5MzM5MTAwOjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhUY0dFNDZuMUcyMmFTM2pJKzdaUWNoQ0ljeElYZmxaeTQwN2lVMTlTQTQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUzNjgxNTZ9",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
