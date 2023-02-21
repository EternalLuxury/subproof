/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/

const chillout = require("chillout");
const readdirRecursive = require("recursive-readdir");
const { resolve, relative } = require("path");
const { white, green, red } = require('chalk');
module.exports = async (client) => {
    let interactionsPath = resolve("./commands");
    let interactionFiles = await readdirRecursive(interactionsPath);

    await chillout.forEach(interactionFiles, (interactionFile) => {
        const start = Date.now();
        const rltPath = relative(__dirname, interactionFile);
     //   console.log(`[INFO] Loading interaction at.. "${interactionFile}"`)
        const command = require(interactionFile);

        if (command.name.length > 3) {
            
          console.log(white('[') + green('INFO') + white('] ') + green(`Seems like ${rltPath} has a long name. You might need to change that or the command wont load. Ill be skipping it until you fix it so we don't get any errors.`));
            return;
        }

        if (!command.name?.length) {
            
            console.log(white('[') + green('INFO') + white('] ') + green(`Seems like ${rltPath} does not have a name. You might need to fix that or the command wont load. Ill be skipping it until you fix it so we don't get any errors.`));
            return;
        }

        if (client.slash.has(command.name)) {
            
           console.log(white('[') + green('INFO') + white('] ') + green(`Seems like ${command.name[1]} Command/Interaction is already registered/already exists, I don't think that's a good thing. Im going to skip it until you fix it so we dont get any errors.`));
            return;
        }

        client.slash.set(command.name, command);
     //   console.log(`[INFO] "${command.type == "CHAT_INPUT" ? `/${command.name.join(" ")}` : `${command.name[0]}`}" ${command.name[1] || ""}  ${command.name[2] || ""} The interaction has been uploaded. (it took ${Date.now() - start}ms)`);
        });

        if (client.slash.size) {
            console.log(white('[') + green('INFO') + white('] ') + white(`${client.slash.size} `) + green('Interactions') + green(' Loaded! :]'));
        } else {
            console.log(white('[') + green('INFO') + white('] ') + green(`I don't feel very good... Neither are my slash commands loading... Do you mind taking a look at my code? Or go to https://luxurydev.eu/discord`));
        }
}
/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/
