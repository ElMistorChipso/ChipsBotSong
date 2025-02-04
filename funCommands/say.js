const db = require("../mongodb");
module.exports = {
  name: 'say',
  description: 'Faire en sorte que le bot répète un message et supprime le message de l'utilisateur',
  async execute(message, args) {
   
    if (args.length === 0) {
      message.reply('Veuillez fournir un message à répéter.');
      return;
    }

  
    const messageToRepeat = args.join(' ');

    
    try {
      await message.delete();
    } catch (error) {
      console.error(`Erreur lors de la suppression du message utilisateur: ${error}`);
    }

 
    message.channel.send(messageToRepeat);
  },
};
