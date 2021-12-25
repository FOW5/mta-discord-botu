const { MessageEmbed } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
module.exports = {
    kod: "stats",
    async run (client, message, args) {
        let üye = message.mentions.users.first()
        if (!üye) {
           const rvs = new MessageEmbed()
           .setTitle(`stats`)
           .setThumbnail(üye.displayAvatarURL({dynamic: true}))
        .setDescription(üye.tag + `Kişisinin bilgileri: \n\n Kullanıcı adı: ${üye.username}\n Etiketi: ${üye.discriminator} \n ID: ${üye.id} \n Son mesajı: ${üye.lastMessage} \n Kullanıcı Activitesi: ${üye.presence.activities[0].state} \n üye durumu: ${durum}.replace('online', 'çevrimiçi') \n Rolleri: ${message.guild.members.cache.get(üye.id).roles.cache.filter(r => r !== '@everyone').map(ro => ro).join(' | ')}`)
        message.channel.send(rvs)
        } else {
        üye = message.author
     const rvs = new MessageEmbed()
     .setTitle(`stats`)
    .setThumbnail(üye.displayAvatarURL({dynamic: true}))
    .setDescription(üye.tag + `Kişisinin bilgileri: \n\n Kullanıcı adı: ${üye.username}\n Etiketi: ${üye.discriminator} \n ID: ${üye.id} \n Son mesajı: ${üye.lastMessage} \n Kullanıcı Activitesi: ${üye.presence.activities[0].state} \n üye durumu: ${durum}.replace('online', 'çevrimiçi') \n Rolleri: ${message.guild.members.cache.get(üye.id).roles.cache.filter(r => r !== '@everyone').map(ro => ro).join(' | ')}`)
    message.channel.send(rvs)
        }
    }
}