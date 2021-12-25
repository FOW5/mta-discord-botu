const { MessageEmbed } = require("discord.js");

module.exports = {
    kod: "üye-durumu",
    async run (client, message, args) {
    const rvs = new MessageEmbed()
    .setAuthor("Üyedurum")
    .setColor("RED")
    .addField("**Toplam Kullanıcı**",message.guild.memberCount )
    .addField("**Çevrimiçi Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'online').size)
    .addField("**Boşta Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'idle').size)
    .addField("**Rahatsız Etmeyindeki Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'dnd').size)
    .addField("**Çevrimdışı Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'offline').size)
    .setTimestamp()
    message.channel.send(rvs);
    }
}