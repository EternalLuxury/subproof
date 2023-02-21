/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/

const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
              
GatewayIntentBits.GuildBans,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildVoiceStates,
              GatewayIntentBits.GuildIntegrations,
        
GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.MessageContent,
          
GatewayIntentBits.GuildInvites,
              GatewayIntentBits.GuildMessageReactions,
              GatewayIntentBits.GuildVoiceStates,
              GatewayIntentBits.GuildEmojisAndStickers,
              GatewayIntentBits.GuildScheduledEvents,
              
            ],
            partials: [Partials.Channel, Partials.Message, Partials.Reaction, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.User],
});

client.config = require('./settings/config.js');
client.owner = client.config.OWNER_ID;
client.dev = client.config.DEV_ID;
client.color = client.config.EMBED_COLOR;
if(!client.token) client.token = client.config.TOKEN;

process.on('unhandledRejection', error => console.log(error));
process.on('uncaughtException', error => console.log(error));

["slash"].forEach(x => client[x] = new Collection());
["loadCommand", "loadEvent", "loadMongo"].forEach(x => require(`./handlers/${x}`)(client));

client.login(client.token);

/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/
