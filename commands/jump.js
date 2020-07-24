const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");

module.exports = {
  name: "jump",
  description: "Aller à n'importe quelle chanson que vous aimez",
  execute (client, message, args) {
    
     let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("VOUS DEVEZ ÊTRE DANS LE CANAL VOCAL :/")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Il n'y a rien à jouer que je pourrais boucler")
      return message.channel.send(embed);
    }
     if(!args[0]) {
      embed.setAuthor(`Veuillez donner le numéro de la chanson`)
      return message.channel.send(embed)
    }
    
      if(isNaN(args[0])) {
      embed.setAuthor("Veuillez n'utiliser que des valeurs numériques")
      return message.channel.send(embed)
    }
    
    
    //LETS FIX JUMP COMMAND :D
  if(serverQueue.songs.length < args[0]) {
    embed.setAuthor("Impossible de trouver cette chanson dans la file d'attente")
    return message.channel.send(embed)  
                                         }
    serverQueue.songs.splice(0, Math.floor(parseInt(args[0]) - 1))
    serverQueue.connection.dispatcher.end()
    
    embed.setDescription(`JUMPED TO THE SONG NUMBER - ${args[0]}`)
    message.channel.send(embed)
    
  }
}