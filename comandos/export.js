module.exports = {
	name: "export",
	description: "Exportar playlist",
	execute(message, args, f) {
		const { MessageEmbed } = require("discord.js");
		let Msg;
		if (typeof f !== undefined && f.queue.length > 0) {
			let songs = "";
			for (let j = 0; j < f.queue.length; j++) {
				songs = songs + "?add " + f.queue[j].url + "\n\n";
			}
			Msg = new MessageEmbed().setColor("#0099FF").setTitle("Playlist").setDescription(songs);
			message.author.send(Msg);
		} else {
			message.channel.send("Playlist vazia!");
		}
	}
}