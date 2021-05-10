module.exports = {
	name: "st",
	description: "Para o player e limpa a playlist atual",
	execute(message, args, f) {
		if (!message.guild.voice.connection) {
			message.channel.send("Não há música tocando!");
			return;
		}
		f.queue = [];
		if (f.dispatcher) f.dispatcher.destroy();
		message.guild.voice.connection.disconnect();
	}
}