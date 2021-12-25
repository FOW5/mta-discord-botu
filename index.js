const Discord = require('discord.js')
const db = require('quick.db')
const client = new Discord.Client()
const { readdirSync } = require('fs');
const { join } = require('path');
const { MessageEmbed } = require('discord.js')
const prefix = "." // prefixini istediğiniz gibi yapa bilirisiniz.


client.on('message', msg => {
    if(msg === null) return;        
    if(msg.guild === null) return; 
    if(msg.channel === null) return; 
});



client.commands= new Discord.Collection();
client.sunucutanıt = new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command);
}

 client.on('ready', () => {
    console.log('Botumuz Aktif')
    const durumlar = [
    "POPCORN ROLEPLAY"  // botun statusu   
    ]
    setInterval(function () {
      let durum = durumlar[Math.floor(Math.random()*durumlar.length )]
      client.user.setActivity(durum)
    }, 5000)
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'duyur')) {
        const kanal = message.mentions.channels.first();
        const args = message.content.split(' ').slice(2);
        const botmesajı = args.join(" ")
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`❌ Bu komutu sadecene Sunucudaki yetkililer kullana bilir.`)
        if (!botmesajı) return message.channel.send(`❌ Lütfen bir kelime girin.`)
        if (!kanal) return message.channel.send(`❌ Kanal tanımlı değil.`)
        kanal.send(botmesajı)
    }
 })


client.on("message", async message => {

    if(message.author.bot) return;
        if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();
        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch {
            return;
        }
    }
})




client.login("BOT TOKENİ");