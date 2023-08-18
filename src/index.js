require("dotenv").config(); // Loads .env, which stores confidential data
const { Client, IntentsBitField, EmbedBuilder } = require("discord.js"); // Imports relevant classes from discord.js library by destructuring

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on("ready", (c) => {
    console.log(`${c.user.tag} is ONLINE.`);
});

client.on("interactionCreate", async (interaction) => {
    if (interaction.isChatInputCommand()) {
        console.log(`COMMAND RECEIVED: ${interaction.commandName}.`);

        if (interaction.commandName === "embed") {
            // try {
            const embed = new EmbedBuilder()
                .setTitle("Ignore Me")
                .setDescription("Fed is testing stuff")
                .setColor(0x000843)
                .addFields(
                    {
                        name: "Field title",
                        value: "Sample text",
                        inline: true,
                    },
                    {
                        name: "Field title",
                        value: "Sample text",
                        inline: true,
                    },
                    {
                        name: "Field title",
                        value: "Sample text",
                        inline: true,
                    }
                );

            // interaction.reply({ embeds: [embed] });

            const channelID = BigInt(
                interaction.options.get("channel-id")?.value
            );

            try {
                const channel = await client.channels.fetch(channelID);

                channel
                    .send({ embeds: [embed] })
                    .then(() => {
                        console.log(
                            `Embed Command: message sent successfully.`
                        );
                        interaction.reply(
                            `Embed sent successfully to #${channel.name}.`
                        );
                    })
                    .catch((error) => {
                        console.error(
                            `Embed Command Error: message send fail. \n${error}`
                        );
                    });
            } catch (error) {
                console.log(
                    `Embed Command Error: channel '${channelID}' not found. \n${error}`
                );
            }
        }

        if (interaction.commandName === "add") {
            const num1 = interaction.options.get("first-number")?.value;
            const num2 = interaction.options.get("second-number")?.value;

            interaction.reply(`The sum is ${num1 + num2}`);
        }
    }
});

// client.on("messageCreate", (message) => {
//     if (!message.author.bot) {
//         console.log(message);
//     }
// });

client.login(process.env.TOKEN);
