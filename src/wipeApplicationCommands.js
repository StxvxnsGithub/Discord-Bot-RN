require("dotenv").config();
const { REST, Routes } = require("discord.js");
const { testGuildID, clientID } = require("../config.json");

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

// Wipes all guild-based commands
rest.put(Routes.applicationGuildCommands(clientID, testGuildID), { body: [] })
    .then(() => console.log(`Deleted all guild commands.'`))
    .catch(console.error);

// Wipes all global commands
rest.put(Routes.applicationCommands(clientID), { body: [] })
    .then(() => console.log(`Deleted all application commands.`))
    .catch(console.error);
