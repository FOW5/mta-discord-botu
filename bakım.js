const { MessageEmbed } = require("discord.js")

module.exports = {
    kod: "bakım",
    async run (client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu sadecene <@&ROL ID> Rolündeki kişiler yapa bilir.")
        const rvs = new MessageEmbed()
        .setTitle("Sunucu Bakımda!")
        .setDescription(`
        Sunucu bakımda! 
        Bakıma sokan yetkili: <@${message.author.id}>
        
        **Not: Sunucuya girenlerin Mal varlığı silinme ihtimali vardır. Lütfen sunucuya girmeyin.**`)
        .setImage("https://cdn.discordapp.com/attachments/919691999819472907/924237237506420736/sunucu-bakmda-server-offline.gif")
        .setTimestamp()
        .setColor("RED")
        .setFooter("Popcorn Roleplay Kaliteli hizmet kaliteli sunucu.")
        message.channel.send(rvs)
    }
}