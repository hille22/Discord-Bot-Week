const { Client, MessageEmbed } = require("discord.js");
const fs = require('fs');

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
  constructor(token, win) {
    console.log("Bot start");

    this.win = win;
    this.loadJSON("./local.json");


    this.client = new Client();
    this.client.on("ready", this.onReady.bind(this));
    this.client.on("message", this.onMessage.bind(this));
    this.client.login(token);
  }

  loadJSON(url) {
    this.json = JSON.parse(fs.readFileSync(url));
  }

  onReady() {
    console.log("BOT READY");
  }

  
  async onMessage(message) {
    
    console.log(message.content);
    if (message.content != "stop") {
  
      if (message.content === "Hi") {
        let keywords = ["Hello"];     
        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        message.channel.send(json.results[index].url);
        message.channel.send(keywords);
        this.win.webContents.send("messageDiscord",{url:`https://g.tenor.com/v1/gifs?ids=${json.results[index].id}&key=B2YXT0NNPT2H`,text:keywords});
  
      } else if (message.content == "Hello") {
        let keywords = ["Sup"];   
        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        message.channel.send(json.results[index].url);
        message.channel.send(keywords);
        this.win.webContents.send("messageDiscord",{url:`https://g.tenor.com/v1/gifs?ids=${json.results[index].id}&key=B2YXT0NNPT2H`,text:keywords});

  
      } else if (message.content == "Sup") {
        let keywords = ["Fine"];
        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        message.channel.send(json.results[index].url);
        message.channel.send(keywords);
        this.win.webContents.send("messageDiscord",{url:`https://g.tenor.com/v1/gifs?ids=${json.results[index].id}&key=B2YXT0NNPT2H`,text:keywords});

      } else if (message.content == "Fine") {
        let keywords = ["Okay"];
        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        message.channel.send(json.results[index].url);
        message.channel.send(keywords);
        this.win.webContents.send("messageDiscord",{url:`https://g.tenor.com/v1/gifs?ids=${json.results[index].id}&key=B2YXT0NNPT2H`,text:keywords});

  
      } else if (message.content == "Okay") {
        let keywords = ["Hi"];
        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        message.channel.send(json.results[index].url);

        message.channel.send(keywords);
        this.win.webContents.send("messageDiscord",{url:`https://g.tenor.com/v1/gifs?ids=${json.results[index].id}&key=B2YXT0NNPT2H`,text:keywords});
        
      }
    }
  }
}

module.exports = { DiscordBot };
