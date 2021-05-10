module.exports = {
	name: "pl",
	execute(message, args) {
		let dir = "./sons/";
		if (!message.member.voice.channel) {
			message.channel.send("Você precisa estar em um canal, para usar o comando!");
			return;
		}

		switch (args[0]) {
			case "marsh":
				args[0] = "223_Salt_Marsh.mp3";
				break;

			case "sea_temp":
				args[0] = "217_Storm_at_Sea.mp3";
				break;

			case "night_city":
				args[0] = "216_Waterkeep_Night.mp3";
				break;

			case "b_rats":
				args[0] = "209_Rat_Battle.mp3";
				break;

			case "b_1":
				args[0] = "212_Witch_Mountain.mp3";
				break;

			case "b_2":
				args[0] = "171_Cry_Havoc.mp3";
				break;

			case "w_tower":
				args[0] = "174_Wizards_Tower.mp3";
				break;

			case "f_village":
				args[0] = "167_Fishing_Village.mp3";
				break;

			case "tavern":
				args[0] = "177_Tavern_Music.mp3";
				break;

			case "day_city":
				args[0] = "158_Waterkeep.mp3";
				break;

			case "c_village":
				args[0] = "182_Country_Village.mp3";
				break;

			case "festival":
				args[0] = "133_Halfling_Festival.mp3";
				break;

			case "swamp":
				args[0] = "192_Swamp_Planet.mp3";
				break;

			case "jail":
				args[0] = "172_Castle_Jail.mp3";
				break;

			case "m_night":
				args[0] = "224_Mansion_Night.mp3";
				break;

			case "idle":
				args[0] = "a-single-drop-of-magic.mp3";
				break;

			case "b_dead":
				args[0] = "d-e-a-d.mp3";
				break;

			case "b_void":
				args[0] = "symphony-of-the-void.mp3";
				break;

			case "sewer":
				args[0] = "85_Sewers.mp3";
				break;

			case "garden":
				args[0] = "210_Temple_Garden.mp3";
				break;

			case "heilag":
				args[0] = "heilag-vagga.mp3";
				break;

			default:
				args[0] = "";
				break;
		}
		args[0] = dir + args[0];
	}
}