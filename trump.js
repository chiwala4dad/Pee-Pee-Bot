const Discord = require('discord.js');
const client =  new Discord.Client();

client.on("message", (message) => {

  if(message.content === "cheemz"){
    voiceChannel.join()
    then(connection => {
      connection.play('./data/ITS LIT.mp3');
   });
  }


});
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
