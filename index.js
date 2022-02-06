const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client({
        messageCacheLifetime: 60,
        fetchAllMembers: false,
        messageCacheMaxSize: 10,
        restTimeOffset: 0,
        restWsBridgetimeout: 100,
        allowedMentions: {
          parse: ["roles", "users", "everyone"],
          repliedUser: true,
        },
        partials: ["MESSAGE", "CHANNEL", "REACTION"],
        intents: [
          "GUILDS","GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
      });
const config = require('./config.json')
// code in description

client.on("ready", async () => {
        console.log(`${client.user.username} ready!`) // is ` not "" or ''
        client.user.setActivity({
                name: `Coding!`, 
                type: "PLAYING"
        })
})



client.login(config.token) //token

// Ctrl + S save file
// Run node . or node index.js
// Ok Run bot
// sorry