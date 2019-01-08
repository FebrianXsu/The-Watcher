const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setDescription("**Help Menu**")
.setColor('RANDOM')
.addField("Default Prefix:", "`-`")
.addField("**Help Menu**", "here is a list of commands the bot can do")
.addField("botinfo", "displays bot information")
.addField("stats", "displays bot stats")
.addField("guilds", "displays servers the bot is in")
.addField("serverinfo", "displays server information")
.addField("about", "displays what this bot can do")
.addField("report", "reports user")
.addField("cfccinfo", "shows CFCC's info & links")
.addField("8ball", "8ball game")
.addField("guilds", "shows servers the bot is listed in")
.addField("ping", "bot responds ping and how many miliseconds")
.addField("shorten", "shorten url quickly")
.addField("cat", "shows random cat pics")
.addField("doggo", "shows random dog pics");

message.channel.send(helpembed);

if(message.member.hasPermission("MANAGE_MESSAGES")){
let modembed = new Discord.RichEmbed()
.setDescription("**Mod Help Menu**")
.setColor("#8300ff")
.addField("Default Prefix:", "`-`")
.addField("**Mod Commands**", "List of Mod Commands and usage")
.addField("addrole", "adds role to user")
.addField("removerole", "removes role from user")
.addField("warn", "warns a user")
.addField("warnlevel", "warning level")
.addField("kick", "kicks a user")
.addField("ban", "bans a user")
.addField("tempmute", "tempory mute on users can be done as s,m,h,d")
.addField("mute", "mutes user")
.addField("unmute", "unmute user")
.addField("say", "get the bot too say something")
.addField("clear", "like prune/purge only cleaner")
.addField("prefix", "allows you to change prefix")
.addField("<command> help", "shows usage for command");

try{
  await message.author.send(modembed);
  message.react("✊");
}catch(e){
  message.reply("Your DM's are locked... I cannot send you the mod commands..");  
}


    }
}

module.exports.help = {
    name: "help"
}