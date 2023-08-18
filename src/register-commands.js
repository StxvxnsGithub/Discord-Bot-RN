require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
    {
        name: "embed",
        description: "Sends an embed.",
        options: [
            {
                name: "channel-id",
                description: "The target channel's ID.",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
    {
        name: "add",
        description: "Adds two numbers.",
        options: [
            {
                name: "first-number",
                description: "The first numver.",
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: "one",
                        value: 1,
                    },
                    {
                        name: "two",
                        value: 2,
                    },
                ],
                required: true,
            },
            {
                name: "second-number",
                description: "The second numver.",
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ],
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
