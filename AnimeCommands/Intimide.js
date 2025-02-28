const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'Intimidé',
  description: 'Intimidez quelqu'un de manière ludique !',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const bullyGif = await anime.bully();

    const embed = new EmbedBuilder()
      .setColor('#9933ff')
      .setDescription(`${sender} playfully bullies ${targetUser || 'l'air'}! 😆`)
      .setImage(bullyGif);

    message.reply({ embeds: [embed] });
  },
};
