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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTE1MzE3NjEwNzE2NDYzMTA0.D0pRqg.iOGsOTYK5D5nO6R-Mr7s3Asb6Ng);//where BOT_TOKEN is the token of our bot 
