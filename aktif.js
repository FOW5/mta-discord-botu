const { MessageEmbed } = require("discord.js")

module.exports = {
    kod: "aktif",
    async run (client, messaage, args) {
        const rvs = new MessageEmbed()
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu sadecene <@&ROL ID> Rolündeki kişiler yapa bilir.")
        .setTitle("Sunucu Aktif!")
        .setDescription(`
        Sunucu ıp'si: **54.36.0.83**
        Sunucu ismi: **Popcron Roleplay**
        Sunucu Versionu: **1.5**
        Type: **Hard Sesli RolePlay**        
        Map: **Ford Carson**
        Site: [PRP](https://popcornroleplay.com/login.php)`)
        .setImage("https://cdn.discordapp.com/attachments/919691999819472907/924234170077683732/unnamed.gif")
        .setTimestamp()
        .setColor("BLUE")
        .setFooter("Popcorn Roleplay Kaliteli hizmet kaliteli sunucu.")
        messaage.channel.send(rvs)
    }
}