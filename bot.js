const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("702910538413375628")
setInterval(function() {
channel.send(`اهلين 😢`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
