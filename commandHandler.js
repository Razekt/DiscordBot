const criador = require("./comandos/criador.js");
const exportar = require("./comandos/export.js");
const lc = require("./comandos/lc.js");
const pause = require("./comandos/pause.js");
const pl = require("./comandos/pl.js");
const resume = require("./comandos/resume.js");
const rm = require("./comandos/rm.js");
const st = require("./comandos/st.js");
const prefix = "!";

const commands = {
    criador,
    exportar,
    lc,
    pause,
    pl,
    resume,
    rm,
    st
};

module.exports = async function (msg) {
    if (!msg.content.startsWith(prefix) || msg.author.bot)
        return;
    
    const args = msg.content.slice(prefix.length).split(/\s+/);
    const command = args.shift().toLowerCase();

    commands[command](msg, args);
}