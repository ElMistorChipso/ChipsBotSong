const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kick a user from the server',
    execute(message, args) {
        // Check if the user has the necessary permissions to use the command
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.reply('❌ Vous n'êtes pas autorisé à utiliser cette commande.');
        }

        // Check if a user was mentioned in the command
        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('❌ Vous devez mentionner un utilisateur pour kicker.

Icône de validation par la communauté');
        }

        // Kick the mentioned user
        const member = message.guild.members.cache.get(user.id);
        member.kick();

        // Create an embed object
        const embed = new EmbedBuilder()
            .setColor('#FF0000')
            .setTitle('User Kicked ✅')
            .setDescription(`▶️ ${user.tag} a été expulsé du serveur par ${message.author.tag}.`)
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


/*

   MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/FUEHs7RCqz
   YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/c4kaW2sSbm ]
*/
