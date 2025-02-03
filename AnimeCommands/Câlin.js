const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'cuddle',
  description: 'Faites un câlin à quelqu'un !',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const cuddleGif = await anime.cuddle();

    const embed = new EmbedBuilder()
      .setColor('#ff9900')
      .setDescription(`${sender} cuddles ${targetUser || 'avec l'air'}! 🤗`)
      .setImage(cuddleGif);

    message.reply({ embeds: [embed] });
  },
};
