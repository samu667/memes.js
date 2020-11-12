const Discord = require('discord.js')

   module.exports.run = async(client, message, args) => {
   
var list = [
        'https://i.imgur.com/lWoYZ1B.jpg',
        'https://i.imgur.com/H4eVEqo.jpg',
        'https://i.imgur.com/sAqjTZX.png',
        'https://i.imgur.com/PyIgFl4.jpg',
        'https://i.imgur.com/HVANcR5.jpg',
        'https://i.imgur.com/SSYHg6O.jpg',
        'https://i.imgur.com/b0dcjOd.png',
        'https://i.imgur.com/XwWFkIG.jpg',
        'https://i.imgur.com/GpfMfEx.jpg',
        'https://i.imgur.com/NPquj35.jpg',
        'https://i.imgur.com/yM93exB.jpg',
        'https://i.imgur.com/vFkjwXx.jpg',
        'https://i.imgur.com/95BrGx1.jpg',
        'https://i.imgur.com/zsaTL4d.jpg',
        'https://i.imgur.com/3l4mdQ0.png',
        'https://i.imgur.com/a2O381O.png',
        'https://i.imgur.com/FayIlLt.png',
        'https://i.imgur.com/F003CTD.png',
        'https://i.imgur.com/U9IcILb.png',
        'https://i.imgur.com/4BE8tCF.png',
        'https://i.imgur.com/vOBXUbH.png',
        'https://i.imgur.com/d3sdcsT.png'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];

    var reason = message.content.split(" ").slice(1).join(" ");

    const embed1 = new Discord.MessageEmbed()
  .setDescription(`Meme 👇`)
  .setColor("#ffbe33")
  .setImage(rand)
  .setTimestamp()
  .setFooter(`Comando por: ${message.author.username}`)
  message.channel.send({embed: embed1}); 
}
module.exports.help = {
  name: "memes",
  aliases: ['m']
}
