const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'hug',
  description: 'Envoyez un gif câlin dans un message intégré !',
  async execute(message, args) {
    
    const sender = message.author;

    
    const targetUser = message.mentions.users.first() || sender;

   
    const hugGif = await anime.hug();

 
    const embed = new EmbedBuilder()
      .setColor('#ff0000')
      .setDescription(`${sender} Envoie un câlin à ${targetUser}!`)
      .setImage(hugGif);

    
    message.reply({ embeds: [embed] });
  },
};
