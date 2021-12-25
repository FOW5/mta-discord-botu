const { MessageEmbed } = require("discord.js")

module.exports = {
    kod: "taşı",
    async run (client, message, args) {
        if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send(`❌ Bir Oyuncuyu taşımak için gerekli yetkide değilsin.`)
        const üye = message.mentions.members.first()
        if (!üye) return message.channel.send(`❌ Bir Oyuncu etiketlemeniz gerekmektedir.`)
        if (!üye.voice.channel) return message.channel.send(`❌ Belirtiğiniz Oyuncu sesde değil.`)
        if (message.member.voice.channel) {
            const rvs = new MessageEmbed()
            .setTitle("✅ | Başarılı")
            .setDescription(`Belirttiğiniz Oyuncu yanınıza Çektim.`)
            .setFooter("POPCORN ROLEPLAY")
            .setTimestamp()
            message.channel.send(rvs)
            üye.voice.setChannel(message.member.voice.channel.id)
        } else {
            if (!args[1]) return message.channel.send(`❌ Bir kanal ID'si giriniz.`)
            if (!isNaN(args[1])) return message.channel.send(`❌ Lütfen Kanal Adını giriniz.`)
            const rvss = new MessageEmbed()
            .setTitle("✅ | Başarılı")
            .setDescription(`Belirttiğiniz Oyuncu yanınıza Çektim.`)
            .setFooter("POPCORN ROLEPLAY")
            .setTimestamp()
            message.channel.send(rvss)
            üye.voice.setChannel(args[1])
        }
    }

}