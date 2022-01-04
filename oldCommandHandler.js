const discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");

const client = new discord.Client();
const prefix = '?';

client.commands = new discord.Collection();

const arqs_comando = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));
for (let arq of arqs_comando) {
	const comando = require(`./comandos/${arq}`);
	client.commands.set(comando.name, comando);
}

var server = {};
var f;
var i = 0;
var repeat = "0";
var vol;

async function addSong(connection, message, args) {
	if (!ytdl.validateURL(args[0])) {
		message.channel.send("Precisa usar um link!");
		return;
	}

	let info = await ytdl.getInfo(args[0]);

	f.queue.push({
		titulo: info.videoDetails.title,
		url: args[0]
	});

	message.channel.send(`${info.videoDetails.title} adicionada a fila!`);

	if (f.queue.length === 1)
		play(connection, message);
}

async function play(connection, message, track) {
	if (vol)
		f.dispatcher.setVolume(vol);

	if (track)
		i = track;

	f.dispatcher = connection.play(ytdl(f.queue[i].url, { filter: "audioonly" }));

	i++;
	f.dispatcher.on("finish", () => {
		if (repeat === "all") {
			if (i > f.queue.length - 1)
				i = 0;
			play(connection, message);
		} else if (repeat === "1") {
			i--;
			play(connection, message);
		} else {
			if (i > f.queue.length - 1)
				connection.disconnect();
			else
				play(connection, message);
        }
	});
}

async function playSpecial(connection, message) {
	if (vol)
		f.dispatcher.setVolume(vol);
	
	repeat = "1";
	f.dispatcher = connection.play(f.queue[0]);

	f.dispatcher.on("finish", () => {
		playSpecial(connection, message);
	});
}

module.exports = async function (message) {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/\s+/);
	const command = args.shift().toLowerCase();

	switch (command) {
		case "pl":
			if (!message.member.voice.channel) {
				message.channel.send("Você precisa estar em um canal de voz, para usar o comando!");
				return;
			}

			client.commands.get(command).execute(message, args);

			if (!server[message.guild.id]) {
				server[message.guild.id] = { queue: [] };
				f = server[message.guild.id];
			}

			f.queue.push(args[0]);

			if (!message.member.voice.connection)
				message.member.voice.channel.join().then(function (connection) { playSpecial(connection, message) });

			break;

		case "add":
			if (!message.member.voice.channel) {
				message.channel.send("Você precisa estar em um canal de voz, para usar o comando!");
				return;
			}

			if (!server[message.guild.id]) {
				server[message.guild.id] = { queue: [] };
				f = server[message.guild.id];
			}

			if (!message.member.voice.connection)
				message.member.voice.channel.join().then(function (connection) { addSong(connection, message, args) });
			
			break;

		case "choose":
			try {
				let track = parseInt(args[0]);
				play(message.guild.voice.connection, message, track);
			} catch (e) {
				console.log("Não é número!");
			}
			break;

		case "skip":
			if (!message.guild.voice.connection) {
				message.channel.send("Não há música tocando!");
				return;
			} else {
				i++;
				play(message.guild.voice.connection, message);
				message.channel.send("Skipped!");
			}
			break;

		case "repeat":
			repeat = args[0];
			if (repeat === "0")
				message.channel.send("Repetidor desativado!");
			else if (repeat === "1")
				message.channel.send("Repetidor ativado! (1)");
			else if (repeat === "all")
				message.channel.send("Repetidor ativado! (Todas)");
			else
				return;
			break;
		
		case 'stats':
			let msg = {
				title: "Estatísticas",
				fields: [
					{ name: "Volume", value: (f === undefined ? "0" : f.dispatcher.volume * 100) + "%", inline: true },
					{ name: "Repetidor", value: repeat, inline: true }
				]
			}
			message.channel.send({ embed: msg });
			break;

		case 'vol':
			if (f) {
				f.dispatcher.setVolume(parseInt(args[0]) / 100);
				vol = f.dispatcher.volume;
			}
			break;
		
		default:
			try {
				if (client.commands.get(command))
					client.commands.get(command).execute(message, args, f);
			}
			catch (e) {
				console.log(e);
			}
			break;
    }
}