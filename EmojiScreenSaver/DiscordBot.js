const { Client, MessageEmbed } = require("discord.js");

const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", readyDiscord);


function readyDiscord() {
  console.log("ready");
}
class DiscordBot {
  constructor(token, win) {
    console.log("Bot start");
    this.win = win;
    this.client = new Client();
    this.client.on("ready", this.onReady.bind(this));
    this.client.on("message", this.onMessage.bind(this));
    
    this.client.login(token);
  }



  onReady() {
    console.log("BOT READY");
  }


  onMessage(message) {
    const receivedEmbed = message.embeds[0];
    if (receivedEmbed) {
      this.win.webContents.send("emojiChanged", receivedEmbed);
    } else {
      this.win.webContents.send("emojiChanged", message.content);
      this.win.webContents.send("messageDiscord", message.content);
      if (message.content === "🍆") {
        console.log("BOT move");

      }
    }
  }
}

module.exports = { DiscordBot };
