module.exports = {
	name: "rm",
	description: "Remove músicas da playlist",
	execute(message, args, f) {
		if (args[0] === "all") {
			f.queue = [];
			message.channel.send("Todas as músicas foram removidas da playlist.");
		} else {
			let pos = parseInt(args[0], 10);
			f.queue[pos] = "";
		}
	}
}