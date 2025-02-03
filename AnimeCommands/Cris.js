const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'Cris',
  description: 'Criez de peur ou d’excitation !',
  async execute(message, args) {
    const sender = message.author;
    const screamGif = await anime.scream();

    const embed = new EmbedBuilder()
      .setColor('#ff3300')
      .setDescription(`${sender} est en train de crier... 😱`)
      .setImage(screamGif);

    message.reply({ embeds: [embed] });
  },
};
