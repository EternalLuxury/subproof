/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/

const mongoose = require('mongoose');
const { white, green, red } = require('chalk');
require('dotenv').config();

async function connect() {
    mongoose.set('strictQuery', false);
    try {
        console.log(white('[') + green('INFO') + white('] ') + white(`MongoDB`) + green(` Is Connecting...`));
        await mongoose.connect("", {        
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }).then( async () => {
console.log(white('[') + green('INFO') + white('] ') + green(`The `) + white('MongoDB') + green(' Loaded!'));
    });
    } catch (err) {
      console.log(white('[') + red('INFO') + white('] ') + white(`Error Accured While Trying To Connect To MongoDB |`) + red(` ERROR: ${err}`));
    }



    

    
    return;
}

module.exports = connect
/* 
Made by alwaysluxury#7729
Owner of LuxuryDev
Website: https://luxurydev.eu
If you have any problems join https://luxurydev.eu/discord for help!
*/
