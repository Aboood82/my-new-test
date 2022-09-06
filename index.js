const express = require('express');
const app = express();
app.listen(() => console.log(`Logged On The Server`));

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
let token = "MTAxMzA4MTUyNjg4MTIyNjc5Mg.GlYrAg.mlsI4lBYts3RIWTaK86SAMSEz2o_SrIGI4oC-g";
console.log('Token is: '+(token === "MTAxMzA4MTUyNjg4MTIyNjc5Mg.GlYrAg.mlsI4lBYts3RIWTaK86SAMSEz2o_SrIGI4oC-g" ? 'Correct' : 'Wrong'))
client.login(token);

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
    })

