
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


client.on("message", message => {
  function Play(fileName) {
          message.member.voiceChannel.join()
               .then(connection => {
                 // play the random audio file
                   const dispatcher = connection.play("./data/" + fileName );

                   // disconnect from the voice channel when the quote is over
                   dispatcher.on("end", end => {
                       message.member.voiceChannel.leave();
                       fs.appendFileSync("log.txt", moment().format("YYYY-MM-DD HH:mm:ss.SSS ") + "AB honor roll all F's you retarded.mp3" + "\n");
                   });
               })
  
}
   // if the sent message was "ping" then respond with "pong"
   if (message.content === "Thank you") {
       message.channel.send("Kanye, Very cool!");

   // if the sent message was "!trump" then play a random trump quote from our data directory
   } 
  
    
});
client.login(process.env.BOT_TOKEN)
