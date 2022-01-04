const Discord = require('discord.js');
const commandHandler = require('./commandHandler');
require('dotenv').config();

const client = new Discord.Client();
client.login(process.env.DISCORD_API_KEY);
client.once('ready', () => { console.log('RR está online!') });
client.on('message', commandHandler);

/*
   Link para adicionar o BOT.
   https://discord.com/oauth2/authorize?client_id=747272925945790497&scope=bot&permissions=36718656

   Link para adicionar o BOT com permissões de Administrador.
   https://discord.com/oauth2/authorize?client_id=747272925945790497&scope=bot&permissions=8
*/