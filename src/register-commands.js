require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
    {
        name: "hey",
        description: "Replies with hey!",
    },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Slash commands registering...");
        // Registered by running this file with 'node src\register-commands.js'

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            {
                body: commands,
            }
        );

        console.log("Slash commands registered successfully");
    } catch (error) {
        console.log(`Slash command error: ${error}`);
    }
})();
