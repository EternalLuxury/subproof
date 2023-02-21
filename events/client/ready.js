/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/

const { white, green, red } = require('chalk');
module.exports = async (client) => {
    console.log(white('[') + green('INFO') + white('] ') + white(`${client.user.tag} `) + white(`(${client.user.id})`) + green(' Is ready to serve! c:'));
    let guilds = client.guilds.cache.size;
    let members = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);
    let channels = client.channels.cache.size;

    const activities = [
        `Made By https://luxurydev.eu`,
        `Ready to serve ${members}`,
        `/grootiehandler | ${guilds} Guilds and ${channels} channels`,
    ]

    setInterval(() => {
        client.user.setPresence({ 
            activities: [{ name: `${activities[Math.floor(Math.random() * activities.length)]}`, type: 2 }], 
            status: 'dnd', 
        });
    }, 15000)

};
/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/
