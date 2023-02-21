/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/

const { EmbedBuilder, ApplicationCommandOptionType, PermissionsBitField } = require("discord.js");
const Schema = require("../schemas/subproof");
module.exports = {
  name: ["subproof"],
  description: "Setup The Sub Proof System.",
  options: [
    {
      name: "choice",
      description: "Enable/Disable Scam System",
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        {
          name: "enable",
          value: "enable",
        },
        {
          name: "disable",
          value: "disable",
        },
      ],
    },
    {
      name: "channel",
      description: "Where proof photots should be sent.",
      type: ApplicationCommandOptionType.Channel,
      required: false,
    },
    {
      name: "logchannel",
      description: "Where they should be logged.",
      type: ApplicationCommandOptionType.Channel,
      required: false,
    },
    {
      name: "role",
      description: "What role should be given after.",
      type: ApplicationCommandOptionType.Role,
      required: false,
    },
    {
      name: "youtube",
      description: "What youtube channel.",
      type: ApplicationCommandOptionType.String,
      required: false,
      }
  ],

  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */

  run: async (client, interaction) => {
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageGuild)) return interaction.reply(`You don't have permission.`);
    
    let choice = interaction.options.getString('choice');
    let channel = interaction.options.getChannel('channel');
    let logchannel = interaction.options.getChannel('logchannel');
    let role = interaction.options.getRole('role');
   let youtube = interaction.options.getString('youtube');

    

    if (choice.toLowerCase() == "enable") {
      if(!channel) return interaction.reply({ content: `Provide the channel to setup this feature.`, ephemeral: true })
      if(!logchannel) return interaction.reply({ content: `Provide the log channel to setup this feature.`, ephemeral: true })
      if(!youtube) return interaction.reply({ content: `Provide the youtube channel.`, ephemeral: true })
      if(!role) return interaction.reply({ content: `Provide the role.`, ephemeral: true })
      Schema.findOne({ guild: interaction.guild.id }, async (err, data) => {
        if (data) {
          data.delete();
        } else {
          new Schema({
            guild: interaction.guild.id,
            channel: channel.id,
            logchannel: logchannel.id,
            role: role.id,
            youtube: youtube.toLowerCase()
          }).save();
          interaction.reply({ content: "✅ Subproof System Enabled | Made by https://luxurydev.eu" });
        }
      });
    } else if (choice.toLowerCase() == "disable") {
      Schema.findOne({ guild: interaction.guild.id }, async (err, data) => {
      if (!data)
        return interaction.reply({
          content: "Subproof System Was Never Enabled | Made by https://luxurydev.eu",
        });
      data.delete();
      interaction.reply({ content: "❌ Subproof System Disabled | Made by https://luxurydev.eu" });
      })
    }
  },
};

/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/
