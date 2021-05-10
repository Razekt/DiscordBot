module.exports = {
    name: "pause",
    descritption: "Pausa a música atual",
    execute(message, args, f) {
        f.dispatcher.pause();
    }
}