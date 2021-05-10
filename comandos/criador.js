module.exports = {
	name: 'criador',
	description: "Sim sou eu",
	execute(message, args, f){
		/*	Comandos de permissão
			let role = message.guild.roles.cache.find(r => r.name === "Bot"); ==> Armazena em uma variável o role em uma pesquisa por nome.
			message.member.roles.cache.has(roleID); ==> Para verificar se a pessoa possuí permissão no Discord.
			message.member.permissions.has(); ==> Verifica se existe uma permissão específica.
			message.member.roles.remove(roleID); ==> Remove permissões no Discord.
			message.member.roles.add(roleID); ==> Adiciona permissões no Discord.
			.catch(console.error) ==> Para pegar o erro do uso do comando; */

		message.channel.send('RRainie foi quem me criou, qualquer problema reclama com ele...');
	}
}