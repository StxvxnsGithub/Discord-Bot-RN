module.exports = {
    name: "information",
    description: "Posts information embed",

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
};
