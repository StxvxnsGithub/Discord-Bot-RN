const { testGuildID } = require("../../../config.json");
const areCommandsDifferent = require("../../utils/areCommandsDifferent");
const getApplicationCommands = require("../../utils/getApplicationCommands");
const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = async (client) => {
    try {
        const localCommands = getLocalCommands();
        const applicationCommands = await getApplicationCommands(
            client,
            testGuildID
        );

        for (const localCommand of localCommands) {
            const { name, description, options } = localCommand;

            const existingCommand = await applicationCommands.cache.find(
                (command) => command.name === name
            );

            if (existingCommand) {
                if (localCommand.disabled) {
                    await applicationCommands.delete(existingCommand.id);
                    console.log(`Disabled Command: ${name}`);
                    continue;
                }

                if (areCommandsDifferent(existingCommand, localCommand)) {
                    await applicationCommands.edit(existingCommand.id, {
                        description,
                        options,
                    });

                    console.log(`Edited Command: ${name}`);
                }
            } else {
                if (localCommand.disabled) {
                    console.log(`Currently Disabled: ${name}`);
                    continue;
                }

                await applicationCommands.create({
                    name,
                    description,
                    options,
                });

                console.log(`Registered Command: ${name}`);
            }
        }
    } catch (error) {
        console.error(`Command Registration ERROR: ${error}`);
    }
};
