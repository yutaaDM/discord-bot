require("dotenv").config()
const {Client} = require("discord.js")

const client = new Client({intents: []})

client.once("ready",() => {
    console.log(`Ready! Logged in as ${client.user.tag}! Im on ${client.guilds.cache.size} guild(s)! `)
   client.user.setActcivity({name:`mit dem Code`, type: `PLAYING`})
})



client.login(process.env.DISCORD_BOT_TOKEN)