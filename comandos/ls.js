module.exports = {
	name: "ls",
	description: "Playlist",
	execute(message, args, f) {
		if (typeof f !== undefined && f.queue.length > 0) {
			let songs = "";
			for (let j = 0; j < f.queue.length; j++) {
				songs = songs + j.toString() + " - " + f.queue[j].titulo + " | " + f.queue[j].url + "\n";
			}
			message.channel.send(songs);
		} else {
			message.channel.send("Playlist vazia!");
		}
	}
}