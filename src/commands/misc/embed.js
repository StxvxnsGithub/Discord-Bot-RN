const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
} = require("discord.js");

module.exports = {
    name: "embed",
    description: "Sends an embed test.",
    options: [
        {
            name: "channel-id",
            description: "The target channel's ID.",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],
    // options: Object[],
    // disabled: true,

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
};
