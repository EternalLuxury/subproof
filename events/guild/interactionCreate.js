/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/
const { white, green, red } = require('chalk');
module.exports = async(client, interaction) => {
    if (interaction.isCommand || interaction.isContextMenuCommand || interaction.isModalSubmit || interaction.isChatInputCommand) {
        if (!interaction.guild) return;

        let subCommandName = "";
        try {
          subCommandName = interaction.options.getSubcommand();
        } catch { };
        let subCommandGroupName = "";
        try {
          subCommandGroupName = interaction.options.getSubcommandGroup();
        } catch { };
    
        const command = client.slash.find(command => {
          switch (command.name.length) {
            case 1: return command.name[0] == interaction.commandName;
            case 2: return command.name[0] == interaction.commandName && command.name[1] == subCommandName;
            case 3: return command.name[0] == interaction.commandName && command.name[1] == subCommandGroupName && command.name[2] == subCommandName;
          }
        });
    
        if (!command) return;
        

        

     console.log(white('[') + green('INFO') + white('] ') + white(`${command.name[0]} `) + white(`${command.name[1] || ""}`) + white(` ${command.name[2] || ""}`) + white(` was used by ${interaction.user.tag} from ${interaction.guild.name} (${interaction.guild.id})`));   

    if (command) {
        try {
            command.run(client, interaction);
        } catch (error) {
            console.log(error)
            await interaction.reply({ content: `An error occured while trying to process this interaction. Error: ${error}`, ephmeral: true });
        }}
    }
}

/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/
