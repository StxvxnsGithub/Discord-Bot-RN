const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
} = require("discord.js");

module.exports = {
    name: "ban",
    description: "Bans a member.",
    options: [
        {
            name: "target-user",
            description: "The user to ban.",
            required: true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
            name: "reason",
            description: "The reason for banning.",
            type: ApplicationCommandOptionType.String,
        },
    ],
    disabled: true,
    requiredUserPermissions: [PermissionFlagsBits.Administrator],
    requiredBotPermissions: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply(`Ban`);
    },
};
