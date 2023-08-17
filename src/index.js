require("dotenv").config(); // Loads .env, which stores confidential data
const { Client, IntentsBitField } = require("discord.js"); // Imports relevant classes from discord.js library by destructuring

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on("ready", (c) => {
    console.log(`${c.user.tag} is online`);
});

// client.on("messageCreate", (message) => {
//     if (!message.author.bot) {
//         console.log(message);
//     }
// });

client.login(process.env.TOKEN);
