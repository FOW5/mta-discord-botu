const { MessageEmbed } = require("discord.js")

module.exports = {
    kod: "bug-bildir",
    async run (client, message, args) {
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('❌ Bug bildirmek için Bugun ne olucağını yaz.')
const rvs = new MessageEmbed()
.setTitle("✅ | Başarılı")
.setColor('BLUE')
.setDescription(`**Bug Kanalı** ${message.channel.name} \n **Bug Bildirilen Sunucu** \`${message.guild.name}\` \n **Bugu Bildiren Kullanıcı** <@${message.author.id}> \n **Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('BUG KANAL ID').send(rvs)
  
message.channel.send("Bug bildiriminiz gönderildi. ✅").then(message => message.delete({ timeout: 5000 }));

    }
}