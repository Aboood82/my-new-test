const express = require('express');
const app = express();
app.listen(() => console.log(`Logged On The Server`));

const Discord = require('discord.js');
// const allIntents = new Intents(32767);
const client = new Discord.Client({ intents: 32767 });

const prefix = "$";


client.on('ready', () => {
      console.log(client.user.username)
  client.user.setPresence({
        status: "online",
        activities: [{
            name: `$help`,
        }]
    });
});

    client.on('messageCreate', message => {
        if (message.content === "totoot") return message.reply("working")
    });

    client.login("MTAxMzA4MTQyOTczNjk1MTkyOA.Gz_-4t.gopLXVi7s9tKgZqQ-a7Ams2zeotoO9g8J77Kks");