module.exports = {
    name: "information",
    description: "Posts information embed",
    disabled: true,

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
};
