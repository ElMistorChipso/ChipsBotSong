const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'highfive',
  description: 'Donnez à quelqu'un un tope-là virtuel !',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const highfiveGif = await anime.highfive();

    const embed = new EmbedBuilder()
      .setColor('#00ccff')
      .setDescription(`${sender} gives ${targetUser || 'l'air'} tope-là ! 🖐`)
      .setImage(highfiveGif);

    message.reply({ embeds: [embed] });
  },
};
