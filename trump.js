
const fs = require("fs");
const _ = require("underscore");
const moment = require("moment");
const discord = require('discord.js');
const client = new discord.Client();
// store the filenames of all the audio files for sampling later
const audioFiles = fs.readdirSync("./data");

client.on("ready", () => {
   console.log("I'm ready!");
}); 


client.on("message", async message => {
	if (message.content === "cheemz")
	  var voiceChannel = message.member.voiceChannel;
	  voiceChannel.join().then(connection =>
{
     const dispatcher = connection.playFile('./data/ITS LIT.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
	  }
				   
   // if the sent message was "ping" then respond with "pong"
   if (message.content === "Thank you") {
       message.channel.send("Kanye, Very cool!");

   // if the sent message was "!trump" then play a random trump quote from our data directory
   } 
  
    
});
client.login(process.env.BOT_TOKEN)
