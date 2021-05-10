module.exports = {
    name: "resume",
    descritption: "Retorna a música atual",
    execute(message, args, f) {
        f.dispatcher.resume();
    }
}