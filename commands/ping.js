//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Ping le bot",
  execute(client, message) {
    message.channel.send("PONG :)");
  }
};
