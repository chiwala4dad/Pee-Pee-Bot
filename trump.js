const Discord = require('discord.js');
const client =  new Discord.Client();

client.on("message", (message) => {

  if(message.content === "cheemz"){
    const voiceChannel = message.member.voice.channel
    voiceChannel.join()
  
  }


});
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
