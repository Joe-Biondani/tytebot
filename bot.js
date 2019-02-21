const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


client.login(process.env."NTQ2OTc1ODY0NzUyMDQ2MDg2.D0_rRw.BbcE8emBb88Tz_CUsI--73plN3k");
