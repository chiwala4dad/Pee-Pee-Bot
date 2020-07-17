const Discord = require('discord.js');
const client =  new Discord.Client();

client.on("message", (message) => {
  const voiceChannel = message.member.voice.channel
  if(message.content === "cheemz"){
  
    voiceChannel.join()
  
  }


});
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
