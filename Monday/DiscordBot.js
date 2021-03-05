const { Client, MessageEmbed } = require("discord.js");
require("dotenv").config();

const fetch = require("node-fetch");

const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
  console.log("ready");
}
class DiscordBot {
  constructor(token) {
    console.log("Bot start");
    this.client = new Client();
    this.client.on("ready", this.onReady.bind(this));
    this.client.on("message", this.onMessage.bind(this));
    this.client.login(token);
  }

  onReady() {
    console.log("BOT READY");
  }

  onMessage(keywords) {
    const receivedEmbed = message.embeds[0];
    console.log(message.content);
    if (keywords.content.includes("hi")) {
      console.log("like received");
      const answer = new MessageEmbed();
      answer.setTitle("Answer from bot");
      answer.setColor("0xff0000");
      answer.setDescription("thanks for the like");
      const url = "https://tenor.com/bk4dV.gif";
      setTimeout(() => {
        keywords.channel.send(answer);
      }, 1000);
    }
    if (receivedEmbed && receivedEmbed.description.includes("like")) {
      const answer2 = new MessageEmbed();
      answer2.setTitle("Answer from bot");
      answer2.setColor("0x00ff00");
      answer2.setDescription("finito");
      setTimeout(() => {
        message.channel.send(answer2);
      }, 1000);
    }
  }
}
client.on("message", gotMessage);

async function gotMessage(msg) {

  let tokens = msg.cleanContent.split(" ");

  if (tokens[0] === "hi") {
    let keywords = ["hello"];
    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }
    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
    
    msg.channel.send(keywords);
  } else if (tokens[0] == "hello") {
    let keywords = ["sup"];
    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }
    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
    
    msg.channel.send(keywords);
  }else if (tokens[0] == "sup") {
    let keywords = ["fine"];
    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }
    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
    
    msg.channel.send(keywords);
  }else if (tokens[0] == "fine") {
    let keywords = ["okay"];
    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }
    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
    
    
    setTimeout(() => {
        msg.channel.send(keywords);
      }, 5000);
  }else if (tokens[0] == "okay") {
    let keywords = ["hi"];
    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }
    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
    
    msg.channel.send(keywords);
  }
 
}

module.exports = { DiscordBot };
