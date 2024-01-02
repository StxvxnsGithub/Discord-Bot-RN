require("dotenv").config(); // Loads .env, which stores confidential data
const { Client, IntentsBitField, EmbedBuilder } = require("discord.js"); // Imports relevant classes from discord.js library by destructuring
const eventHandler = require("./handlers/eventHandler");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

eventHandler(client); // Executes eventHandler method

client.login(process.env.TOKEN); // Logs into bot with confidential token
