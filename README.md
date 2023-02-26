

## 📑 Feature
- [x] Youtube SubProof
- [x] SlashCommand
- [x] Handlers
- [x] Easy to use

## 📎 Requirements

- Node.js v16.9.0+ **[Download](https://nodejs.org/en/download/)**
- Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
- MongoDB **[Get One Here](https://www.mongodb.com/)**


## 📚 Installation

```
git clone https://github.com/alwaysluxury/subproof
npm install
```


## 📄 Configuration



```.env
# Bot
TOKEN=REPLACE_HERE
EMBED_COLOR=#000001
OWNER_ID=REPLACE_HERE
```
Then go to 
```.env
./handlers/loadMongo
```
And enter your mongodb

After installation you can use `npm run start` to start the bot.

After the bot is running type *node deploySlash.js global* to deploy commands globally or *node deploySlash.js guild (guild id)* to deploy in a guild.

If you need help or have any problems join: **https://luxurydev.eu**

Make sure to invite our discord bot: **https://grootie.xyz**
