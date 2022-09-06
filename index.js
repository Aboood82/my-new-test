const express = require('express');
const app = express();
app.listen(() => console.log(`44444444444444444444444444444444444444444444444`));

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

client.login("MTAxMzA4MTQyOTczNjk1MTkyOA.GP3yE1.oiDsmVngfS3CDOJpPl75cXv3dQoiJxRsUs6Ng4");
