const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'Gifle',
  description: 'Donnez une gifle virtuelle à quelqu'un !',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const slapGif = await anime.slap();

    const embed = new EmbedBuilder()
      .setColor('#ff3300')
      .setDescription(`${sender} gives ${targetUser || 'l'air'} une gifle! 😠`)
      .setImage(slapGif);

    message.reply({ embeds: [embed] });
  },
};
