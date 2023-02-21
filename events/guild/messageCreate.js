/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/

const { ocrSpace } = require('ocr-space-api-wrapper');
const Canva = require('canvas')
const { setTimeout } = require('timers/promises');
const subproof = require("../../schemas/subproof")
//all of these are REQUIRED
module.exports = async (client, message) => {
subproof.findOne({ guild: message.guild.id }, async (err, data) => {
if (!data) return;
let codeAccessRole = data.role;
let codeAccessChannel = data.channel;
let codeAccessLogs = data.logchannel;
let channelName = data.youtube; // All lowercase character!
let apiKey = "K81132745088957";

  if(message.channel.id !== codeAccessChannel) return;
if(message.author.bot || message.author.system) return;
try{
     
    let files = null;
    if (message.attachments.size > 0){
      if (message.attachments.every(attachIsImage)) {
        files = url
      }
    }
  
     function textIsImage(url) {
       return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

  if(!files) return message.reply({ content: `You need to send an image that you subscribed to ${channelName} to get the role. | Made by https://luxurydev.eu` }).then(m => timed_delete(message, m, 15000))

    const img = await Canva.loadImage(files);
    function attachIsImage(msgAttach) {
        url = msgAttach.url || null;
        imagename = msgAttach.name || `Unknown`;
        return url.indexOf(`png`, url.length - 3 ) !== -1 ||
        url.indexOf(`jpeg`, url.length - 4 ) !== -1 ||
        url.indexOf(`gif`, url.length - 3) !== -1 ||
        url.indexOf(`jpg`, url.length - 3) !== -1;
    }
    const canvas = Canva.createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
    
  
const data = await ocrSpace(files, { apiKey: apiKey })// get your own API key
const text = data.ParsedResults[0].ParsedText.toLowerCase()
if(text.toLowerCase().includes(channelName) && text.toLowerCase().includes('subscribed')){
  if(message.member.roles.cache.some(x => x.id == codeAccessRole)) return message.reply({ content: `You are already subscribed | Made by https://luxurydev.eu` }).then(m => timed_delete(message, m, 15000))
    message.reply({ content: `Thanks for subscribing to ${channelName} | Made by https://luxurydev.eu` }).then(m => timed_delete(message, m, 15000))
    message.react("✅")
    

  let ch = client.channels.cache.get(codeAccessLogs)
    if(!ch) return;
      ch.send({ 
      content: `${message.author} **Sent proof in <#${codeAccessChannel}>** \n \n **__User's message:__** \n> ${message.content || `\`Nothing\``} \n\n The image is provided below, if they did not subscribe take their role. | Made by https://luxurydev.eu`, 
      files: [{ attachment: canvas.toBuffer() }],
    })

  
    return message.member.roles.add(codeAccessRole)
} else {
  return message.reply({ content: `It appears that you are not subscribed. Make sure that your image shows the channel name and the subscribed button. And also make sure its in english! | Made by https://luxurydev.eu` }).then(m => timed_delete(message, m, 15000))
}
  }catch(e){
  console.log(e)
  return message.reply({ content: `A error occured while trying to process! \n > \`${e.message}\`` }).then(m => timed_delete(message, m, 15000))
    }
})
}
function timed_delete(m1, m2, time){
  if(!m1 || !m2 || !time) return;
  setTimeout(function(){
    m1.delete()
    m2.delete()
  }, time)
      }

/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/
