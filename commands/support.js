const { MessageEmbed } = require("discord.js")
const { supportURL } = require("../config.json")
module.exports = {
  name: "support",
  description: "Rejoindre le serveur support",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Invitation serveur support")
  .setColor("RED")
  .setDescription(`[CLICK ICI](${supportURL}) pour rejoindre le serveur support`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}