const express = require('express');
const app = express();
app.listen(() => console.log(`HEEEEEEW3333333333333333333333333EEEEEEEEY`));

const Discord = require('discord.js');
const client = new Discord.Client({
    intents:[
Discord.Intents.FLAGS.GUILDS,
Discord.Intents.FLAGS.GUILD_MESSAGES,
Discord.Intents.FLAGS.GUILD_MEMBERS,
Discord.Intents.FLAGS.GUILDS,
Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
Discord.Intents.FLAGS.GUILD_PRESENCES,
    ]
});

const prefix = "$";

client.on('ready', () => {
    // channel = client.channels.cache.get('977969551117520916');
    // channel.send(`I'm ready | ✅`)
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

client.login("MTAxMzA4MTc1NDc5NTUyNDIxOA.G_k7bC.KjsP8LKB8SDmbclV64_5UeqpUS3gZP5X6BiUvI");
