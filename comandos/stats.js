module.exports = {
    name: "stats",
    descritption: "Status do bot",
    execute(message, args, f) {
        let msg = {
            title: "Estatísticas",
            fields: [
                { name: "Volume", value: (f === undefined ? "0" : f.dispatcher.volume * 100) + "%", inline: true },
                { name: "Repetidor", value: repeat, inline: true }
            ]
        }
        message.channel.send({ embed: msg });
    }
}