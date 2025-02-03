const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'Dance',
  description: 'Dansez comme si personne ne vous regardait !',
  async execute(message, args) {
    const sender = message.author;
    const danceGif = await anime.dance();

    const embed = new EmbedBuilder()
      .setColor('#ffcc00')
      .setDescription(`${sender} dance ! 💃🕺`)
      .setImage(danceGif);

    message.reply({ embeds: [embed] });
  },
};
