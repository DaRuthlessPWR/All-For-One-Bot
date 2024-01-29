module.exports = {
  source: {
    website: {
      support: "https://discord.gg/grapes",
      domain: "", //you need get your repl.co link in replit with keepAlive code, then replace the link
    },
    anti_crash: true, //turn on or off the antiCrash file
    keep_alive: true, //turn on or off the keepAlive file
    dashboard: false, //turn on or off the bot dashboard website
    sharding: false,
    port: 1528, //don't need to touch or changed
    database: {
      mongoURL: process.env.mongoURL,
    },
  },
  discord: {
    token: process.env.token,
    prefix: process.env.prefix,
    invite: `https://discord.com/oauth2/authorize?client_id=${process.env.clientId}&scope=bot+applications.commands&permissions=8`,
    server_support: "https://discord.gg/grapes",
    server_id: "1161404153994690713",
    server_channel_report: "1201377816499986613",
    server_channel_status: "1201377916127297607",
    server_channel_stats: "1201377974906261537",
    topgg: `https://top.gg/bot/${process.env.clientId}/vote`,
  },
  default_language: `en-US`,
  vip_role: ["912596015108988983"],
  owner: ["1154494919038222448", ""],
  whitelist_guilds: [
    "1161404153994690713",
    "1079342938275991604",
    "901877002926174279",
    "912596015075455016",
  ],
  newUpdate:
    "__New bot with much abilities is here!:sparkling_heart:__\n**Release: `^1.0.0`**\n> • Add information commands like `help` , `ping` , `invite`.\n> • Add ticket system feature.\n> • Add fun commands and category.",
};
/**
 * @Info
 * Bot Coded by Mr.SIN RE#1528 :) | https://dsc.gg/persian-caesar
 * @Info
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @Info
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @Info
 */
