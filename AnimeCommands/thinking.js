const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'thinking',
  description: 'Montre que tu est en train de réfléchir!',
  async execute(message, args) {
    const sender = message.author;
    const thinkingGif = await anime.thinking();

    const embed = new EmbedBuilder()
      .setColor('#99ccff')
      .setDescription(`${sender} pense... 🤔`)
      .setImage(thinkingGif);

    message.reply({ embeds: [embed] });
  },
};
