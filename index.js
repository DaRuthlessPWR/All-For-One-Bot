//======== Packages ========
require("dotenv").config();
const config = require(`${process.cwd()}/storage/config.js`);
const { ShardingManager } = require("discord.js");
if (config.source.sharding) {
  const manager = new ShardingManager(`${process.cwd()}/bot.js`, {
    totalShards: "auto",
    token: config.discord.token,
  });
  manager.on("shardCreate", (shard) =>
    console.log(`Launched shard ${shard.id}`),
  );
  manager.spawn();
} else {
  require(`${process.cwd()}/bot.js`);
}

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log("Server Online because of Axo Coder ✅!!");
});
/**
 * @Info
 * Bot Coded by Mr.SIN RE#1528 :) | https://dsc.gg/persian-caesar
 * @Info
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @Info
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @Info
 */
