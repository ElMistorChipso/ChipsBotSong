const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'Ennuié',
  description: 'Montre que tu est ennuié!',
  async execute(message, args) {
    const sender = message.author;
    const boredGif = await anime.bored();

    const embed = new EmbedBuilder()
      .setColor('#996633')
      .setDescription(`${sender} je me sens ennuyé... 😴`)
      .setImage(boredGif);

    message.reply({ embeds: [embed] });
  },
};
