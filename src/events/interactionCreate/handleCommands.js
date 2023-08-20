const { developers, testGuildID } = require("../../../config.json");
const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find(
            (command) => command.name === interaction.commandName
        );

        if (!commandObject) return;

        if (commandObject.devOnly) {
            if (!developers.includes(interaction.member.id)) {
                interaction.reply({
                    content: "Only developers are allowed to run this command.",
                    ephemeral: true,
                });
                return;
            }
        }

        if (commandObject.testOnly) {
            if (!(interaction.guild.id === testGuildID)) {
                // testGuildID process.env.GUILD_ID
                interaction.reply({
                    content: `This command is only available within test servers.`,
                    ephemeral: true,
                });
                return;
            }
        }

        if (commandObject.requiredUserPermissions?.length) {
            for (const permission of commandObject.requiredUserPermissions) {
                if (!interaction.member.permissions.has(permission)) {
                    interaction.reply({
                        content: "Not enough permissions.",
                        ephemeral: true,
                    });
                    return;
                }
            }
        }

        if (commandObject.requiredBotPermissions?.length) {
            for (const permission of commandObject.requiredBotPermissions) {
                const bot = interaction.guild.members.me;

                if (!bot.permissions.has(permission)) {
                    interaction.reply({
                        content: "Bot has not been given enough permissions.",
                        ephemeral: true,
                    });
                    return;
                }
            }
        }

        await commandObject.callback(client, interaction);
    } catch (error) {
        console.error(`Command Error: ${error}`);
    }
};
