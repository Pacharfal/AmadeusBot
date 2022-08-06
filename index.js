// I hide my token to another file which is not here so you cannot steal my bot.
// If you want zou can create Discord bot, copy code, you just need to add file
// token.js which contains your token.

import defaultExport from "token.js";
    const Discord = require('discord.js');
    const bot = new Discord.Client();

    bot.on('ready', () =>{
        console.log('This bot is online!');
    })

    bot.login(token);