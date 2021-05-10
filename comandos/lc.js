module.exports = {
	name: "lc",
	description: "Listagem de comandos",
	execute(message, args, f) {
		message.channel.send("Comandos: pl, ls, lc, criador, ping, rm, choose, add, skip, st");
	}
}