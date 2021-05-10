module.exports = {
    name: "vol",
    descritption: "Configura o volume do bot",
    execute(message, args, f) {
        f.dispatcher.setVolume(parseInt(args[0]) / 100);
    }
}