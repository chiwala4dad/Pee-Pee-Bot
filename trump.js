const fs = require("fs");
const _ = require("underscore");
const moment = require("moment");
const discord = require('discord.js');

const client = new discord.Client();

// store the filenames of all the audio files for sampling later
const audioFiles = fs.readdirSync("./data");
var selection
var Ronie
client.on("ready", () => {
   console.log("I'm ready!");
});

client.on("message", message => {

   // if the sent message was "ping" then respond with "pong"
   if (message.content === "Thank you") {
       message.channel.send("Kanye, Very cool!");

   // if the sent message was "!trump" then play a random trump quote from our data directory
   } 
   if (message.content === "1"){
     selection = "AB honor roll all F's you retarded.mp3"
     Ronie === true
   }
    if (message.content === "2"){
     selection = "About a week ago.mp3"
     Ronie === true
   }
    if (message.content === "3"){
     selection = "ITS LIT.mp3"
     Ronie === true
   }
    if (message.content === "4"){
     selection = "Kyle A Boogie Wit Da Hoodie and Aminés 2017 XXL Freshman Cypher (1).mp3"
     Ronie === true
   }
    if (message.content === "5"){
     selection = "My names Nino.mp3"
     Ronie === true
   }
    if (message.content === "6"){
     selection = "Not the Yuttas"
     Ronie === true
   }
    if (message.content === "7"){
     selection = "Not the Yuttas.mp3"
     Ronie === true
   }
    if (message.content === "8"){
     selection = "Original Ya Ya Ya YEET! Cx.mp3"
     Ronie === true
   }
    if (message.content === "9"){
     selection = "Pnb rock I just wanna eat ur pussy Dohonna.mp3"
     Ronie === true
   }
    if (message.content === "10"){
     selection = "THE JONTRON RANT.mp3"
     Ronie === true
   }
    if (message.content === "11"){
     selection = "pharogz-cra3y-prod-by-kendox-[AudioTrimmer.com].mp3"
     Ronie === true
   }
     if (Ronie === true) {
      
      message.member.voiceChannel.join()
               .then(connection => {
                  const dispatcher = connection.playFile("./data/" + selection);

                   // disconnect from the voice channel when the quote is over
                   dispatcher.on("end", () => {
                       message.member.voiceChannel.leave();
                       fs.appendFileSync("log.txt", moment().format("YYYY-MM-DD HH:mm:ss.SSS ") + randAudioFile + "\n");
                   }
               )}
                   )}
                   
 else if (message.content === "exec order") {
    message.channel.send("https://images.penguinrandomhouse.com/cover/9781524734398")
   
    } 
   else if (message.content === "#pp play"){ 
      message.channel.send("What the fuck you tryna listen too *niggggaaaaa*")
       }
    if (message.content === "sound list"){
      message.channel.send("aight bro peep the list http://tiny.cc/ppBot")
    }
               
               
   
    if (message.content === "#pp") {

       // make sure the user is in a voice channel
       if (message.member.voiceChannel) {

           // join the user's voice channel
           message.member.voiceChannel.join()
               .then(connection => {

                   // get a random audio file from our list
                   const randAudioFile = _.sample(audioFiles);

                   // play the random audio file
                   const dispatcher = connection.playFile("./data/" + randAudioFile);

                   // disconnect from the voice channel when the quote is over
                   dispatcher.on("end", () => {
                       message.member.voiceChannel.leave();
                       fs.appendFileSync("log.txt", moment().format("YYYY-MM-DD HH:mm:ss.SSS ") + randAudioFile + "\n");
                   });
               })
               .catch(console.log);
       }
    }
});
client.login(process.env.BOT_TOKEN)
