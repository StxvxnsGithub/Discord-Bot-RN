const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
} = require("discord.js");

module.exports = {
    name: "ping",
    description: "Pong.",
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    disabled: true,
    requiredUserPermissions: [PermissionFlagsBits.Administrator],
    requiredBotPermissions: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms.`);
    },
};
