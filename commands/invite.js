const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "invite",
  description: "invitez le bot sur votre serveur",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Invitation bot")
  .setColor("RED")
  .setDescription(`[CLICK ICI](${inviteURL}) pour m'inviter`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}