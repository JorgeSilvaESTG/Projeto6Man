	/*
	* Host Configuration
	*/

	var ROOM_NAME = "🔰󠀠󠀠󠀠ㅤㅤㅤ6 Man Strong by 𝙍𝙖𝙪𝙡ㅤㅤㅤ🔰";
	var HOST_NAME = "🕵🏻";

	var MAX_PLAYERS = 20;
	var ROOM_PUBLIC = true;
	var HOST_GEO = {"code": "ES", "lat" : 40, "lon" : -4};

	var ADMIN_PASSWORD = 'pepe';

	var touchDetection = true;
	var chat = true;
	var listaMutados = [];
	var _ballRadius = 9.2;
	var numeros = [];


	const css = "border:2px solid;padding:8px;background:";
	
	// Funções dos comandos.
	
	
	
	/** 
	 * Available commands
	 * 
	 * !admin YOUR_ADMIN_PASSWORD - set you admin on a server
	 * !touch_on - enable touch detection - enabled by default (admin only)
	 * !touch_off - disable touch detection (admin only)
	 * !set_skins - set custom player skins (admin only)
	 * !reset_skins - reset skins to default (admin only)
	 * !p - pause the game (admin only)
	 * !g - unpause the game (admin only)
	 * !rr - restart game (admin only)
	 * !rrs - resart game and switch team sides (admin only)
	 * !s - switch team sides (admin only)
	 * !clear_bans - clear all bans (admin only)
	 * !clear_bans_s - clear all bans silently (without message) (admin only)
	* !chat_on - enable chat
	* !chat_off - disable chat
	* !ignore [player name] - silence player by name
	* !unignore [player name] - remove silenced player from ignore list
	* !ignore_list - display ignore list on chat
	* !ignore_clear - clear ignore list
	* !players - display player list on chat

	STATS
	[0] - Auth
	[1] - Nome
	[2] - Pontos
	[3] - Rank
	[4] - Jogos Jogados
	[5] - Vitórias
	[6] - Golos Marcados

	Ranks
	[0] - 🦯 [0,24]
	[1] - 🦽 [25,49]
	[2] - 🛴 [50,74]
	[3] - 🚲 [75,99]
	[4] - 🛵 [100,149]
	[5] - 🛺 [150,199]
	[6] - 🚜 [200,249]
	[7] - 🚆 [250,299]
	[8] - 🚁 [300,349]
	[9] - ✈️ [350,399]

	Jogadores
	[0] - Nº Baliza
	[1] - Nº Vidas
	[2] - Nome Jogador
	[3] - Id do Jogador

	/**	
	 *  Map
	*/

	var customMap = `{

		"name" : "6 MAN STRONG by Raul Meireles",
	
		"width" : 330,
	
		"height" : 305,
	
		"bg" : { "type" : "none", "cornerRadius" : 0, "kickOffRadius" : 0, "color" : "3d3d3d" },
	
		"vertexes" : [
			/* 0 */ { "x" : 260, "y" : -75 },
			/* 1 */ { "x" : 260, "y" : 75 },
			/* 2 */ { "x" : 260, "y" : 75, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			/* 3 */ { "x" : 260, "y" : 150, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			/* 4 */ { "x" : 260, "y" : -150, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			/* 5 */ { "x" : 260, "y" : -75, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			/* 6 */ { "x" : 195, "y" : -187, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			/* 7 */ { "x" : 260, "y" : -150, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			/* 8 */ { "x" : 195, "y" : 187, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 9 */ { "x" : 260, "y" : 150, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 10 */ { "x" : 65, "y" : 263 },
			/* 11 */ { "x" : 195, "y" : 187 },
			/* 12 */ { "x" : 195, "y" : -187 },
			/* 13 */ { "x" : 65, "y" : -263 },
			/* 14 */ { "x" : -65, "y" : -263 },
			/* 15 */ { "x" : -195, "y" : -187 },
			/* 16 */ { "x" : -65, "y" : 263 },
			/* 17 */ { "x" : -195, "y" : 187 },
			/* 18 */ { "x" : 0, "y" : 300, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 19 */ { "x" : 65, "y" : 263, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 20 */ { "x" : -65, "y" : 263, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 21 */ { "x" : 0, "y" : 300, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 22 */ { "x" : 0, "y" : -300, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			/* 23 */ { "x" : 65, "y" : -263, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			/* 24 */ { "x" : -65, "y" : -263, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			/* 25 */ { "x" : 0, "y" : -300, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			/* 26 */ { "x" : -260, "y" : 150, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 27 */ { "x" : -195, "y" : 187, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 28 */ { "x" : -260, "y" : 75, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 29 */ { "x" : -260, "y" : 150, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 30 */ { "x" : -195, "y" : -187, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 31 */ { "x" : -260, "y" : -150, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 32 */ { "x" : -260, "y" : -150, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 33 */ { "x" : -260, "y" : -75, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			/* 34 */ { "x" : -260, "y" : -75 },
			/* 35 */ { "x" : -260, "y" : 75 },
			/* 36 */ { "x" : -260, "y" : 75, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffbf8b" },
			/* 37 */ { "x" : -260, "y" : -75, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffbf8b" },
			/* 38 */ { "x" : -195, "y" : -187, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ], "color" : "ff9e81" },
			/* 39 */ { "x" : -65, "y" : -263, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ], "color" : "ff9e81" },
			/* 40 */ { "x" : -195, "y" : 187, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ], "color" : "c38bbf" },
			/* 41 */ { "x" : -65, "y" : 263, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ], "color" : "c38bbf" },
			/* 42 */ { "x" : 195, "y" : 187, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "color" : "b1ff9a" },
			/* 43 */ { "x" : 65, "y" : 263, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "color" : "b1ff9a" },
			/* 44 */ { "x" : 65, "y" : -263, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffff9e" },
			/* 45 */ { "x" : 195, "y" : -187, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffff9e" },
			/* 46 */ { "x" : 260, "y" : -75, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ], "color" : "b38bff" },
			/* 47 */ { "x" : 260, "y" : 75, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ], "color" : "b38bff" },
			/* 48 */ { "x" : -50, "y" : -237, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 49 */ { "x" : -180, "y" : -161, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 50 */ { "x" : -230, "y" : -75, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 51 */ { "x" : -230, "y" : 75, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 52 */ { "x" : -180, "y" : 161, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 53 */ { "x" : -50, "y" : 237, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 54 */ { "x" : 50, "y" : 237, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 55 */ { "x" : 180, "y" : 161, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 56 */ { "x" : 230, "y" : 75, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 57 */ { "x" : 230, "y" : -75, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 58 */ { "x" : 180, "y" : -161, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 59 */ { "x" : 50, "y" : -237, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 60 */ { "x" : -270, "y" : -156.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 61 */ { "x" : -270, "y" : -75, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 62 */ { "x" : -270, "y" : 75, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 63 */ { "x" : -270, "y" : 156.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 64 */ { "x" : -270, "y" : 156.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 65 */ { "x" : -200, "y" : 196, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 66 */ { "x" : -270, "y" : -156.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 67 */ { "x" : -200, "y" : -196, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 68 */ { "x" : -70, "y" : -272.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 69 */ { "x" : 0, "y" : -312, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 70 */ { "x" : 0, "y" : -312, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 71 */ { "x" : 70, "y" : -272.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 72 */ { "x" : 200, "y" : -196, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 73 */ { "x" : 270, "y" : -156.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 74 */ { "x" : 270, "y" : -156.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 75 */ { "x" : 270, "y" : -75, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 76 */ { "x" : 270, "y" : 75, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 77 */ { "x" : 270, "y" : 156.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 78 */ { "x" : 200, "y" : 196, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 79 */ { "x" : 270, "y" : 156.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 80 */ { "x" : 0, "y" : 312, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 81 */ { "x" : 70, "y" : 272.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 82 */ { "x" : -70, "y" : 272.66, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 83 */ { "x" : 0, "y" : 312, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			/* 84 */ { "x" : 162, "y" : -290, "color" : "bfbfbf" },
			/* 85 */ { "x" : 162, "y" : -275, "color" : "bfbfbf" },
			/* 86 */ { "x" : 315, "y" : -7, "color" : "bfbfbf" },
			/* 87 */ { "x" : 315, "y" : 8, "color" : "bfbfbf" },
			/* 88 */ { "x" : 322, "y" : -7, "color" : "bfbfbf" },
			/* 89 */ { "x" : 322, "y" : 8, "color" : "bfbfbf" },
			/* 90 */ { "x" : 155, "y" : 275, "color" : "bfbfbf" },
			/* 91 */ { "x" : 155, "y" : 290, "color" : "bfbfbf" },
			/* 92 */ { "x" : 162, "y" : 275, "color" : "bfbfbf" },
			/* 93 */ { "x" : 162, "y" : 290, "color" : "bfbfbf" },
			/* 94 */ { "x" : 169, "y" : 275, "color" : "bfbfbf" },
			/* 95 */ { "x" : 169, "y" : 290, "color" : "bfbfbf" },
			/* 96 */ { "x" : -175, "y" : 275, "color" : "bfbfbf" },
			/* 97 */ { "x" : -175, "y" : 290, "color" : "bfbfbf" },
			/* 98 */ { "x" : -168, "y" : 275, "color" : "bfbfbf" },
			/* 99 */ { "x" : -164, "y" : 290, "color" : "bfbfbf" },
			/* 100 */ { "x" : -160, "y" : 275, "color" : "bfbfbf" },
			/* 101 */ { "x" : -326, "y" : -7, "color" : "bfbfbf" },
			/* 102 */ { "x" : -321, "y" : 8, "color" : "bfbfbf" },
			/* 103 */ { "x" : -315, "y" : -7, "color" : "bfbfbf" },
			/* 104 */ { "x" : -177, "y" : -290, "color" : "bfbfbf" },
			/* 105 */ { "x" : -173, "y" : -275, "color" : "bfbfbf" },
			/* 106 */ { "x" : -169, "y" : -290, "color" : "bfbfbf" },
			/* 107 */ { "x" : -162, "y" : -290, "color" : "bfbfbf" },
			/* 108 */ { "x" : -162, "y" : -275, "color" : "bfbfbf" },
			/* 109 */ { "x" : 192, "y" : 181, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 110 */ { "x" : 63, "y" : 258, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			/* 111 */ { "x" : -21.167284893049867, "y" : -80.23625368126328, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 112 */ { "x" : -60.49628418077804, "y" : 39.70068649363559, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 113 */ { "x" : -51.67390940441457, "y" : 51.67390940441457, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 114 */ { "x" : -1.8905088806493138, "y" : 54.19458791194699, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 115 */ { "x" : 11.866808980432827, "y" : 41.17147819232444, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 116 */ { "x" : 35.28949910545386, "y" : -27.307746400896146, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 117 */ { "x" : -5.041357015064836, "y" : -93.26510477869948, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 118 */ { "x" : 56.71526641947941, "y" : -92.63493515181636, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 119 */ { "x" : 49.78340052376526, "y" : -70.57899821090771, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 120 */ { "x" : 10.024413014504301, "y" : -70.96876019016264, "cMask" : [ ], "cGroup" : [ ], "curve" : -50, "color" : "cdc330" },
			/* 121 */ { "x" : 1.8322078650239426, "y" : -67.81791205574714, "cMask" : [ ], "cGroup" : [ ], "curve" : -50, "color" : "cdc330" },
			/* 122 */ { "x" : -5.680172368652999, "y" : -43.27777514478963, "cMask" : [ ], "cGroup" : [ ], "curve" : -50, "color" : "cdc330" },
			/* 123 */ { "x" : -2.079039069036665, "y" : -38.237076899016635, "cMask" : [ ], "cGroup" : [ ], "curve" : -50, "color" : "cdc330" },
			/* 124 */ { "x" : 29.460726983756352, "y" : -37.28523420856449, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 125 */ { "x" : -17.828393695108673, "y" : -17.642892848941333, "cMask" : [ ], "cGroup" : [ ], "curve" : 50, "color" : "cdc330" },
			/* 126 */ { "x" : -35.32046453406659, "y" : 31.891736270554702, "cMask" : [ ], "cGroup" : [ ], "curve" : -50, "color" : "cdc330" },
			/* 127 */ { "x" : -32.34750606816742, "y" : 36.21603949368077, "cMask" : [ ], "cGroup" : [ ], "curve" : -50, "color" : "cdc330" },
			/* 128 */ { "x" : -20.201517399977675, "y" : 37.214267971641995, "cMask" : [ ], "cGroup" : [ ], "curve" : -50, "color" : "cdc330" },
			/* 129 */ { "x" : -15.066407322515477, "y" : 33.97104055429745, "cMask" : [ ], "cGroup" : [ ], "curve" : -50, "color" : "cdc330" },
			/* 130 */ { "x" : 3.735966156076057, "y" : -18.782288920170767, "cMask" : [ ], "cGroup" : [ ], "curve" : -50, "color" : "cdc330" },
			/* 131 */ { "x" : 0.33892290987111906, "y" : -24.072087827245113, "cMask" : [ ], "cGroup" : [ ], "curve" : -50, "color" : "cdc330" },
			/* 132 */ { "x" : -11.266527855427872, "y" : -24.594474581529475, "cMask" : [ ], "cGroup" : [ ], "curve" : 50, "color" : "cdc330" },
			/* 133 */ { "x" : -32.553273943366165, "y" : -44.90314248881895, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 134 */ { "x" : -25.22254527939957, "y" : -69.13705571851156, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 135 */ { "x" : -4.504482524089647, "y" : -50.30005485233439, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 136 */ { "x" : -1.000996116464366, "y" : -60.810514075210236, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 137 */ { "x" : -31.281128639511437, "y" : -51.801549027030944, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 138 */ { "x" : -27.277144173653973, "y" : -62.06175922079069, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 139 */ { "x" : 231, "y" : 269, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 140 */ { "x" : 231, "y" : 290, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 141 */ { "x" : 231, "y" : 278, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 142 */ { "x" : 239, "y" : 269, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 143 */ { "x" : 240, "y" : 290, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 144 */ { "x" : 251.26460415065557, "y" : 289.16151037663894, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 145 */ { "x" : 250.8969062259834, "y" : 270.78007302073877, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 146 */ { "x" : 266.21329746268293, "y" : 270.6256725587495, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 147 */ { "x" : 266.21329746268293, "y" : 290.1136625663769, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 148 */ { "x" : 274.30265180547167, "y" : 282.39200614826035, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 149 */ { "x" : 281.28891237424375, "y" : 271.36106840809396, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 150 */ { "x" : 281.28891237424375, "y" : 290.1136625663769, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 151 */ { "x" : 289.37826671703243, "y" : 270.62567255874956, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 152 */ { "x" : 297.8353189844934, "y" : 276.1411414288327, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 153 */ { "x" : 287.1720791689992, "y" : 279.0827248262104, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 154 */ { "x" : 290.1136625663769, "y" : 290.1136625663769, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 155 */ { "x" : 302.98308992990434, "y" : 290.4813604910491, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 156 */ { "x" : 307.7631629506431, "y" : 270.6256725587495, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 157 */ { "x" : 315.4848193687596, "y" : 289.74596464170463, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 158 */ { "x" : 305.55697540260985, "y" : 282.02430822358815, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 159 */ { "x" : 311.072444272693, "y" : 282.39200614826035, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 160 */ { "x" : -299.96356588045904, "y" : 270.8143135037433, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 161 */ { "x" : -300.7577933977509, "y" : 295.8324802984407, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 162 */ { "x" : -288.9551841453052, "y" : 275.1502132299272, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 163 */ { "x" : -299.16933836316696, "y" : 283.91906753906096, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 164 */ { "x" : -290.4328356729552, "y" : 295.8324802984407, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 165 */ { "x" : -276.11485773244647, "y" : 269.84249299296476, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 166 */ { "x" : -276.11485773244647, "y" : 295.2577735463082, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 167 */ { "x" : -267.37835504223466, "y" : 281.7559057523445, "cMask" : [ ], "cGroup" : [ ], "curve" : 0, "color" : "cdc330" },
			/* 168 */ { "x" : -258.64185235202285, "y" : 269.84249299296476, "cMask" : [ ], "cGroup" : [ ], "curve" : 0, "color" : "cdc330" },
			/* 169 */ { "x" : -258.24473859337684, "y" : 296.0520010636002, "cMask" : [ ], "cGroup" : [ ], "color" : "cdc330" },
			/* 170 */ { "x" : -306, "y" : -296.4975097088391, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 171 */ { "x" : -306, "y" : -277.4965135923747, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 172 */ { "x" : -293.4995019417678, "y" : -277.49352524298155, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 173 */ { "x" : -284.53314610499604, "y" : -277.2759242606294, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 174 */ { "x" : -270.769449503611, "y" : -296.2948504734523, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 175 */ { "x" : -284.7833951341122, "y" : -296.2948504734523, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 176 */ { "x" : -270.2689514453789, "y" : -278.02667134797775, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 177 */ { "x" : -284.7833951341122, "y" : -296.2948504734523, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 178 */ { "x" : -270.2689514453789, "y" : -278.02667134797775, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 179 */ { "x" : -284.7833951341122, "y" : -296.2948504734523, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 180 */ { "x" : -270.2689514453789, "y" : -278.02667134797775, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 181 */ { "x" : -284.7833951341122, "y" : -296.2948504734523, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 182 */ { "x" : -270.2689514453789, "y" : -278.02667134797775, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 183 */ { "x" : -284.7833951341122, "y" : -296.2948504734523, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			/* 184 */ { "x" : -270.2689514453789, "y" : -278.02667134797775, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] }
	
		],
	
		"segments" : [
			{ "v0" : 0, "v1" : 1, "color" : "FF", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 2, "v1" : 3, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			{ "v0" : 4, "v1" : 5, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			{ "v0" : 6, "v1" : 7, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			{ "v0" : 8, "v1" : 9, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			{ "v0" : 10, "v1" : 11, "color" : "FF00", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 12, "v1" : 13, "color" : "FFFF00", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 14, "v1" : 15, "color" : "FF0000", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 16, "v1" : 17, "color" : "800080", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 18, "v1" : 19, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			{ "v0" : 20, "v1" : 21, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			{ "v0" : 22, "v1" : 23, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			{ "v0" : 24, "v1" : 25, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -10 },
			{ "v0" : 26, "v1" : 27, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			{ "v0" : 28, "v1" : 29, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			{ "v0" : 30, "v1" : 31, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			{ "v0" : 32, "v1" : 33, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 10 },
			{ "v0" : 34, "v1" : 35, "color" : "FF7F00", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 36, "v1" : 37, "curve" : 119.99999999999999, "color" : "ffbf8b", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "curveF" : 0.577350269189626 },
			{ "v0" : 38, "v1" : 39, "curve" : 119.99999999999999, "color" : "ff9e81", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "curveF" : 0.577350269189626 },
			{ "v0" : 41, "v1" : 40, "curve" : 119.99999999999999, "color" : "c38bbf", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "curveF" : 0.577350269189626 },
			{ "v0" : 42, "v1" : 43, "curve" : 119.99999999999999, "color" : "b1ff9a", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "curveF" : 0.577350269189626 },
			{ "v0" : 44, "v1" : 45, "curve" : 119.99999999999999, "color" : "ffff9e", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "curveF" : 0.577350269189626 },
			{ "v0" : 46, "v1" : 47, "curve" : 119.99999999999999, "color" : "b38bff", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "curveF" : 0.577350269189626 },
			{ "v0" : 48, "v1" : 49, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 50, "v1" : 51, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 52, "v1" : 53, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 54, "v1" : 55, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 56, "v1" : 57, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 58, "v1" : 59, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 60, "v1" : 61, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 62, "v1" : 63, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 64, "v1" : 65, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 66, "v1" : 67, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 68, "v1" : 69, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 70, "v1" : 71, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 72, "v1" : 73, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 74, "v1" : 75, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 76, "v1" : 77, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 78, "v1" : 79, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 80, "v1" : 81, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 82, "v1" : 83, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 84, "v1" : 85, "color" : "bfbfbf", "x" : 162 },
			{ "v0" : 86, "v1" : 87, "color" : "bfbfbf" },
			{ "v0" : 88, "v1" : 89, "color" : "bfbfbf", "x" : 322 },
			{ "v0" : 90, "v1" : 91, "color" : "bfbfbf", "x" : 155 },
			{ "v0" : 92, "v1" : 93, "color" : "bfbfbf", "x" : 162 },
			{ "v0" : 94, "v1" : 95, "color" : "bfbfbf", "x" : 169 },
			{ "v0" : 96, "v1" : 97, "color" : "bfbfbf", "x" : -175 },
			{ "v0" : 98, "v1" : 99, "color" : "bfbfbf" },
			{ "v0" : 99, "v1" : 100, "color" : "bfbfbf" },
			{ "v0" : 101, "v1" : 102, "color" : "bfbfbf" },
			{ "v0" : 102, "v1" : 103, "color" : "bfbfbf" },
			{ "v0" : 104, "v1" : 105, "color" : "bfbfbf" },
			{ "v0" : 105, "v1" : 106, "color" : "bfbfbf" },
			{ "v0" : 107, "v1" : 108, "color" : "bfbfbf", "x" : -162 },
			{ "v0" : 44, "v1" : 59, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 58, "v1" : 45, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 57, "v1" : 46, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 56, "v1" : 47, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 55, "v1" : 109, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 54, "v1" : 110, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 53, "v1" : 41, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 52, "v1" : 40, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 36, "v1" : 51, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 37, "v1" : 50, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 38, "v1" : 49, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 39, "v1" : 48, "vis" : false, "cMask" : ["c1" ], "cGroup" : ["redKO","blueKO" ] },
			{ "v0" : 112, "v1" : 113, "curve" : -126.86989764584294, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 113, "v1" : 114, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 114, "v1" : 115, "curve" : -59.94298986414541, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 115, "v1" : 116, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 111, "v1" : 117, "curve" : 57.469626845744756, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 117, "v1" : 118, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 118, "v1" : 119, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 119, "v1" : 120, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 120, "v1" : 121, "curve" : -50, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 122, "v1" : 123, "curve" : -50, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 116, "v1" : 124, "curve" : -70.54484289719674, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 123, "v1" : 124, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 125, "v1" : 126, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 126, "v1" : 127, "curve" : -50, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 127, "v1" : 128, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 128, "v1" : 129, "curve" : -50, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 129, "v1" : 130, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 130, "v1" : 131, "curve" : -50, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 131, "v1" : 132, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 125, "v1" : 132, "curve" : 50, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 112, "v1" : 133, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 134, "v1" : 111, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 121, "v1" : 134, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 133, "v1" : 122, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 135, "v1" : 136, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 135, "v1" : 137, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 137, "v1" : 138, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 138, "v1" : 136, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 139, "v1" : 140, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 141, "v1" : 142, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 141, "v1" : 143, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 144, "v1" : 145, "curve" : 156.90142229203775, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 145, "v1" : 144, "curve" : 156.90142229203775, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 146, "v1" : 147, "curve" : 0, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 146, "v1" : 148, "curve" : 0, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 148, "v1" : 149, "curve" : 0, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 149, "v1" : 150, "curve" : 0, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 151, "v1" : 152, "curve" : 50, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 152, "v1" : 153, "curve" : 50, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 151, "v1" : 154, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 155, "v1" : 156, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 156, "v1" : 157, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 158, "v1" : 159, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 158, "v1" : 159, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 160, "v1" : 161, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 160, "v1" : 162, "curve" : 100.42814185883715, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 162, "v1" : 163, "curve" : 100.42814185883715, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 165, "v1" : 166, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 165, "v1" : 167, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 167, "v1" : 168, "curve" : 0, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 168, "v1" : 169, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 163, "v1" : 164, "curve" : 0, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 170, "v1" : 171,  "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ]},
			{ "v0" : 171, "v1" : 172,  "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ]},
			{ "v0" : 173, "v1" : 174,  "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ]},
			{ "v0" : 175, "v1" : 176, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 177, "v1" : 178, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 179, "v1" : 180, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 181, "v1" : 182, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] },
			{ "v0" : 183, "v1" : 184, "color" : "cdc330", "cMask" : [ ], "cGroup" : [ ] }
	
		],
	
		"planes" : [
			
	
		],
	
		"traits" : {
			
	
		},
	
		"goals" : [
			{ "p0" : [260,-75 ], "p1" : [260,75 ], "team" : "blue" },
			{ "p0" : [65,263 ], "p1" : [195,187 ], "team" : "blue" },
			{ "p0" : [65,-263 ], "p1" : [195,-187 ], "team" : "blue" },
			{ "p0" : [-195,187 ], "p1" : [-65,263 ], "team" : "red" },
			{ "p0" : [-65,-263 ], "p1" : [-195,-187 ], "team" : "red" },
			{ "p0" : [-260,-75 ], "p1" : [-260,75 ], "team" : "red" }
	
		],
	
		"playerPhysics" : {
			"bCoef" : 0,
			"invMass" : 1e+26,
			"kickStrength" : 6,
			"radius" : 15,
			"damping" : 0.96,
			"cGroup" : [ "red", "blue"
			],
			"acceleration" : 0.1,
			"gravity" : [ 0, 0
			],
			"kickingAcceleration" : 0.07,
			"kickingDamping" : 0.96,
			"kickback" : 0
	
		},
	
		"ballPhysics" : {
			"radius" : 9.2,
			"bCoef" : 1,
			"damping" : 0.991,
			"color" : "EDED09",
			"cGroup" : [ "ball", "kick", "score"
			],
			"cMask" : [ "all"
			],
			"invMass" : 1,
			"gravity" : [ 0, 0
			]
	
		},
	
		"spawnDistance" : 85,
	
		"discs" : [
			{ "radius" : 8, "invMass" : 0, "pos" : [260,75 ], "color" : "FF" },
			{ "radius" : 8, "invMass" : 0, "pos" : [260,-75 ], "color" : "FF" },
			{ "radius" : 8, "invMass" : 0, "pos" : [195,187 ], "color" : "00FF00" },
			{ "radius" : 8, "invMass" : 0, "pos" : [65,263 ], "color" : "00FF00" },
			{ "radius" : 8, "invMass" : 0, "pos" : [195,-187 ], "color" : "FFFF00" },
			{ "radius" : 8, "invMass" : 0, "pos" : [65,-263 ], "color" : "FFFF00" },
			{ "radius" : 8, "invMass" : 0, "pos" : [-195,187 ], "color" : "800080" },
			{ "radius" : 8, "invMass" : 0, "pos" : [-65,263 ], "color" : "800080" },
			{ "radius" : 8, "invMass" : 0, "pos" : [-65,-263 ], "color" : "FF0000" },
			{ "radius" : 8, "invMass" : 0, "pos" : [-195,-187 ], "color" : "FF0000" },
			{ "radius" : 8, "invMass" : 0, "pos" : [-260,-75 ], "color" : "FF7F00" },
			{ "radius" : 8, "invMass" : 0, "pos" : [-260,75 ], "color" : "FF7F00" }
	
		],
	
		"joints" : [
			
	
		],
	
		"redSpawnPoints" : [
			
	
		],
	
		"blueSpawnPoints" : [
			
	
		],
	
		"canBeStored" : false,
	
		"cameraWidth" : 0,
	
		"cameraHeight" : 0,
	
		"maxViewWidth" : 0,
	
		"cameraFollow" : "ball",
	
		"kickOffReset" : "partial"
	}`;

	const linkDiscord = "https://discord.gg/rsMmtWYFw5";

	var linguagens = [{
		msgBemVindoInicio: "👋 Bem-Vindo ",
		msgBemVindoFinal: " escreve !ajuda para ver mais informações.",
		qntsFaltam: "São precisos 6 Jogadores para começar o jogo ! Faltam ",
		msgAutomaticaEntrarDiscord: "Entra no nosso Discord : " + linkDiscord + " para estares sempre atualizado com o servidor !",
		msgAutomaticaBeta: "O script ainda está em beta se houver algum erro por favor reporte à staff !",
		msgNaoEPossivelComprarJNC: "Não é possivel comprar esse item visto que o jogo ainda não começou!",
		msgNaoEPossivelComprarOJ: "Não é possivel comprar esse item para outro jogador!",
		msgNaoEPossivelComprarNJ: "Não é possivel comprar esse item visto que ja não estás em jogo!",
		msgPerdeuVida: " Perdeu uma vida, restam-lhe ",
		msgComecar20: "O jogo vai começar dentro de 20 segundos!",
		msgComecou: "O JOGO COMEÇOU !",
		msgComprouVida: "comprou uma vida!",
		msgTerminouPrimeiroSegundo: "como terminaram em 1º e 2º vão jogar de novo!",
		msgE: "e",
		msgApostou: "apostou",
		msgEm: "em",
		msgDinheiroInsuficiente: "Não tens dinheiro suficiente.",
		msgStatsDinheiro: "Dinheiro",
		msgStatsVitorias: "Vitórias",
		msgStatsNome: "Nome",
		msgStatsPontos: "Pontos",
		msgStatsPontosJogo: "Pontos/Jogo",
		msgStatsJogosJogados: "Jogos Jogados",
		msgStatsGolosJogo: "Golos/Jogo",
		msgMostrarLoja: "-- Loja de itens -- \n1 - Tornar um jogador minusculo - 50$ \t\t 2 - Comprar vida - 50$\n3 - Tornar-te maior - 100 $\n!cores - cor de mensagens \t\t !avatares - comprar avatar\n",
		msgAcabouEm: "acabou em",
		msgPerdeuVidasTodas: "Perdeu as vidas todas",
		msgEntraDiscord: "Entra no nosso Discord",
		msgEscreveComandos: "Escreve !comandos para ver os comandos disponiveis",
		msgAcabouTempoKickOff: "Acabou o tempo para o pontapé de saída!",
		msgAvisoAfk: "⛔ Se não te mexeres dentro de 3 segundos irás ser kickado !",
		msgNaoPossivelApostarAgora: "Não é possivel apostar agora!",
		msgNaoPodesApostarEstasJogar: "Não podes apostar se estás a jogar!",
		msgNaoPodesApostarVaisJogar: "Não podes apostar se vais jogar!",
		msgVidas: "VIDAS",
		msgNenhumJogoADecorrer: "Não há nenhum jogo a decorrer !",
		msgClassificacao: "Classificação",
		msgAposta: "Aposta com !bet id montante",
		msgAindaNEntrou: "ainda não entrou na sala.",
		msgBB: "Não podes usar esse comando enquanto jogas!",
		msgServidorEmBeta: "Sala ainda em fase beta!",
		msgTornouO: "tornou o",
		msgMini: "mini",
		msgNinguemAcertouAposta: "Ninguém acertou a aposta",
		msgVencedoresApostas: "Vencedores apostas",
		msgMutadoAdmin: "foi mutado por um Admin!",
		msgDesmutadoAdmin: "foi desmutado por um Admin!",
		msgMutadoSpamar: "foi mutado 5 minutos por spamar!",
		msgDesmutadoSpamar: "foi agora desmutado!",
		msgAvisoMute: "OLHA AI! SE SPAMARES MAIS MENSAGENS VAIS SER BANIDO",
		msgEstasMutado: "Estás mutado !",
		msgNEstasEmJogo: "Já não estás em jogo!",
		msgTornouSeMaior: "tornou-se maior!",
		msgJaTinhaComprado: "Já tinhas comprado esse item!",
		msgOJogador: "O jogador",
		msgNVaiJogar: "não vai jogar!",
		msgComandosJogador: `"!me" para ver as tuas estatisticas \t\t "stats (nome do jogador)" para ver as estatisticas de outros jogadores\n` +
		`"!top" para ver os top 5 pontuadores \t "!lives" para veres as vidas dos jogadores\n`+
		`"!ss" para sair da sala rapidamente`,
		msgVidasSuficientes: "Já tens vidas suficientes!",
		msgAvisoBanirMutado: "Vais ser banido se continuares a mandar mensagens enquanto mutado!",
		msgLogadoSucesso: "Logado com sucesso",
		msgBanido: "foi banido por",
		msgDesbanidoAdmin: "foi desbanido por",
		msgReportEnviado: "Report enviado com sucesso!",
	},
	{
		msgBemVindoInicio: "👋 Welcome ",
		msgBemVindoFinal: " Do !help for further information.",
		qntsFaltam: "It takes 6 players to start the game ! Players left to start ",
		msgAutomaticaEntrarDiscord: "Join our discord : " + linkDiscord + " to keep yourself updated at all time !",
		msgAutomaticaBeta: "The script is still in beta if you find any bugs please report to the staff!",
		msgNaoEPossivelComprarJNC: "You can't buy this item as the game hasn't started yet!",
		msgNaoEPossivelComprarOJ: "You can't buy this item to another player!",
		msgNaoEPossivelComprarNJ: "You can't buy this item because you lost already!",
		msgPerdeuVida: " lost a life, lives left: ",
		msgComecar20: "The game will begin in 20 seconds!",
		msgComecou: "THE MATCH HAS BEGUN!",
		msgComprouVida: "just bought a life!",
		msgTerminouPrimeiroSegundo: "will play again as they just finished 1st and 2nd",
		msgE: 'and',
		msgApostou: "bet",
		msgEm: "on",
		msgDinheiroInsuficiente: "You don't have enough money.",
		msgStatsDinheiro: "Money",
		msgStatsVitorias: "Wins",
		msgStatsNome: "Name",
		msgStatsPontos: "Points",
		msgStatsPontosJogo: "Points/Game",
		msgStatsJogosJogados: "Games Played",
		msgStatsGolosJogo: "Goals/Game",
		msgMostrarLoja: "-- Item Shop -- \n1 - Make a player small - 50$ \t\t 2 - Buy a life - 50$\n3 - Make yourself big - 100 $\n!cores - Message's color \t\t !avatares - buy avatar\n",
		msgAcabouEm: "finished",
		msgPerdeuVidasTodas: "has lost all his lives",
		msgEntraDiscord: "Join our Discord",
		msgEscreveComandos: "Do !comandos to see the commands available",
		msgAcabouTempoKickOff: "Time's up for kick off!",
		msgAvisoAfk: "⛔ If you don't move within 3 seconds you'll get kicked !",
		msgNaoPossivelApostarAgora: "You can't bet right now!",
		msgNaoPodesApostarEstasJogar: "You can't bet if you're playing!",
		msgNaoPodesApostarVaisJogar: "You can't bet if you're gonna play!",
		msgVidas: "LIVES",
		msgNenhumJogoADecorrer: "There's no game being played !",
		msgClassificacao: "Classification",
		msgAposta: "bet with !bet id ammount",
		msgAindaNEntrou: "has never been in the room yet.",
		msgBB: "Não podes usar esse comando enquanto jogas!",
		msgServidorEmBeta: "Room still in beta!",
		msgTornouO: "made",
		msgMini: "small",
		msgNinguemAcertouAposta: "Nobody",
		msgVencedoresApostas: "Bet Winners",
		msgMutadoAdmin: "was muted by an Admin!",
		msgDesmutadoAdmin: "was unmuted by an Admin!",
		msgMutadoSpamar: "was muted 5 minutes for spamming!",
		msgDesmutadoSpamar: "was unmuted!",
		msgAvisoMute: "IF YOU SPAM MORE MESSAGES YOU'LL GET MUTED!",
		msgEstasMutado: "You're muted !",
		msgNEstasEmJogo: "You're out of the game already!",
		msgTornouSeMaior: "made himself bigger!",
		msgJaTinhaComprado: "You bought that already!",
		msgOJogador: "The player",
		msgNVaiJogar: "is not gonna play!",
		msgComandosJogador: `"!me" to see your stats \t\t\t "stats (player's name)" to see other player's stats\n` +
		`"!top" to see the top 5 pointers \t "!vidas" to display player's lives\n`+
		`"!ss" to leave the room quickly`,
		msgVidasSuficientes: "You already have enough lives!",
		msgAvisoBanirMutado: "You'll get banned if you spam more messages while muted!",
		msgLogadoSucesso: "Logged in successfully",
		msgBanido: "was banned by",
		msgDesbanidoAdmin: "was unbanned by",
		msgReportEnviado: "Report sent!",
	},
	{
		msgBemVindoInicio: "👋 Bienvenido👋 ",
		msgBemVindoFinal: " Escribe !ajuda para ver más información.",
		qntsFaltam: "Se necesitan 6 Jugadores para comenzar la partida ! Faltan ",
		msgAutomaticaEntrarDiscord: "Entra a nuestro Discord : " + linkDiscord + " para estar siempre informado del servidor !",
		msgAutomaticaBeta: "El script está en BETA, si hay algun fallo por favor repórtalo al staff !",
		msgNaoEPossivelComprarJNC: "No es posible comprar este item porque la partida está en curso!",
		msgNaoEPossivelComprarOJ: "No es posible comprar este item para otro jugador!",
		msgNaoEPossivelComprarNJ: "No es posible comprar este item debido a que no estás en la partida!",
		msgPerdeuVida: " Has perdido una vida, te quedan ",
		msgComecar20: "La partida comenzará en 20 segundos!",
		msgComecou: "LA PARTIDA HA EMPEZADO !",
		msgComprouVida: "Ha comprado una vida!",
		msgTerminouPrimeiroSegundo: "Como han acabado 1º y 2º van a jugar otra vez!",
		msgE: "e",
		msgApostou: "apostó",
		msgEm: "em",
		msgDinheiroInsuficiente: "No tienes dinero suficiente.",
		msgStatsDinheiro: "Dinero",
		msgStatsVitorias: "Victorias",
		msgStatsNome: "Nombre",
		msgStatsPontos: "Puntos",
		msgStatsPontosJogo: "Puntos/Partida",
		msgStatsJogosJogados: "Partidas Jugadas",
		msgStatsGolosJogo: "Goles/Partida",
		msgMostrarLoja: "-- TIENDA -- \n1 - Minimizar a un jugador - 50$ \t\t 2 - Comprar vida - 50$\n3 - Volverte más grande - 100 $\n!cores - color de mensajes \t\t !avatares - comprar avatar\n",
		msgAcabouEm: "acabó",
		msgPerdeuVidasTodas: "Se quedó sin vidas",
		msgEntraDiscord: "Entra a nuestro Discord",
		msgEscreveComandos: "Escribe !comandos para ver los comandos disponibles",
		msgAcabouTempoKickOff: "Se acabó el tiempo de el saque inicial !",
		msgAvisoAfk: "⛔ Si no te mueves en 3 segundos, serás kickeado !",
		msgNaoPossivelApostarAgora: "No es posible apostar ahora!",
		msgNaoPodesApostarEstasJogar: "No puedes apostar si vas a jugar!",
		msgNaoPodesApostarVaisJogar: "No puedes apostar si vas a jugar!",
		msgVidas: "VIDAS",
		msgNenhumJogoADecorrer: "No hay una partida en juego !",
		msgClassificacao: "RANKING",
		msgAposta: "Apuesta con !bet id cantidad",
		msgAindaNEntrou: "Aún no ha entrado en la sala.",
		msgBB: "No podes usar este comando mientras juegas!",
		msgServidorEmBeta: "La sala está en fase BETA!",
		msgTornouO: "Volvió a",
		msgMini: "mini",
		msgNinguemAcertouAposta: "Nadie acertó la apuesta",
		msgVencedoresApostas: "Vencedores de la apuesta",
		msgMutadoAdmin: "Ha sido muteado por un Admin!",
		msgDesmutadoAdmin: "Ha sido desmuteado por un Admin!",
		msgMutadoSpamar: "Ha sido muteado 5 minutos por hacer spam!",
		msgDesmutadoSpamar: "Ha sido desmuteado!",
		msgAvisoMute: "MIRA, COMO SIGAS HACIENDO SPAM VAS A SER BANEAEADO",
		msgEstasMutado: "Estás muteado !",
		msgNEstasEmJogo: "Ya no estás en la partida!",
		msgTornouSeMaior: "Se volvió más grande!",
		msgJaTinhaComprado: "Ya habías comprado este item!",
		msgOJogador: "El jugador",
		msgNVaiJogar: "No va a jugar!",
		msgComandosJogador: `"!me" para ver tus estadísticas \t\t "stats (nombre del jogador)" para ver las estadísticas de otros jugadores\n` +
		`"!top" para ver los top 5 puntuadores \t "!vidas" para ver las vidas de los demás jogadores\n`+
		`"!ss" para salir de la sala rápidamente`,
		msgVidasSuficientes: "Ya tienes vidas suficientes!",
		msgAvisoBanirMutado: "Vas a ser baneado si sigues mandando mensajes estando muteado!",
		msgLogadoSucesso: "Accedido a tu usuario correctamente",
		msgBanido: "ha sido baneado por",
		msgDesbanidoAdmin: "ha sido desbaneado por",
		msgReportEnviado: "Report enviado con éxito",
	}];

	const URLs = {
		chat: "https://discord.com/api/webhooks/1106210297720614912/dYl2l_DIeMo4P_Xp83yvMUeuoqGuu-9tlsKXHJGFh5FJy2Q4KIo9qAecMyImSv0Eytqw",
		link: "https://discord.com/api/webhooks/1131299432550375574/WC_txLaSq6YsYsWhLDJYXGowf5QOBOL0epqGg9kJytoWn_YKJPGpFZza2FvdjNRmRqGf",
		reports: "https://discord.com/api/webhooks/1127298910545784853/3eM4z3YltGDh_9Y5BuIx16lgLRnY456PZYSfRgWLkqHLigi9m1wpz6cE7KZ-v5v4r_jG"
	};

	var msgAutomaticas;

	msgAutomaticas = setInterval(function() {
		var players = room.getPlayerList();
		for(let i = 1; i < players.length;i++){
			if(stats.get(players[i].name) != null){
				room.sendAnnouncement(linguagens[stats.get(players[i].name).linguagem].msgAutomaticaEntrarDiscord, players[i].id, 0x00FFFF, "normal");
			}
		}
	}, minParaMs(5));

	msgAutomaticas = setInterval(function() {
		var players = room.getPlayerList();
		for(let i = 1; i < players.length;i++){
			if(stats.get(players[i].name) != null){
				room.sendAnnouncement(linguagens[stats.get(players[i].name).linguagem].msgAutomaticaBeta, players[i].id, 0x00FFFF, "normal");
			}
		}
	}, minParaMs(7));

	msgAutomaticas = setInterval(function() {
		var players = room.getPlayerList();
		for(let i = 1; i < players.length;i++){
			if(stats.get(players[i].name) != null){
				room.sendAnnouncement(`TOP ${linguagens[stats.get(players[i].name).linguagem].msgStatsVitorias} 🥇 ${top3W[0][1]} - ${top3W[0][0]} 🥇 🥈 ${top3W[1][1]} - ${top3W[1][0]} 🥈 🥉 ${top3W[2][1]} - ${top3W[2][0]} 🥉`, players[i].id, 0xFFF000, "bold");
			}
		}
	}, minParaMs(25));

	const array_mensagemAjuda = [
		'!ajuda',
		'!help',
		'!ayuda'
	];

	const array_vidasDisplay = [
		'!vidas',
		'!v',
		'!lives',
		'!l'
	];

	const array_jJogadosReward = [5,10,20,30,60,90,110];
	const array_vitoriasReward = [1,5,10,15,20,30,40,60,100,150,200];


	var listaBalizas = [
		[130, -225],
		[260, 0],
		[130, 225],
		[-130, 225],
		[-260, 0],
		[-130, -225],
	];

	var classificados = [-1,-1,-1,-1,-1,-1];
	var atividadeJogadores = [0,0,0,0,0,0];
	let jogoPausado = false;

	var posicoes = {
		bal1: {x: 130, y: -225},
		bal2: {x: 255, y: 0},
		bal3: {x: 130, y: 225},
		bal4: {x: -130, y: 220},
		bal5: {x: -260, y: 0},
		bal6: {x: -130, y: -225},
	};

	var posicoesSofrida = {
		bal1: {x: 50, y: -50},
		bal2: {x: 50, y: 0},
		bal3: {x: 50, y: 50},
		bal4: {x: -50, y: 50},
		bal5: {x: -50, y: 0},
		bal6: {x: -50, y: -50},
	};

	var Jogadores = [
		[0, 3, "", 0],
		[0, 3, "", 0],
		[0, 3, "", 0],
		[0, 3, "", 0],
		[0, 3, "", 0],
		[0, 3, "", 0],
	];

	var epocaAposta = false;
	var epocaCompraJogo = false;
	var bets = [];
	var qJogaBets = [];
	var sacarDiscGroup = true;
	var enviado = false;

	var listaSpam = {};
	var minimoTamanhoMsg = 3;
	var limite = 5;
	var limiteSpamBan = 3;
	var intervaloSpam = 3000; 
	var removerMute = 300000; 

	var room = HBInit({ 
		roomName: ROOM_NAME, 	
		playerName: HOST_NAME, 
		maxPlayers: MAX_PLAYERS, 
		public: ROOM_PUBLIC,
		// password: 'juventude',
		geo : HOST_GEO
	});

	room.setCustomStadium(customMap);
	room.setScoreLimit(0);
	room.setTimeLimit(0);
	room.setTeamsLock(true);

	const minimoPlayers = 7;
	const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
	var extendedP = [];
	var players;
	var teamR;
	var teamB;
	var teamS;
	var ultimoSofrido;
	var classificado = 5;
	var comecar = 0;
	var stats = new Map();
	var listaBanidos = new Map();
	var limiteAFK = 12;
	var verificarAFK = false;
	var top5 = [
		["##", -1],
		["##", -1],
		["##", -1],
		["##", -1],
		["##", -1],
	];
	var top3W= [
		["##", -1],
		["##", -1],
		["##", -1],
	]
	
	var discGroupdefault;
	

	var playersThatTouchedTheBall = new Set();
	
	
	
	var lastTouch = [];
	
	
	
	// Funções Auxiliares //
	
	function pointDistance(p1, p2) {
		var d1 = p1.x - p2.x;
		var d2 = p1.y - p2.y;
		return Math.sqrt(d1 * d1 + d2 * d2);
	}

	function calculaDistancia(x, y, p2) {
		var d1 = x - p2.x;
		var d2 = y - p2.y;
		return Math.sqrt(Math.pow(d1,2) + Math.pow(d2,2));
	}
	// Funções de procura
	
	function encontrarIndexJogadorPeloNome(nomeJogador){ // devolve o index do array Jogadores pelo nome do player
		for(let i = 0; i < Jogadores.length;i++){
			if(Jogadores[i][2] == nomeJogador){
				return i;
			}
		}
		return null;
	}

	function sacarIdPeloNome(nomeJogador){ // devolve o id do player a partir do nome do mesmo
		var players = room.getPlayerList();
		for(let i =0;i < players.length;i++){
			if(players[i].name == nomeJogador){
				return players[i].id;
			}
		}
		return -1;
	}
	
	function encontrarPlayerId(id){ // devolve o objeto player a partir do id do mesmo
		return room.getPlayer(id);
	}
	
	function encontrarJogadorID(id){ // devolve o index do array Jogadores pelo id do player
		var idJogador = -1;
		for(var i =0;i < Jogadores.length;i++){
			if(id == Jogadores[i][3]){
				idJogador = i;
				i = Jogadores.length;
			}
		}
		return idJogador;
	}
	
	function indexAposta(nomeApostador){ // devolve o index do array bets a partir do nome do apostador
		for(let i=0;i < bets.length;i++){
			if(nomeApostador == bets[i].apostador.name){
				return i;
			}
		}
		return -1;
	}
	
	// Funções room //
	
	room.onRoomLink = (link) => {
		if (localStorage.getItem("stats") == null) {
			enviarMensagemDiscord(URLs.chat, {
				content: `⚠️ ERRO ORLGS-${new Error().lineNumber} ⚠️`
			});
			return;
		}
		else {
			stats = new Map(JSON.parse(localStorage.stats));
		}
		if (localStorage.getItem("listaBanidos") == null) {
			enviarMensagemDiscord(URLs.chat, {
				content: `⚠️ ERRO ORLGS-${new Error().lineNumber} ⚠️`
			});
			return;
		}
		else {
			listaBanidos = new Map(JSON.parse(localStorage.listaBanidos));
		}
		if(!enviado){
			enviarMensagemDiscord(URLs.chat, {
				content: "```diff\n! Servidor ON - " + link + " !```"
			});
			enviarMensagemDiscord(URLs.link, {
				content: `.criarlinksala ${link}`
			});
			enviado = true
		}
		atualizarTop5();
		atualizarTop3W()
	}

	room.onGamePause = function(quemPausou){
		jogoPausado = true
	}

	room.onGameUnPause = function(quemPausou){
		jogoPausado = false
	}

	room.onGameTick = () => {
		var players = room.getPlayerList();
		var ballPosition = room.getBallPosition();
		var ballRadius = _ballRadius;
		var playerRadius = 15;
		var triggerDistance = ballRadius + playerRadius + 0.01;
		
		room.onPlayerBallKick = function(player) {
			lastTouch = player;
		}
		
		for (var i = 0; i < players.length; i++) { 
			var player = players[i];
			if ( player.position == null ) continue; 

			var distanceToBall = pointDistance(player.position, ballPosition);
			var hadTouchedTheBall = playersThatTouchedTheBall.has(player.id);
			
			
			if ( !hadTouchedTheBall ) { 
				if ( distanceToBall < triggerDistance ) {
					playersThatTouchedTheBall.add(player.id);
					lastTouch = player;
				}
			}else{
				
				if ( distanceToBall > triggerDistance + 4 ) {
					playersThatTouchedTheBall.delete(player.id);
				}
			}
		}
		gerirInatividade()
		if((room.getScores().red != 0 || room.getScores().blue != 0)){
			epocaAposta = false;
		}
		if(qJogaBets.length < 6){
			epocaAposta = false;
		}
		if(room.getScores() != null){
			epocaCompraJogo = true;
		}
	};
	
	room.onGameStop = () => {
		comecar = 0;
		var data = new Date();
		atualizarPontos();
		atualizarRanks();
		atualizarTop5();
		atualizarTop3W()
		var players = room.getPlayerList();
		if(players.length > 6 && comecar == 0){
			setTimeout(() => {
				for(let i = 1; i < players.length;i++){
					if(stats.get(players[i].name) != null){
						room.sendAnnouncement(linguagens[stats.get(players[i].name).linguagem].msgComecar20, players[i].id, 0x90EE90, "italic", 1);
					}
				}
				reiniciarVariaveis(true);
			}, 1000);
			setTimeout(() =>{
				mostrarJogadoresParaApostar();
			}, 5000)
			setTimeout(() => {
				if(comecar == 0){
					if(compararDatasSeg(new Date(), data) >= 19 && compararDatasSeg(new Date(), data) <= 23){
						comecarJogo();
					}
					console.log(compararDatasSeg(new Date(), data));
				}
			}, 21000);
		}
	}

	room.onGameStart = function(byplayer){
		playersThatTouchedTheBall.clear();
		verificarAFK = true;
		if(sacarDiscGroup){
			setTimeout(() =>{
				for(let i = 0; i < Jogadores.length;i++){
					if(Jogadores[i][1] != 0){
						discGroupdefault = 	room.getPlayerDiscProperties(Jogadores[0][3]).cGroup;	 
						i = Jogadores.length;
					}
				}
			}, 1000)
		}
		sacarDiscGroup = false;
	}

	room.onPlayerActivity= function(player){
		var indexJogador = encontrarIndexJogadorPeloNome(player.name);
		if(indexJogador != null){
			setActivity(indexJogador, 0);
		}
	}

	room.onTeamGoal = (player) => {
		var players = room.getPlayerList();
		var posicaobola = room.getBallPosition();
		var numBaliza = procurarBalizaCoords(posicaobola);
		var numJogador = procurarJogadorBaliza(numBaliza);
		var ultimoToqueID = lastTouch['id'];
		var ultimoToque = encontrarJogadorID(ultimoToqueID);
		var numJogadorComVidas = jogadoresComVidas();
		if(numJogador != -1){
			Jogadores[numJogador][1] -= 1;
			if(numJogador != ultimoToque){
				adicionarGoloMarcado(ultimoToque);
			}
			if(Jogadores[numJogador][1] != 0){
				for(let i = 1; i < players.length;i++){
					if(stats.get(players[i].name) != null){
						room.sendAnnouncement(Jogadores[numJogador][2] + linguagens[stats.get(players[i].name).linguagem].msgPerdeuVida + Jogadores[numJogador][1], players[i].id, 0xFF0000, "italic");
					}
				}
				room.setPlayerDiscProperties(Jogadores[numJogador][3], {radius: 10} );
				room.setPlayerAvatar(Jogadores[numJogador][3], Jogadores[numJogador][1].toString());
				ultimoSofrido = Jogadores[numJogador][3];
			}
			else{
				room.setPlayerTeam(Jogadores[numJogador][3], 0);
				for(let i = 1; i < players.length;i++){
					if(stats.get(players[i].name) != null){
						room.sendAnnouncement(`${Jogadores[numJogador][2]} ${linguagens[stats.get(players[i].name).linguagem].msgPerdeuVidasTodas}`, players[i].id, 0xFF0000, "normal", 1);
					}
				}
				ultimoSofrido = -1;
			}
		}
		else{
			Jogadores[ultimoToque][1] -= 1;
			if(Jogadores[ultimoToque][1] != 0){
				for(let i = 1; i < players.length;i++){
					if(stats.get(players[i].name) != null){
						room.sendAnnouncement(Jogadores[ultimoToque][2] + linguagens[stats.get(players[i].name).linguagem].msgPerdeuVida + Jogadores[ultimoToque][1], players[i].id, 0xFF0000, "italic");
					}
				}
				room.setPlayerDiscProperties(Jogadores[ultimoToque][3], {radius: 10} );
				room.setPlayerAvatar(Jogadores[ultimoToque][3], Jogadores[ultimoToque][1].toString());
				ultimoSofrido = Jogadores[ultimoToque][3];
			}
			else{
				room.setPlayerTeam(Jogadores[ultimoToque][3], 0);
				for(let i = 1; i < players.length;i++){
					if(stats.get(players[i].name) != null){
						room.sendAnnouncement(`${Jogadores[ultimoToque][2]} ${linguagens[stats.get(players[i].name).linguagem].msgPerdeuVidasTodas}`, players[i].id, 0xFF0000, "normal", 1);
					}
				}
				ultimoSofrido = -1;
			}
		}
		numJogadorComVidas = jogadoresComVidas()
		if(numJogadorComVidas < 2){
			acabarJogo();
		}
	}

	room.onPlayerKicked = (jogadorkickado, razao, ban, kickador) => {
		var tKick = "Kickado";
		if(ban) tKick = "**Banido**"; 
		enviarMensagemDiscord(URLs.chat, {
			content: "```diff\n- " + jogadorkickado.name + " foi " + tKick + " por: " + razao + " pelo " + kickador.name + "```"
		});
	}

	room.onPlayerTeamChange = (changedPlayer) => {
		var players = room.getPlayerList();
		if(room.getScores() !== null && comecar == 1){
			classificados[classificado] = changedPlayer.name;
			for(let i = 1; i < players.length;i++){
				if(stats.get(players[i].name) != null){
					room.sendAnnouncement(`${changedPlayer.name} ${linguagens[stats.get(players[i].name).linguagem].msgAcabouEm} ${classificado+1}º`, players[i].id, 0xFFFFFF, "bold", 1);
				}
			}
			vidasJogadores(null);
			classificado -= 1;
		}
	}

	room.onPlayerJoin = function(player) {
		var players = room.getPlayerList();
		verificacaoEntrada(player);
		definir_stats(player);
		colocarListaSpam(player);
		console.log(`${player.name} entrou na sala`);
		if(stats.get(player.name) != null){
			room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgBemVindoInicio + player.name + linguagens[stats.get(player.name).linguagem].msgBemVindoFinal, player.id);
		}
		else{
			room.sendAnnouncement("👋 Bem-Vindo " + player.name + " escreve !ajuda para ver mais informações.", player.id);
		}
		if(players.length == 7){
			if(room.getScores() == null && comecar == 0){
				setTimeout(() => {
					comecarJogo();
					epocaAposta = false;
				}, 1000);
			}
		}
		else{
			if(room.getScores() == null && comecar == 0 && players.length < 7){
				var faltam = minimoPlayers - players.length;
				for(let i = 1; i < players.length;i++){
					if(stats.get(players[i].name) != null){
						room.sendAnnouncement(linguagens[stats.get(players[i].name).linguagem].qntsFaltam + faltam, players[i].id, 0xFFFFFF, "bold", 2);
					}
				}
            }
        }
		enviarMensagemDiscord(URLs.chat, {
			content: `> ***${player.name}** entrou no servidor!* ||{auth: ${player.auth}, conn: ${player.conn}||`
		});

	}

	room.onPlayerChat = function(player, message) {
		var _admin_valid = message.match(/!(admin|adm|amdin|admi|admim|adnim|adin)/);
		var players = room.getPlayerList();

		enviarMensagemDiscord(URLs.chat, {
			content: "```css\n[" + player.name + "]: " + message + "```"
		});

		if(message.toLowerCase().substr(0, 1) != "!" && !player.admin){
			listaSpam[player.name].messageDates.push(new Date());
			if(listaSpam[player.name].messageDates.length > limite){
				listaSpam[player.name].messageDates.shift();
			}
			if(minimoTamanhoMsg < listaSpam[player.name].messageDates.length && listaSpam[player.name].messageDates[4] - listaSpam[player.name].messageDates[1] < intervaloSpam){
				room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgAvisoMute ,player.id,0xFF0000,"bold",2);
			}
			if(minimoTamanhoMsg < listaSpam[player.name].messageDates.length && listaSpam[player.name].messageDates.length == limite && listaSpam[player.name].messageDates[listaSpam[player.name].messageDates.length-1] - listaSpam[player.name].messageDates[0] < intervaloSpam){
				if(listaSpam[player.name].muted == false){
					var name = player.name;
					for(let i = 1; i < players.length;i++){
						if(stats.get(players[i].name) != null){
							room.sendAnnouncement(`${player.name} ${linguagens[stats.get(players[i].name).linguagem].msgMutadoSpamar}`, players[i].id,0x00FF00,"bold",1);
						}
					}
					listaSpam[player.name].muted = true;
					
					setTimeout(function(){
						if(listaSpam[name].muted == true){
							listaSpam[player.name].messageDates = [];
							listaSpam[name].muted = false;
							for(let i = 1; i < players.length;i++){
								if(stats.get(players[i].name) != null){
									room.sendAnnouncement(`${player.name} ${linguagens[stats.get(players[i].name).linguagem].msgDesmutadoSpamar}!`, players[i].id,0x00FF00,"bold",1);
								}
							}
						}
					},removerMute);
				}
			else{
				room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgAvisoBanirMutado,player.id,0xFF8000,"bold",2);
		
				if(listaSpam[player.name].spamInMute < limiteSpamBan){
				listaSpam[player.name].spamInMute++;
				}
				else{
					room.kickPlayer(player.id,"⛔ Banido por Spam ⛔",true);
				}
		
				return false;
			}
			}
			if(listaSpam[player.name].muted == true){
				room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgEstasMutado,player.id,0xFFFF00,"bold",2);
			return false;
			}
		}


		if (_admin_valid !== null) {
			if (message == '!admin '+ ADMIN_PASSWORD) {
				room.setPlayerAdmin(player.id, true);
			}

			return false;
		}

		if (message.toLowerCase().substr(0, 7) == "!stats ") { 
			const jogadors = message.substr(7);
			if (stats.get(jogadors)) {
				var golos = (stats.get(jogadors).golosMarcados) / (stats.get(jogadors).jogosJogados);
				var linguagem = linguagens[stats.get(player.name).linguagem];
				room.sendAnnouncement(
					`🔸${linguagem.msgStatsNome}: ${jogadors} `+
					`🔸${linguagem.msgStatsVitorias}: ${stats.get(jogadors).vitorias} `+
					`🔸${linguagem.msgStatsPontos}: ${stats.get(jogadors).pontos} `+
					`🔸Rank: ${stats.get(jogadors).rank} `+
					`🔸${linguagem.msgStatsPontosJogo}: ${parseFloat((stats.get(jogadors).pontos / stats.get(jogadors).jogosJogados).toFixed(2))} `+
					`🔸Winrate: ${parseFloat(((stats.get(jogadors).vitorias / stats.get(jogadors).jogosJogados) * 100).toFixed(2))}% `+
					`🔸${linguagem.msgStatsJogosJogados}: ${stats.get(jogadors).jogosJogados} `+
					`🔸${linguagem.msgStatsGolosJogo}: ${parseFloat(golos.toFixed(2))}`+
					`🔸${linguagem.msgStatsDinheiro}: ${stats.get(jogadors).dinheiro}€`, player.id);
			}
			else {
				room.sendAnnouncement(`${jogadors} ${linguagens[stats.get(player.name).linguagem].msgAindaNEntrou}`, player.id);
			}
			return false;
		}

		if (message.toLowerCase() == "!me") {
			var jogadorS = player.name;
			if (stats.get(jogadorS)) {
				var golos = (stats.get(jogadorS).golosMarcados) / (stats.get(jogadorS).jogosJogados);
				var linguagem = linguagens[stats.get(player.name).linguagem];
				room.sendAnnouncement(
					`🔸${linguagem.msgStatsNome}: ${jogadorS} `+
					`🔸${linguagem.msgStatsVitorias}: ${stats.get(jogadorS).vitorias} `+
					`🔸${linguagem.msgStatsPontos}: ${stats.get(jogadorS).pontos} `+
					`🔸Rank: ${stats.get(jogadorS).rank} `+
					`🔸${linguagem.msgStatsPontosJogo}: ${parseFloat((stats.get(jogadorS).pontos / stats.get(jogadorS).jogosJogados).toFixed(2))} `+
					`🔸Winrate: ${parseFloat(((stats.get(jogadorS).vitorias / stats.get(jogadorS).jogosJogados) * 100).toFixed(2))}% `+
					`🔸${linguagem.msgStatsJogosJogados}: ${stats.get(jogadorS).jogosJogados} `+
					`🔸${linguagem.msgStatsGolosJogo}: ${parseFloat(golos.toFixed(2))}`+
					`🔸${linguagem.msgStatsDinheiro}: ${stats.get(jogadorS).dinheiro}€`, player.id);
			}
			return false;
		}

		if (message.toLowerCase() == "!top") {
			room.sendAnnouncement("🏆 TOP 5 🏆", player.id, 0xFFFFFF, "bold", 1);
			room.sendAnnouncement(`🥇 1º ${top5[0][0]} - ${top5[0][1]} pontos 🥇\t\t\t\t4º ${top5[3][0]} - ${top5[3][1]} pontos\n` +
				`🥈 2º ${top5[1][0]} - ${top5[1][1]} pontos 🥈\t\t\t\t5º ${top5[4][0]} - ${top5[4][1]} pontos\n`+
				`🥉 3º ${top5[2][0]} - ${top5[2][1]} pontos 🥉`, player.id, 0xFFFFFF, "normal", 1);
			return false;
		}

		if (message.toLowerCase() == "!comandos") {
			if(player.admin){
				room.sendAnnouncement(`------------------- Comandos Jogador -------------------\n`+
					`"!me" para ver as tuas estatisticas \t\t "stats (nome do jogador)" para ver as estatisticas de outros jogadores\n` +
					`"!top" para ver os top 5 pontuadores \t "!vidas" para veres as vidas dos jogadores\n`+
					`"!ss" para sair da sala rapidamente`, player.id, 0xFFFFFF, "normal", 1);
				room.sendAnnouncement(`-------------------- Comandos Admin --------------------\n`+
					`"!chat" para ativares/desativares o chat para os players\n"!mutar/desmutar (nome do Jogador)" para mutar/desmutar um jogador\n` +
					`"!mutados" para ver a lista de mutados \t\t "!limparMutados" para limpar a lista de mutados\n`+
					`"!rr" para reiniciar o jogo!           \t\t         "!limparBans" para limpar a lista de banidos`, player.id, 0xFFFFFF, "normal", 1);
			}
			else{
				room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgComandosJogador, player.id, 0xFFFFFF, "normal", 1);
			}
			return false;
		}

		if (message.toLowerCase() == "!ranks") {
			room.sendAnnouncement(`[1] - 🦯 [0,24]\t\t[6] - 🛺 [150,199]\n`+
			`[2] - 🦽 [25,49]\t\t[7] - 🚜 [200,249]\n`+
			`[3] - 🛴 [50,74]\t\t[8] - 🚆 [250,299]\n`+
			`[4] - 🚲 [75,99]\t\t[9] - 🚁 [300,349]\n`+
			`[5] - 🛵 [100,149]\t\t[10] - ✈️ [350,399]`, player.id, 0xFFFFFF, "normal", 1);
			return false;
		}


		if (array_vidasDisplay.includes(message.toLowerCase())) {
			vidasJogadores(player);
			return false;
		}

		if (message.toLowerCase() == "!pt") {
			stats.get(player.name).linguagem = 0;
			room.sendAnnouncement("Alteraste a linguagem para portugues!", player.id, 0x90EE90, "bold", 2);
			return false;
		}

		if (message.toLowerCase() == "!en") {
			stats.get(player.name).linguagem = 1;
			room.sendAnnouncement("You just changed the language to english!", player.id, 0x90EE90, "bold", 2);
			return false;
		}

		if (message.toLowerCase() == "!es") {
			stats.get(player.name).linguagem = 2;
			room.sendAnnouncement("Cambió el idioma a español!", player.id, 0x90EE90, "bold", 2);
			return false;
		}
		
		if (message.toLowerCase() == "!ss" || message.toLowerCase() == "!bb") {
			if(room.getScores() != null){
				var idJogador = encontrarJogadorID(player.id);
				if(idJogador == -1){
					room.kickPlayer(player.id, `${player.name} deu rage quit`);	
				}
				else{
					if(Jogadores[idJogador][1] != 0){
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgBB, player.id, 0xFF0000, "normal", 2);
					}
					else{
						room.kickPlayer(player.id, `${player.name} deu rage quit`);	
					}
				}
			}
			else{
				room.kickPlayer(player.id, `${player.name} deu rage quit`);	
			}
			return false;
		}

		if (message == '!chat' && player.admin && chat === false) {
			chat = true;
			room.sendAnnouncement('Chat Habilitado!', null, 0x00FF00, "bold", 2);
			return false;
		}	

		if (message.toLowerCase() == '!desbugarko' && player.admin ) {
			toggleGrupoJogadores(false);
			return false;
		}	

		if (message == '!chat' && player.admin && chat === true) {
			chat = false;
			room.sendAnnouncement('Chat Desabilitado!', null, 0xFF0000, "bold", 2);
			return false;
		}

		if (chat === false & !player.admin) {
			return false;
		}
		
		if (message && player.admin) {
			var getMutar = message.match(/!mutar\s(.*)/);
			if (getMutar !== null) {
				var nomeMutar = getMutar[1];
				var verificarMutado = listaMutados.indexOf(nomeMutar);

				if (verificarMutado === -1) {
					listaMutados.push(nomeMutar);
					for(let i = 1; i < players.length;i++){
						if(stats.get(players[i].name) != null){
							room.sendAnnouncement(`${nomeMutar} ${linguagens[stats.get(players[i].name).linguagem].msgMutadoAdmin}`, players[i].id, 0xFFFFFF, "italic");
						}
					}
				} else {
					room.sendAnnouncement(`O jogador ${nomeMutar} já estava mutado!`, player.id, 0xFF0000);
				}

				return false;
			}		

			var getDesmutar = message.match(/!desmutar\s(.*)/);
			if (getDesmutar !== null) {
				var nomeDesmutar = getDesmutar[1];
				var verificarDesmutado = listaMutados.indexOf(nomeDesmutar);

				if (verificarDesmutado !== -1) {
					listaMutados.splice(verificarDesmutado, 1);
					room.sendAnnouncement(`${nomeDesmutar} ${linguagens[stats.get(players[i].name).linguagem].msgDesmutadoAdmin}`, null, 0xFFFFFF, "italic");
				} else {
					room.sendAnnouncement(`O jogador ${nomeDesmutar} não está mutado!`, player.id, 0xFF0000);
					return false;
				}

				return false;
			}
			if(getMutar == null && getDesmutar == null && message.toLowerCase() == "!mutar" || message.toLowerCase() == "!desmutar"){
				room.sendAnnouncement(`Não escreveste o nome do jogador !`, player.id, 0xFF0000);
				return false;
			}
		}
		
		if (message && player.admin) {
			var getBanir = message.match(/!ban\s(.*)/);
			if (getBanir !== null) {
				var nomeBanir = getBanir[1];
				if(stats.get(nomeBanir) != undefined){
					var verificarBanido = listaBanidos.get(stats.get(nomeBanir).conn);
	
					if (verificarBanido == undefined) {
						listaBanidos.set(stats.get(nomeBanir).conn, {nome: nomeBanir, auth: stats.get(nomeBanir).auth});
						localStorage.setItem("listaBanidos", JSON.stringify([...listaBanidos]));
						stats.get(nomeBanir).banido = true;
						room.kickPlayer(sacarIdPeloNome(nomeBanir), "Banido por um Admin", false);
						for(let i = 1; i < players.length;i++){
							if(stats.get(players[i].name) != null){
								room.sendAnnouncement(`${nomeBanir} ${linguagens[stats.get(players[i].name).linguagem].msgBanido} ${player.name}`, players[i].id, 0xFFFFFF, "italic");
							}
						}
					} else {
						room.sendAnnouncement(`O jogador ${nomeBanir} já estava banido!`, player.id, 0xFF0000);
					}
				}
				else{
					room.sendAnnouncement(`O jogador ${nomeBanir} não existe!`, player.id, 0xFF0000);
				}

				return false;
			}		

			var getDesbanir = message.match(/!unban\s(.*)/);
			if (getDesbanir !== null) {
				var nomeDesbanir = getDesbanir[1];
				if(stats.get(nomeDesbanir) != undefined){
					var verificarBanido = listaBanidos.get(stats.get(nomeDesbanir).conn);
					if (verificarBanido != undefined) {
						listaBanidos.delete(stats.get(nomeDesbanir).conn);
						localStorage.setItem("listaBanidos", JSON.stringify([...listaBanidos]))
						stats.get(nomeDesbanir).banido = false;
						for(let i = 1; i < players.length;i++){
							if(stats.get(players[i].name) != null){
								room.sendAnnouncement(`${nomeDesbanir} ${linguagens[stats.get(players[i].name).linguagem].msgDesbanidoAdmin} ${player.name}`, players[i].id, 0xFFFFFF, "italic");
							}
						}
					} else {
						room.sendAnnouncement(`O jogador ${nomeDesbanir} não estava banido!`, player.id, 0xFF0000);
						return false;
					}
				}
				else{
					room.sendAnnouncement(`O jogador ${nomeDesbanir} não existe!`, player.id, 0xFF0000);
				}

				return false;
			}
			if(getBanir == null && getDesbanir == null && message.toLowerCase() == "!banir" || message.toLowerCase() == "!unban"){
				room.sendAnnouncement(`Não escreveste o nome do jogador !`, player.id, 0xFF0000);
				return false;
			}
		}
		
		if (listaMutados.indexOf(player.name) !== -1) {
			return false;
		}

		if (message.toLowerCase() == '!mutados' && player.admin) {
			if (listaMutados.length > 0) {
				room.sendChat('Lista Mutados: '+ listaMutados.join(' | '));
			} else {
				room.sendChat('Não existem jogadores mutados!');
			}

			return false;
		}

		if (message == '!limparMutados' && player.admin) {
			listaMutados = [];
			room.sendChat('Lista de mutados limpa!');
			return false;
		}

		if (array_mensagemAjuda.includes(message.toLowerCase())) {
			var linguagem = stats.get(player.name).linguagem;
			room.sendAnnouncement(`${linguagens[linguagem].msgEntraDiscord} : ${linkDiscord}`, player.id, 0xFFFFFF, "bold");
			room.sendAnnouncement(linguagens[linguagem].msgEscreveComandos, player.id, 0x90EE90,"bold");
			room.sendAnnouncement(`!pt para portugues  !en to english  !es para español`, player.id, 0xFFF000,"bold");
			room.sendAnnouncement(linguagens[linguagem].msgServidorEmBeta, player.id, 0xFFFFFF, "bold");
			return false;
		}

		if (message == '!skins' && player.admin) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0x7A7A7A]);
			room.setTeamColors(2, 60, 0xFFFFFF, [0x7A7A7A]);
			return false;
		}	

		if (message == '!p' && player.admin) {
			room.pauseGame(true);
			return false;
		}

		if (message == '!g' && player.admin) {
			room.pauseGame(false);
			return false;
		}

		if (message == '!rr' && player.admin) {
			room.stopGame();
			reiniciarVariaveis(true);
			moverJogadoresSpec();
			setTimeout(() => {
				comecarJogo();
			}, 1000);
			return false;
		}

		if (message == '!parar' && player.admin) {
			room.stopGame();
			moverJogadoresSpec();
			return false;
		}

		if (message == "!limparBans" && player.admin) {
			room.clearBans();
			room.sendChat('Lista de Banimentos Limpa!!');
			return false;
		}
		
		if (message == "!limparBans" && player.admin) {
			room.clearBans();
			room.sendChat('Lista de Banimentos Limpa!!');
			return false;
		}

		if (message == "!limparbans") {
			room.clearBans();
			room.sendChat('Lista de Banimentos Limpa!!');
			return false;
		}

		if (message.toLowerCase() == "!buy") {
			mostrarLoja(player);
			return false;
		}

		if(message.toLowerCase().substr(0,5) == "!buy "){
			var getCompra = message.match(/!buy\s(.*)\s(.*)/);
			if(getCompra !== null){
				var opcaoCompra = getCompra[1];
				var idJogador = getCompra[2];
				comprarLoja(player, opcaoCompra, idJogador, players);
			}
			else{
				var getCompraSingle = message.match(/!buy\s(.*)/);
				if(getCompraSingle != null){
					var opcaoCompra = getCompraSingle[1];
					comprarLoja(player, opcaoCompra, -1, players);
				}
			}
		}

		if(message.toLowerCase().substr(0,8) == "!report "){
			var getReport = message.match(/!report\s(.*)/);
			if(getReport !== null){
				var msg = getReport[1];
				enviarMensagemDiscord(URLs.reports,{content: "```fix\n" + player.name + " >> " + msg + "```"});
				room.sendAnnouncement(`${linguagens[stats.get(player.name).linguagem].msgReportEnviado}`, player.id, 0x90EE90, "bold");
			}
			else{
				room.sendAnnouncement(`ERRO AO ENVIAR REPORT CONTACTE UM ADMIN NO DISCORD`, player.id, 0xFF0000, "bold");
			}
		}
		
		if (message.toLowerCase().substr(0, 8) == "!discord") {
			room.sendAnnouncement(`${linguagens[stats.get(player.name).linguagem].msgEntraDiscord} : ${linkDiscord}`, player.id, 0xFFFFFF, "bold");
			return false;
		}

		if (message.toLowerCase() == "!cores"){
			mostrarCoresLoja(player);
			return false;
		}

		if (message.toLowerCase().substr(0, 7) == "!cores ") {
			var getOpcao = message.match(/!cores\s(.*)/);
			if(getOpcao !== null){
				var opcaoCompra = getOpcao[1];
				comprarCores(player, opcaoCompra);
			}
			return false;
		}

		if (message.toLowerCase().substr(0, 5) == "!bet ") {
			players = room.getPlayerList();
			if(!epocaAposta){
				room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgNaoPossivelApostarAgora, player.id, 0xFF0000, "bold");
			}
			else{
				if(isInQJogaBets(player)){
					if(room.getScores() !== null){
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgNaoPodesApostarEstasJogar, player.id, 0xFF0000, "normal");
					}
					else{
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgNaoPodesApostarVaisJogar, player.id, 0xFF0000, "normal");
					}
					return false;
				}
				var getBet = message.match(/!bet\s(.*)\s(.*)/);
				if (getBet !== null) {
					if(getBet[1] > 0 && getBet[1] < 7){
						var jogadorApostado = qJogaBets[getBet[1]-1];
						var montanteAposta = getBet[2];
						if (montanteAposta > 0){
							if(montanteAposta > 20){
								montanteAposta = 20;
							}
							if(montanteAposta > stats.get(player.name).dinheiro){
								room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "bold");
								return false;
							}
							else{
								apostarEmJogador(player, jogadorApostado, montanteAposta);
							}
							return false;
						}
						else{
							room.sendAnnouncement('Tem de ser numero valido!', player.id, 0xFF0000, "normal");
						}
					}
				}
				else{
				}
			}
			return false;
		}

		if (message.toLowerCase().substr(0, 11) == "!tirarspam " && player.admin) { 
			var getTirarSpam = message.match(/!tirarspam\s(.*)/);
			var nome = getTirarSpam[1];
			if(listaSpam[nome].muted == true){
				listaSpam[nome].muted = false;
				listaSpam[nome].messageDates = [];
				for(let i = 1; i < players.length;i++){
					if(stats.get(players[i].name) != null){
						room.sendAnnouncement(`${nome} ${linguagens[stats.get(players[i].name).linguagem].msgDesmutadoAdmin}`, players[i].id, 0xFFFFFF, "normal");
					}
				}
			}
			else{
				room.sendAnnouncement(`${nome} não está mutado por spam!`, player.id, 0xFFFFFF, "normal");
			}
		}

		if (message.toLowerCase().substr(0, 1) == "!") {
			return false;
		}

		if(message && listaMutados.indexOf(player.name) == -1){
			var playerstats = stats.get(player.name);
			if(playerstats.inventario.cor != null && playerstats.inventario.estilo != null){
				room.sendAnnouncement(`${player.name}: ${message}`, null, playerstats.inventario.cor, playerstats.inventario.estilo, 1);
			}
			else{
				room.sendAnnouncement(`${player.name}: ${message}`, null, 0xFFFFFF, "normal", 1);
			}
			return false;
		}
	} ////////////////////////////////////////////////////////////////////////

	room.onPlayerLeave = function(player) {
		var numJogador = encontrarJogadorID(player.id);
		var players = room.getPlayerList();
		console.log(`${player.name} saiu da sala`);
		if(numJogador != -1 && Jogadores[numJogador][1] != 0 && room.getScores() != null){
			Jogadores[numJogador][1] = 0;
			classificados[classificado] = player.name;
			for(let i = 1; i < players.length;i++){
				if(stats.get(players[i].name) != null){
					room.sendAnnouncement(`${player.name} ${linguagens[stats.get(player.name).linguagem].msgAcabouEm} ${classificado+1}º`, players[i].id, 0xFFFFFF, "bold", 1);
				}
			}
			classificado--;
			toggleGrupoJogadores(false)
		}
		var numJogadorComVidas = jogadoresComVidas()
		if(numJogadorComVidas < 2 && room.getScores() != null){
			acabarJogo();
		}
		enviarMensagemDiscord(URLs.chat, {
			content: `> ***${player.name}** saiu do servidor!*`
		});
		if(room.getScores() == null && isInQJogaBets(player) && epocaAposta){
			mostrarJogadoresParaApostar();
		}
	}

	room.onPositionsReset = function() {
		var players = room.getPlayerList();
		var data = new Date();
		lastTouch = -1;
		verificarAFK = true;
		posicionarJogadores();
		jogadorMini();
		jogadorGrande();
		atualizarAvatares(players);
		toggleGrupoJogadores(true);
		if(ultimoSofrido == -1){
			toggleGrupoJogadores(false);
			room.pauseGame(true);
			room.pauseGame(false);
		}
		else{
			setTimeout(() => {
				console.log(compararDatasSeg(new Date(), data));
				if(lastTouch == -1 && (compararDatasSeg(new Date(), data) >= 4.8 && compararDatasSeg(new Date(), data) <= 5.2)){
					toggleGrupoJogadores(false);
					for(let i = 1; i < players.length;i++){
						if(stats.get(players[i].name) != null && !jogoPausado){
							room.sendAnnouncement(linguagens[stats.get(players[i].name).linguagem].msgAcabouTempoKickOff, players[i].id, 0xFFFF00,"normal",1);
						}
					}
				}
			}, 5000);
		}
	}


	// Funções function

	var switchSides = function(room) {
		var players = room.getPlayerList();
		for (var i = 0; i < players.length; i++) {
		if (players[i].team != 0) {
			room.setPlayerTeam(players[i].id, (players[i].team % 2) + 1);
		}
		}
	}

	function minParaMs(min){
		return min * 60000;
	}

	lastTouchDisplay = function(player, team) {
		var teamName = null,
			display = player;
		
		if (team == 1) {
			teamName = 'Red'
		} else if (team == 2) {
			teamName = 'Blue';
		}

		if (teamName !== null) {
			display = player + ' ['+ teamName +']';
		}
		room.sendChat("Último toque : " + display );
	}

	function definir_stats(player) {
		setTimeout(() =>{
			if (stats.get(player.name) != undefined) {
				room.sendAnnouncement(`${linguagens[stats.get(player.name).linguagem].msgLogadoSucesso} ${player.name} !`, player.id, 0x00FF00, "normal", 2);
				return;
			}
			else {
				stats.set(player.name, {auth: player.auth, conn: player.conn, linguagem: 0, pontos : 0, rank : "🦯", banido: false, jogosJogados : 0, vitorias: 0, golosMarcados: 0, dinheiro: 20, inventario : {mini : false, grande : false, cor: "0xFFFFFF", estilo: "normal", avatar: "default"}});
				localStorage.setItem("stats", JSON.stringify([...stats]));
				room.sendAnnouncement(`Registado com Sucesso ${player.name} !\n!pt - portuguese\t!en - english\t!es - spanish`, player.id, 0x00FF00, "normal", 2);
			}
		}, 100);
	}

	function gerirInatividade() {
		if (verificarAFK) {
			for (var i = 0; i < Jogadores.length; i++) {
				if(Jogadores[i][1] != 0){
					setActivity(i, getActivity(i)+1);
				}
			}
		}
		for(let i = 0;i < Jogadores.length; i++){
			if(atividadeJogadores[i] / 60 == (limiteAFK-3) && Jogadores[i][1] !== 0){
				if(stats.get((Jogadores[i][2]))){
					room.sendAnnouncement(linguagens[stats.get(Jogadores[i][2]).linguagem].msgAvisoAfk, Jogadores[i][3], 0xFF0000, "bold", 2);
					setTimeout(() => {
						if(atividadeJogadores[i] / 60 >= limiteAFK){
							room.kickPlayer(Jogadores[i][3], "⛔ Kickado por AFK ⛔.", false);
						}
					}, 3000);
				}
			}
		}
	}
	
	function setActivity(index, value){
		atividadeJogadores[index] = value;
	}

	function getActivity(index){
		return atividadeJogadores[index];
	}

	function mostrarLoja(player){
		room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgMostrarLoja, player.id, 0xFFF000, "normal", 1);
		return false;
	}

	function comprarLoja(player, opcao, index, playerList){
		var statsComprou = stats.get(player.name);
		var players = room.getPlayerList();
		var indexJogador = procurarJogadorBaliza(index-1);
		if(index != -1 && room.getScores() != null){
			var jogadorAfetado = room.getPlayer(Jogadores[indexJogador][3]);
			var statsAfetado = stats.get(jogadorAfetado.name);
		}
		switch(opcao){
			case '1':
				if(epocaCompraJogo && index != -1){
					var idJogador = encontrarJogadorID(player.id);
					if(Jogadores[idJogador][1] == 0){
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgNaoEPossivelComprarNJ, player.id, 0xFF0000, "normal", 2);
					}
					else{
						if(statsComprou.dinheiro >= 50){
							if(statsAfetado.inventario.mini == true){
								return room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgJaTinhaComprado,player.id,0xFFFF00,"normal",1);
							}
							else{
								statsAfetado.inventario.mini = true;
								statsComprou.dinheiro -= 50;
								for(let i = 1; i < players.length;i++){
									if(stats.get(players[i].name) != undefined){
										room.sendAnnouncement(`${player.name} ${linguagens[stats.get(player.name).linguagem].msgTornouO} ${jogadorAfetado.name} ${linguagens[stats.get(player.name).linguagem].msgMini}!`, players[i].id, 0xFF0000, "normal", 2);
									}
								}
								jogadorMini();
							}
						}
						else{
							room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "normal", 2);
						}jogadorGrande
					}
				}
				else{
					room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgNaoEPossivelComprarJNC, player.id, 0xFF0000, "normal", 2);
				}
			break;
			case '2':
				if(epocaCompraJogo){
					if(index != -1){
						return room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgNaoEPossivelComprarOJ, player.id, 0xFF0000, "normal", 2);
					}
					if(statsComprou.dinheiro >= 50){
						comprarVida(player);
						statsComprou.dinheiro -= 50;
					}
					else{
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "normal", 2);
					}
				}
				else{
					room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgNaoEPossivelComprarJNC, player.id, 0xFF0000, "normal", 2);
				}
			break;
			case '3':
				if(epocaCompraJogo){
					if(index != -1){
						return room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgNaoEPossivelComprarOJ, player.id, 0xFF0000, "normal", 2);
					}
					if(statsComprou.dinheiro >= 100){
						comprarMaior(player);
						statsComprou.dinheiro -= 100;
						jogadorGrande();
					}
					else{
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "normal", 2);
					}
				}
				else{
					room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgNaoEPossivelComprarJNC, player.id, 0xFF0000, "normal", 2);
				}
			break;
		}
	}

	function vidasJogadores(target){
		var jogadoresVivos = [];
		var players = room.getPlayerList();
		var k=0;
		if(room.getScores() != null){
			for(var i=0; i < Jogadores.length;i++){
				if(Jogadores[i][1] > 0 && Jogadores[i][3] != 0){
					jogadoresVivos[k] = Jogadores[i];
					k++;
				}
			}
			if(target == null){
				if(jogadoresVivos.length == 6){
					for(let i = 1; i < players.length;i++){
						if(stats.get(players[i].name) != undefined){
							room.sendAnnouncement(`${linguagens[stats.get(players[i].name).linguagem].msgVidas}: ${jogadoresVivos[0][2]}: ${jogadoresVivos[0][1]} | ${jogadoresVivos[1][2]}: ${jogadoresVivos[1][1]} | ${jogadoresVivos[2][2]}: ${jogadoresVivos[2][1]} | `+
							`${jogadoresVivos[3][2]}: ${jogadoresVivos[3][1]} | ${jogadoresVivos[4][2]}: ${jogadoresVivos[4][1]} | ${jogadoresVivos[5][2]}: ${jogadoresVivos[5][1]}`, players[i].id, 0x90EE90, "normal", 1);
						}
					}
				}
				if(jogadoresVivos.length == 5){
					for(let i = 1; i < players.length;i++){
						if(stats.get(players[i].name) != undefined){
							room.sendAnnouncement(`${linguagens[stats.get(players[i].name).linguagem].msgVidas}: ${jogadoresVivos[0][2]}: ${jogadoresVivos[0][1]} | ${jogadoresVivos[1][2]}: ${jogadoresVivos[1][1]} | ${jogadoresVivos[2][2]}: ${jogadoresVivos[2][1]} | `+
							`${jogadoresVivos[3][2]}: ${jogadoresVivos[3][1]} | ${jogadoresVivos[4][2]}: ${jogadoresVivos[4][1]} |`, players[i].id, 0x90EE90, "normal", 1);
						}
					}
				}
				if(jogadoresVivos.length == 4){
					for(let i = 1; i < players.length;i++){
						if(stats.get(players[i].name) != undefined){
							room.sendAnnouncement(`${linguagens[stats.get(players[i].name).linguagem].msgVidas}: ${jogadoresVivos[0][2]}: ${jogadoresVivos[0][1]} | ${jogadoresVivos[1][2]}: ${jogadoresVivos[1][1]} | ${jogadoresVivos[2][2]}: ${jogadoresVivos[2][1]} | `+
							`${jogadoresVivos[3][2]}: ${jogadoresVivos[3][1]} |`, players[i].id, 0x90EE90, "normal", 1);
						}
					}
				}
				if(jogadoresVivos.length == 3){
					for(let i = 1; i < players.length;i++){
						room.sendAnnouncement(`${linguagens[stats.get(players[i].name).linguagem].msgVidas}: ${jogadoresVivos[0][2]}: ${jogadoresVivos[0][1]} | ${jogadoresVivos[1][2]}: ${jogadoresVivos[1][1]} | ${jogadoresVivos[2][2]}: ${jogadoresVivos[2][1]} |`, players[i].id, 0x90EE90, "normal", 1);
					}
				}
				if(jogadoresVivos.length == 2){
					for(let i = 1; i < players.length;i++){
						if(stats.get(players[i].name) != undefined){
							room.sendAnnouncement(`${linguagens[stats.get(players[i].name).linguagem].msgVidas}: ${jogadoresVivos[0][2]}: ${jogadoresVivos[0][1]} | ${jogadoresVivos[1][2]}: ${jogadoresVivos[1][1]}`,players[i].id , 0x90EE90, "normal", 1);
						}
					}
				}
			}
			else{
				if(jogadoresVivos.length == 6){
					room.sendAnnouncement(`${linguagens[stats.get(target.name).linguagem].msgVidas}: ${jogadoresVivos[0][2]}: ${jogadoresVivos[0][1]} | ${jogadoresVivos[1][2]}: ${jogadoresVivos[1][1]} | ${jogadoresVivos[2][2]}: ${jogadoresVivos[2][1]} | `+
					`${jogadoresVivos[3][2]}: ${jogadoresVivos[3][1]} | ${jogadoresVivos[4][2]}: ${jogadoresVivos[4][1]} | ${jogadoresVivos[5][2]}: ${jogadoresVivos[5][1]}`, target.id, 0x90EE90, "normal", 1);
				}
				if(jogadoresVivos.length == 5){
					room.sendAnnouncement(`${linguagens[stats.get(target.name).linguagem].msgVidas}: ${jogadoresVivos[0][2]}: ${jogadoresVivos[0][1]} | ${jogadoresVivos[1][2]}: ${jogadoresVivos[1][1]} | ${jogadoresVivos[2][2]}: ${jogadoresVivos[2][1]} | `+
					`${jogadoresVivos[3][2]}: ${jogadoresVivos[3][1]} | ${jogadoresVivos[4][2]}: ${jogadoresVivos[4][1]} |`, target.id, 0x90EE90, "normal", 1);
				}
				if(jogadoresVivos.length == 4){
					room.sendAnnouncement(`${linguagens[stats.get(target.name).linguagem].msgVidas}: ${jogadoresVivos[0][2]}: ${jogadoresVivos[0][1]} | ${jogadoresVivos[1][2]}: ${jogadoresVivos[1][1]} | ${jogadoresVivos[2][2]}: ${jogadoresVivos[2][1]} | `+
					`${jogadoresVivos[3][2]}: ${jogadoresVivos[3][1]} |`, target.id, 0x90EE90, "normal", 1);
				}
				if(jogadoresVivos.length == 3){
					room.sendAnnouncement(`${linguagens[stats.get(target.name).linguagem].msgVidas}: ${jogadoresVivos[0][2]}: ${jogadoresVivos[0][1]} | ${jogadoresVivos[1][2]}: ${jogadoresVivos[1][1]} | ${jogadoresVivos[2][2]}: ${jogadoresVivos[2][1]} |`, target.id, 0x90EE90, "normal", 1);
				}
				if(jogadoresVivos.length == 2){
					room.sendAnnouncement(`${linguagens[stats.get(target.name).linguagem].msgVidas}: ${jogadoresVivos[0][2]}: ${jogadoresVivos[0][1]} | ${jogadoresVivos[1][2]}: ${jogadoresVivos[1][1]}`, target.id, 0x90EE90, "normal", 1);
				}
			}
		}
		else{
			room.sendAnnouncement(linguagens[stats.get(target.name).linguagem].msgNenhumJogoADecorrer, target.id, 0xFF0000, "bold", 1);
		}
	}

	function acabarJogo(){
		var players = room.getPlayerList();
		moverJogadoresSpec();
		setTimeout(() => {
			if(classificados[0] !== -1 && classificados[1] !== -1 && classificados[2] !== -1){
				for(let i = 1; i < players.length;i++){
					if(stats.get(players[i].name) != null){
						room.sendAnnouncement(`🏆 ${linguagens[stats.get(players[i].name).linguagem].msgClassificacao} 🏆`,players[i].id, 0xFFFFFF, "bold", 1);
						room.sendAnnouncement("🥇 1º - " + classificados[0] + " 🥇", players[i].id, 0xFFD700, "normal", 1);
						room.sendAnnouncement("🥈 2º - " + classificados[1] + " 🥈", players[i].id, 0xC0C0C0, "normal", 1);
						room.sendAnnouncement("🥉 3º - " + classificados[2] + " 🥉", players[i].id, 0xCD7F32, "normal", 1);
					}
				}
				resultadosApostas();
				if(qAcertouVencedor(classificados[0]) == 0){
					for(let i = 1; i < players.length;i++){
						if(stats.get(players[i].name) != null){
							room.sendAnnouncement(`${linguagens[stats.get(players[i].name).linguagem].msgVencedoresApostas}: ${linguagens[stats.get(players[i].name).linguagem].msgNinguemAcertouAposta}`, players[i].id, 0xFFF000, "normal", 1);
						}
					}
				}
				else{
					for(let i = 1; i < players.length;i++){
						if(stats.get(players[i].name) != null){
							room.sendAnnouncement(`${linguagens[stats.get(players[i].name).linguagem].msgVencedoresApostas}: ${qAcertouVencedor(classificados[0])}`, players[i].id, 0xFFF000, "normal", 1);
						}
					}
				}
				ordenarJogadores();
				var vencedor = stats.get(classificados[0]);
				vencedor.vitorias += 1;
				rewards(room.getPlayer(sacarIdPeloNome(classificados[0])), "vitorias");
			}
		}, 20);
		room.stopGame();
	}

	function qAcertouVencedor(nomeVencedor){
		var qAcertou = [];
		var sAcertou = '';
		for(let i=0; i < bets.length; i++){
			if(bets[i].jApostado.name == nomeVencedor){
				let vencedor = bets[i].apostador.name;
				qAcertou.push(vencedor);
			}
		}
		if(qAcertou.length == 0){
			return 0;
		}
		else{
			if(qAcertou.length == 1){
				sAcertou = qAcertou[0];
			}
			else{
				for(let i=1; i < qAcertou.length; i++){
					sAcertou = sAcertou + ', ' + qAcertou[i];
				}
			}
		}
		return sAcertou;
	}

	function moverJogadoresSpec(){
		var players = room.getPlayerList();
		for(var i=0;i < players.length; i++){
			if(players[i].team != 0){
				room.setPlayerTeam(players[i].id, 0);
			}
		}
	}

	function toggleGrupoJogadores(isC1){
		if(isC1){
			for(let i=0;i < Jogadores.length;i++){
				if(Jogadores[i][3] != ultimoSofrido && Jogadores[i][1] != 0 && room.getPlayerDiscProperties(Jogadores[i][3]) != null){
					discProps = room.getPlayerDiscProperties(Jogadores[i][3]);
					room.setPlayerDiscProperties(Jogadores[i][3], {cGroup : discGroupdefault | room.CollisionFlags.c1});
				}
			}
		}
		else{
			for(let i=0;i < Jogadores.length;i++){
				room.setPlayerDiscProperties(Jogadores[i][3], {cGroup : discGroupdefault});
			}
		}
	}

	

	function ordenarJogadores(){
		var players = room.getPlayerList();
		var idClassificados = [sacarIdPeloNome(classificados[0]),sacarIdPeloNome(classificados[1])];
		room.setPlayerTeam(idClassificados[0], 2);
		room.setPlayerTeam(idClassificados[1], 2);
		if(idClassificados[0] != -1 && idClassificados[1] != -1){
			for(let i = 1; i < players.length; i++){
				if(players[i].id != idClassificados[0] && players[i].id != idClassificados[1]){
					room.setPlayerTeam(players[i].id, 2);
				}
			}
			room.setPlayerTeam(idClassificados[0], 0);
			room.setPlayerTeam(idClassificados[1], 0);
			var players2 = room.getPlayerList();
			for(let i = 1; i < players2.length; i++){
				if(players[i].id != idClassificados[0] && players[i].id != idClassificados[1]){
					room.setPlayerTeam(players[i].id, 0);
				}
			}
			for(let i = 1; i < players.length;i++){
				if(stats.get(players[i].name) != null){
					room.sendAnnouncement(`${classificados[0]} ${linguagens[stats.get(players[i].name).linguagem].msgE} ${classificados[1]} ${linguagens[stats.get(players[i].name).linguagem].msgTerminouPrimeiroSegundo}`, players[i].id, 0x90EE90, "normal", 1);
				}
			}
		}
		else{
			enviarMensagemDiscord(URLs.chat, {
				content: `⚠️ ERRO oJ-${new Error().lineNumber} ⚠️`
			});
		}
	}

	function reiniciarVariaveis(boolindo){
		var players = room.getPlayerList();
		Jogadores = [
			[0, 3, "", 0],
			[0, 3, "", 0],
			[0, 3, "", 0],
			[0, 3, "", 0],
			[0, 3, "", 0],
			[0, 3, "", 0],
		];
		atividadeJogadores[0,0,0,0,0,0];
		classificados = [-1,-1,-1,-1,-1,-1];
		classificado = 5;
		ultimoSofrido = -1;
		numeros = [];
		if(boolindo){
			bets = [];
			qJogaBets = [];
		}
		for(let i=1;i < players.length;i++){
			if(stats.get(players[i].name) !== null){
				stats.get(players[i].name).inventario.mini = false;
				stats.get(players[i].name).inventario.grande = false;
			}
		}
	}

	function apostarEmJogador(apostador, apostado, montanteAposta){
		var players = room.getPlayerList();
		if(!isInQJogaBets(apostado, players)){
			room.sendAnnouncement(`${linguagens[stats.get(apostador.name).linguagem].msgOJogador} ${apostado.name} ${linguagens[stats.get(apostador.name).linguagem].msgNVaiJogar}`, apostador.id, 0xFF0000, "normal", 1);
		}
		else{
			var aposta = new Object();
			aposta.apostador = apostador;
			aposta.jApostado = apostado;
			aposta.montante = montanteAposta;
			var indexApostaJaFeita = indexAposta(apostador.name);
			if(indexApostaJaFeita != -1){
				bets.splice(indexApostaJaFeita, 1);
			}
			bets.push(aposta);
			for(let i = 1; i < players.length;i++){
				if(stats.get(players[i].name) != null){
					room.sendAnnouncement(`${aposta.apostador.name} ${linguagens[stats.get(players[i].name).linguagem].msgApostou} ${aposta.montante}€ ${linguagens[stats.get(players[i].name).linguagem].msgEm} ${aposta.jApostado.name}`, players[i].id, 0xFFF000, "normal", 1);
				}
			}
			
		}
	}

	function resultadosApostas(){
		var apostador;
		var apostado;
		var montante;
		for(i = 0; i < bets.length;i++){
			apostador = bets[i].apostador;
			apostado = bets[i].jApostado;
			montante = bets[i].montante;
			statsApostador = stats.get(apostador.name);
			if(verificarClassificacao(apostado.name) < 1 && verificarClassificacao(apostado.name) != -1){
				if(verificarClassificacao(apostado.name) == 1){
					return false;
				}
				if(verificarClassificacao(apostado.name) == -1){
					enviarMensagemDiscord(URLs.chat, {
						content: `⚠️ ERRO rA-${new Error().lineNumber} ⚠️ ||${apostador.name} aposta ${montante} em ${apostado.name}||`
					});
					console.log(`⚠️ ERRO rA-${new Error().lineNumber} ⚠️`);
					return false;
				}
				statsApostador.dinheiro += parseInt(montante);
			}
			else{
				statsApostador.dinheiro -= parseInt(montante);
				if(statsApostador.dinheiro < 0){
					enviarMensagemDiscord(URLs.chat, {
						content: `⚠️ ERRO rA-${new Error().lineNumber} ⚠️ ||${apostador.name} aposta ${montante} mas tinha apenas ${statsApostador.dinheiro}||`
					});
					console.log(`⚠️ ERRO rA-${new Error().lineNumber} ⚠️`);
				}
				return false;
			}
		}
	}

	function mostrarJogadoresParaApostar(){
		var players = room.getPlayerList();
		qJogaBets = [];
		if(players.length > 6){
			for(let i=1;i < minimoPlayers;i++){
				if(players[i].team == 0){
					qJogaBets.push(players[i]);
				}
			}
			for(let i = 1; i < players.length;i++){
				if(stats.get(players[i].name) != null && qJogaBets[0] != null && qJogaBets[1] != null && qJogaBets[2] != null && qJogaBets[3] != null && qJogaBets[4] != null && qJogaBets[5] != null){
					room.sendAnnouncement(`${linguagens[stats.get(players[i].name).linguagem].msgAposta}: ${qJogaBets[0].name}: ${1} | ${qJogaBets[1].name}: ${2}`+
					`| ${qJogaBets[2].name}: ${3} | ${qJogaBets[3].name}: ${4} | ${qJogaBets[4].name}: ${5}`+
					`| ${qJogaBets[5].name}: ${6}`, players[i].id, 0xFFF000, "normal", 1);
				}
			}
			epocaAposta = true;
		}
		return false;
	}

	function verificarClassificacao(nomeJogador){
		for(let i = 0; i < classificados.length;i++){
			if(nomeJogador == classificados[i]){
				return i;
			}
		}
		return -1;
	}

	function verificarSeJoga(player, playerList){
		var players = playerList;
		if(players.length < 6){
			enviarMensagemDiscord(URLs.chat, {
				content: `⚠️ ERRO vSJ-${new Error().lineNumber} ⚠️`
			});
			console.log(`⚠️ ERRO vSJ-${new Error().lineNumber} ⚠️`);
			return false;
		}
		else{
			for(let i = 1;i < minimoPlayers;i++){
				if(player.id == players[i].id){
					return true;
				}
			}
		}
		return false;
	}

	function atualizarPontos(){
		var jogadorPontos;
		jogadorPontos = stats.get(classificados[0]);
		if(jogadorPontos !== undefined){
			jogadorPontos.pontos += 3;
		}
		jogadorPontos = stats.get(classificados[1]);
		if(jogadorPontos !== undefined){
			jogadorPontos.pontos += 2;
		}
		jogadorPontos = stats.get(classificados[2]);
		if(jogadorPontos !== undefined){
			jogadorPontos.pontos += 1;
		}
		jogadorPontos = stats.get(classificados[5]);
		if(jogadorPontos !== undefined){
			if(jogadorPontos.pontos > 1){
				jogadorPontos.pontos -= 2;
			}
			if(jogadorPontos.pontos == 1){
				jogadorPontos.pontos -= 1;
			}
		}
		jogadorPontos = stats.get(classificados[4]);
		if(jogadorPontos !== undefined){
			if(jogadorPontos.pontos > 0){
				jogadorPontos.pontos -= 1;
			}
		}
	}

	function atualizarTop5(){
		var pontos = [];
		top5 = [
			["##", -1],
			["##", -1],
			["##", -1],
			["##", -1],
			["##", -1],
		];
		for (const [nome] of stats) {
			pontos.push(stats.get(nome).pontos);
		}
		var topPontos = pontos.sort((a,b) => b-a).slice(0,5);
		if(topPontos.length < 5){
			for(let i=0;i < 5;i++){
				if(topPontos[i] == undefined){
					topPontos[i] = 0;
				}
			}
		}
		for (const [nome] of stats) {
			for(var i=0; i < topPontos.length;i++){
				if(stats.get(nome).pontos == topPontos[i] && !isLaDentroMatriz(nome, 0, top5)){
					top5[i] = [nome, stats.get(nome).pontos];
				}
			}
		}
	}

	function atualizarTop3W(){
		var vitorias = [];
		top3W= [
			["##", -1],
			["##", -1],
			["##", -1],
		]
		for (const [nome] of stats) {
			vitorias.push(stats.get(nome).vitorias);
		}
		var topvitorias = vitorias.sort((a,b) => b-a).slice(0,3);
		if(topvitorias.length < 5){
			for(let i=0;i < 3;i++){
				if(topvitorias[i] == undefined){
					topvitorias[i] = 0;
				}
			}
		}
		for (const [nome] of stats) {
			for(var i=0; i < topvitorias.length;i++){
				if(stats.get(nome).vitorias == topvitorias[i] && !isLaDentroMatriz(nome, 0, top3W)){
					top3W[i] = [nome, stats.get(nome).vitorias];
				}
			}
		}
	}

	function isLaDentro(variavel, array){
		for(i=0;i < array.length;i++){
			if(array[i] == variavel){
				return true;
			}
		}
		return false;
	}

	function isLaDentroMatriz(variavel, campo, array){
		for(i=0;i < array.length;i++){
			if(array[i][campo] == variavel){
				return true;
			}
		}
		return false;
	}

	function adicionarGoloMarcado(ultimoToque){
		var jogador = stats.get(Jogadores[ultimoToque][2]);
		jogador.golosMarcados += 1;
	}

	function jogadoresComVidas(){
		var numJogadoresComVidas = 0;
		for(i=0;i < Jogadores.length;i++){
			if(Jogadores[i][1] > 0 && Jogadores[i][3] != 0){
				numJogadoresComVidas += 1;
			}
		}
		return numJogadoresComVidas;
	}

	function procurarJogadorBaliza(numBaliza){
		var numJogador= -1;
		for(var i=0;i < Jogadores.length;i++){
			if(numBaliza == Jogadores[i][0] && Jogadores[i][1] != 0){
				numJogador = i;
				i = Jogadores.length;
			}
		}
		return numJogador;
	}


	function procurarBalizaCoords(pos){
		var distancia2;
		var menor = calculaDistancia(listaBalizas[0][0],listaBalizas[0][1], pos);
		var numBaliza = 0;
		for(var i=1;i < 6;i++){
			distancia2 = calculaDistancia(listaBalizas[i][0],listaBalizas[i][1], pos);
			if(distancia2 < menor){
				numBaliza = i;
				menor = distancia2;
			}
		}
		return numBaliza;
	}

	function atribuirBalizas(){
		var players = room.getPlayerList();
		var j=0;
		var k=0;
		var aux;
		for(var i=1;i < players.length;i++){
			if(players[i].team != 0){
				Jogadores[k][1] = 3;
				Jogadores[k][2] = players[i].name;
				Jogadores[k][3] = players[i].id;
				aux = stats.get(Jogadores[k][2]);
				if(aux !== undefined){
					aux.jogosJogados += 1;
					rewards(players[i], "jogos");
				}
				console.log(Jogadores[k]);
				j++;
				k++;
			}
		}
		randomizarNumeros()
	}

	function rewards(player, tReward){
		if (player != null){
			statsJogador = stats.get(player.name);
			if(statsJogador == null){
				return enviarMensagemDiscord(URLs.chat, {content: `⚠️ ERRO RSJEN-${new Error().lineNumber} ⚠️`});
			}
			else{
				switch(tReward){
					case "jogos":
						if(statsJogador.jogosJogados % 20 == 0){
							statsJogador.dinheiro += 20;
						}
						break;
					case "vitorias":
						if(statsJogador.vitorias % 10 == 0){
							statsJogador.dinheiro += 25;
						}
						break;
				}
			}

		}
	}

	function atualizarAvatares(players){
		var jogador;
		var rank;
		for(var i=0;i < players.length;i++){
			jogador = stats.get(players[i].name);
			if(jogador !== undefined){
				rank = jogador.rank;
				JSON.stringify(rank);
				room.setPlayerAvatar(players[i].id, rank);
			}
		}
	}

	function atualizarRanks(){ // Melhorar isto
		for(let i=0;i < Jogadores.length;i++){
			var jogador = stats.get(Jogadores[i][2]);
			if(jogador !== undefined){
				if(jogador.pontos < 25 && jogador.rank == "🦽"){
					jogador.rank = "🦯";
					setTimeout(() => {
						room.sendAnnouncement(`${Jogadores[i][2]} é uma cebola e desceu para o rank 🦯`, null, 0xFF0000, "bold", 2);
					}, 500);
				}
				if(jogador.pontos >= 25 && jogador.pontos < 50){
					if(jogador.rank == "🦯"){
						jogador.rank = "🦽";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} subiu para o rank 🦽`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
					if(jogador.rank == "🛴"){
						jogador.rank = "🦽";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} é um pêssego e desceu para o rank 🦽`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
				if(jogador.pontos >= 50 && jogador.pontos < 75){
					if(jogador.rank == "🦽"){
						jogador.rank = "🛴";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} deixou de ser desabilitado e subiu para o rank 🛴`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
					if(jogador.rank == "🚲"){
						jogador.rank = "🛴";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} é um ananás e desceu para o rank 🛴`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
				if(jogador.pontos >= 75 && jogador.pontos < 100){
					if(jogador.rank == "🛴"){
						jogador.rank = "🚲";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} subiu para o rank 🚲`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
					if(jogador.rank == "🛵"){
						jogador.rank = "🚲";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} é uma castanha e desceu para o rank 🚲`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
				if(jogador.pontos >= 100 && jogador.pontos < 150){
					if(jogador.rank == "🚲"){
						jogador.rank = "🛵";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} subiu para o rank 🛵`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
					if(jogador.rank == "🛺"){
						jogador.rank = "🛵";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} é uma banana descascada e desceu para o rank 🛵`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
				if(jogador.pontos >= 150 && jogador.pontos < 200){
					if(jogador.rank == "🛵"){
						jogador.rank = "🛺";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} subiu para o rank 🛺`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
					if(jogador.rank == "🚜"){
						jogador.rank = "🛺";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} é um coxo e desceu para o rank 🛺`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
				if(jogador.pontos >= 200 && jogador.pontos < 250){
					if(jogador.rank == "🛺️"){
						jogador.rank = "🚗";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} subiu para o rank 🚗`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
					if(jogador.rank == "🚜"){
						jogador.rank = "🚗";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} é um morango e desceu para o rank 🚗`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
				if(jogador.pontos >= 250 && jogador.pontos < 300){
					if(jogador.rank == "🚗"){
						jogador.rank = "🚜";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} subiu para o rank 🚜`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
					if(jogador.rank == "🚚"){
						jogador.rank = "🚜";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} é um fiambre e desceu para o rank 🚜`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
				if(jogador.pontos >= 300 && jogador.pontos < 350){
					if(jogador.rank == "🚜"){
						jogador.rank = "🚚";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} subiu para o rank 🚚`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
					if(jogador.rank == "🚆"){
						jogador.rank = "🚚";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} é um presunto e desceu para o rank 🚚`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
				if(jogador.pontos >= 350 && jogador.pontos < 400){
					if(jogador.rank == "🚚"){
						jogador.rank = "🚆";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} subiu para o rank 🚆 `, null, 0xFF0000, "bold", 2);
						}, 500);
					}
					if(jogador.rank == "🚁"){
						jogador.rank = "🚆";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} é um presunto e desceu para o rank 🚆`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
				if(jogador.pontos >= 400 && jogador.pontos < 450){
					if(jogador.rank == "🚆"){
						jogador.rank = "🚁";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} subiu para o rank 🚁`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
					if(jogador.rank == "✈️"){
						jogador.rank = "🚁";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} é um presunto e desceu para o rank 🚁`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
				if(jogador.pontos >= 450 && jogador.pontos < 500){
					if(jogador.rank == "🚁"){
						jogador.rank = "✈️";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} subiu para o rank ✈️`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
					if(jogador.rank == "🚀"){
						jogador.rank = "✈️";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} é um presunto e desceu para o rank ✈️`, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
				if(jogador.pontos >= 500){
					if(jogador.rank == "✈️"){
						jogador.rank = "🚀";
						setTimeout(() => {
							room.sendAnnouncement(`${Jogadores[i][2]} subiu para o rank 🚀 `, null, 0xFF0000, "bold", 2);
						}, 500);
					}
				}
			}
		}
	}

	function comecarJogo(){
		var players = room.getPlayerList();
		reiniciarVariaveis(false);
		var faltam = minimoPlayers - room.getPlayerList().length;
		if(comecar == 0){
			if (players.length > 6) {
				atualizarAvatares(players);
				for(var i=1;i < 4;i++){
					room.setPlayerTeam(players[i].id,1);
				}
				for(var i=4;i < minimoPlayers;i++){
					room.setPlayerTeam(players[i].id,2);
				}
				comecar = 1;
				setTimeout(() => {
					atribuirBalizas();
					room.startGame();
					posicionarJogadores();
					room.pauseGame(true);
					room.pauseGame(false);
					for(let i = 1; i < players.length;i++){
						if(stats.get(players[i].name) != null){
							room.sendAnnouncement(linguagens[stats.get(players[i].name).linguagem].msgComecou, players[i].id, 0x90EE90, "bold", 1);
						}
					}
				}, 2000);
			}
			else{
				room.sendAnnouncement("São precisos 6 Jogadores para começar o jogo ! Faltam " + faltam, null, 0xFFFFFF, "bold", 2);
				comecar = 0;
			}
		}
	}

	function randomizarNumeros() {
		var numerosUnicos = new Set();
		while (numerosUnicos.size < 6) {
			var numero = Math.floor(Math.random() * 6)
			Jogadores[numerosUnicos.size][0] = numero;
			numerosUnicos.add(numero); // Gera números aleatórios entre 0 e 5
		};
	}

	function isNumber(value) 
	{
	   return typeof value === 'number' && isFinite(value);
	}

	function posicionarJogadores(){
		for(var i=0;i < 6;i++){
			if(Jogadores[i][1] != 0 && Jogadores[i][3] != ultimoSofrido){
				if(Jogadores[i][0] == 0){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoes.bal1);
				}
				if(Jogadores[i][0] == 1){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoes.bal2);
				}
				if(Jogadores[i][0] == 2){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoes.bal3);
				}
				if(Jogadores[i][0] == 3){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoes.bal4);
				}
				if(Jogadores[i][0] == 4){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoes.bal5);
				}
				if(Jogadores[i][0] == 5){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoes.bal6);
				}
			}
			if(Jogadores[i][3] == ultimoSofrido && Jogadores[i][1] != 0){
				if(Jogadores[i][0] == 0){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoesSofrida.bal1);
				}
				if(Jogadores[i][0] == 1){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoesSofrida.bal2);
				}
				if(Jogadores[i][0] == 2){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoesSofrida.bal3);
				}
				if(Jogadores[i][0] == 3){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoesSofrida.bal4);
				}
				if(Jogadores[i][0] == 4){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoesSofrida.bal5);
				}
				if(Jogadores[i][0] == 5){
					room.setPlayerDiscProperties(Jogadores[i][3], posicoesSofrida.bal6);
				}
			}
		}
	}


	function jogadorMini(){
		for(let i=0;i < Jogadores.length;i++){
			if(stats.has(Jogadores[i][2]) !== null){
				if(stats.get(Jogadores[i][2])){
					if(stats.get(Jogadores[i][2]).inventario.mini == true && Jogadores[i][2] != 0){
						room.setPlayerDiscProperties(Jogadores[i][3], {radius: 11});
					}
				}
			}
		}
	}

	function jogadorGrande(){
		for(let i=0;i < Jogadores.length;i++){
			if(stats.has(Jogadores[i][2]) !== null){
				if(stats.get(Jogadores[i][2])){
					if(stats.get(Jogadores[i][2]).inventario.grande == true && Jogadores[i][2] != 0){
						room.setPlayerDiscProperties(Jogadores[i][3], {radius: 16});
					}
				}
			}
		}
	}

	function mostrarCoresLoja(player){
		room.sendAnnouncement("---------------- Cores ----------------", player.id, 0xFFFFFF, "bold", 1);
		room.sendAnnouncement("1 - Cor Ciano\t\t- 199€", player.id, 0x00FDC7, "bold", 0);
		room.sendAnnouncement("2 - Cor Lima\t\t\t- 249€", player.id, 0xEED17, "bold", 0);
		room.sendAnnouncement("3 - Cor Amarelo\t\t- 299€", player.id, 0xFFF000, "bold", 0);
		room.sendAnnouncement("4 - Cor Gold\t\t\t- 349€", player.id, 0xDFC57B, "bold", 0);
		room.sendAnnouncement("5 - Cor Laranja\t\t- 399€", player.id, 0xFE9900, "bold", 0);
		room.sendAnnouncement("6 - Cor Vermelho\t- 449€", player.id, 0xFF0000, "bold", 0);
		room.sendAnnouncement("7 - Cor Roxo\t\t\t- 499€", player.id, 0xCC6CE7, "bold", 0);
        room.sendAnnouncement("8 - Cor Rosa\t\t\t- 549€", player.id, 0xFF00FB, "bold", 0);
	}
	
	function comprarCores(player, opcaoCompra){
		statsJogador = stats.get(player.name);
		if(statsJogador == null){
			return enviarMensagemDiscord(URLs.chat, {content: `⚠️ ERRO CCSEN-${new Error().lineNumber} ⚠️`});
		}
		else{
			switch(opcaoCompra){
				case '1':
					if(statsJogador.dinheiro < 199){
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "italic");
					}
					else{
						statsJogador.dinheiro -= 199;
						statsJogador.inventario.cor = "0x00FDC7";
						statsJogador.inventario.estilo = "bold";
						room.sendAnnouncement(`Compraste a cor ciano com sucesso!`, player.id, 0x00FF00, "italic");
					}
					break;
				case '2':
					if(statsJogador.dinheiro < 249){
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "italic");
					}
					else{
						statsJogador.dinheiro -= 249;
						statsJogador.inventario.cor = "0xEED17";
						statsJogador.inventario.estilo = "bold";
						room.sendAnnouncement(`Compraste a cor lima com sucesso!`, player.id, 0x00FF00, "italic");
					}
				break;
				case '3':
					if(statsJogador.dinheiro < 299){
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "italic");
					}
					else{
						statsJogador.dinheiro -= 299;
						statsJogador.inventario.cor = "0xFFF000";
						statsJogador.inventario.estilo = "bold";
						room.sendAnnouncement(`Compraste a cor amarelo com sucesso!`, player.id, 0x00FF00, "italic");
					}
					break;
				case '4':
					if(statsJogador.dinheiro < 349){
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "italic");
					}
					else{
						statsJogador.dinheiro -= 349;
						statsJogador.inventario.cor = "0xDFC57B";
						statsJogador.inventario.estilo = "bold";
						room.sendAnnouncement(`Compraste a cor gold com sucesso!`, player.id, 0x00FF00, "italic");
					}
					break;
				case '5':
					if(statsJogador.dinheiro < 399){
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "italic");
					}
					else{
						statsJogador.dinheiro -= 399;
						statsJogador.inventario.cor = "0xFE9900";
						statsJogador.inventario.estilo = "bold";
						room.sendAnnouncement(`Compraste a cor laranja com sucesso!`, player.id, 0x00FF00, "italic");
					}
					break;
				case '6':
					if(statsJogador.dinheiro < 449){
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "italic");
					}
					else{
						statsJogador.dinheiro -= 449;
						statsJogador.inventario.cor = "0xFF0000";
						statsJogador.inventario.estilo = "bold";
						room.sendAnnouncement(`Compraste a cor vermelho com sucesso!`, player.id, 0x00FF00, "italic");
					}
					break;
				case '7':
					if(statsJogador.dinheiro < 499){
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "italic");
					}
					else{
						statsJogador.dinheiro -= 499;
						statsJogador.inventario.cor = "0xCC6CE7";
						statsJogador.inventario.estilo = "bold";
						room.sendAnnouncement(`Compraste a cor roxa com sucesso!`, player.id, 0x00FF00, "italic");
					}
					break;
				case '8':
					if(statsJogador.dinheiro < 549){
						room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgDinheiroInsuficiente, player.id, 0xFF0000, "italic");
					}
					else{
						statsJogador.dinheiro -= 549;
						statsJogador.inventario.cor = "0xFF00FB";
						statsJogador.inventario.estilo = "bold";
						room.sendAnnouncement(`Compraste a cor rosa com sucesso!`, player.id, 0x00FF00, "italic");
					}
					break;
				default:
					room.sendAnnouncement(`Opção inválida!`, player.id, 0x00FF00, "italic");
			}
		}
	}
	
	function verificarDinheiros(){
		var dinheiros = [];
		var top10 = [];
		for (const [nome] of stats) {
			dinheiros.push(stats.get(nome).dinheiro);
		}
		var topDinheiros = dinheiros.sort((a,b) => b-a).slice(0,10);
		for (const [nome] of stats) {
			for(var i=0; i < topDinheiros.length;i++){
				if(stats.get(nome).dinheiro == topDinheiros[i]){
					top10[i] = [nome, stats.get(nome).dinheiro];
				}
			}
		}
		console.log(top10);
	}


	function comprarVida(player){
		var players = room.getPlayerList();
		idJogador = encontrarJogadorID(player.id);
		if(Jogadores[idJogador][1] == 0){
			room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgNEstasEmJogo,player.id,0xFFFF00,"normal",1);
		}
		else{
			if(Jogadores[idJogador][1] > 0 && Jogadores[idJogador][1] < 5){
				Jogadores[idJogador][1] += 1;
				for(let i = 1; i < players.length;i++){
					if(stats.get(players[i].name) != null){
						room.sendAnnouncement(`${player.name} ${linguagens[stats.get(players[i].name).linguagem].msgComprouVida}`, players[i].id, 0xFFFF00, "bold", 2);
					}
				}
				return;
			}
			else{
				room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgVidasSuficientes,player.id,0xFFFF00,"normal",1);
			}
		}
	}

	function comprarMaior(player){
		var players = room.getPlayerList();
		idJogador = encontrarJogadorID(player.id);
		estatistica = stats.get(player.name);
		if(Jogadores[idJogador][1] == 0){
			room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgNEstasEmJogo,player.id,0xFFFF00,"normal",1);
		}
		else{
			if(!estatistica.inventario.grande){
				estatistica.inventario.grande = true;
				for(let i = 1; i < players.length;i++){
					if(stats.get(players[i].name) != null){
						room.sendAnnouncement(`${player.name} ${linguagens[stats.get(player.name).linguagem].msgTornouSeMaior}`, players[i].id, 0xFFFF00, "bold", 2);
					}
				}
				return;
			}
			else{
				room.sendAnnouncement(linguagens[stats.get(player.name).linguagem].msgJaTinhaComprado,player.id,0xFFFF00,"normal",1);
			}
		}
	}

	function compararDatasSeg(data1, data2){
		var tempo;
		if(data1.getMinutes() == data2.getMinutes()){
			var segundos = data1.getSeconds() - data2.getSeconds();
			if(data1.getMilliseconds() < data2.getMilliseconds()){
				segundos -= 1;
				for(let i=0;i < 100;i++){
					if(data2.getMilliseconds() == 100){
						var ms = i + data1.getMilliseconds();
					}
				}
			}
			else{
				var ms = data1.getMilliseconds() - data2.getMilliseconds();
			}
			tempo = '' + segundos + '.' + ms;
			tempo = parseFloat(tempo);
			return tempo;
		}
		else{
			for(let i=0;i < 60;i++){
				if(data2.getSeconds() + i == 60){
					var segundos = i + data1.getSeconds();
					if(data1.getMilliseconds() < data2.getMilliseconds()){
						segundos -= 1;
						for(let i=0;i < 100;i++){
							if(data2.getMilliseconds() == 100){
								var ms = i + data1.getMilliseconds();
							}
						}
					}
					else{
						var ms = data1.getMilliseconds() - data2.getMilliseconds();
					}
					tempo = '' + segundos + '.' + ms;
					tempo = parseFloat(tempo);
					return tempo;
				}
			}
		}
	}

	function colocarListaSpam(player){
		if(listaSpam[player.name] == undefined){
			listaSpam[player.name] = {name: player.name, messageDates: [], muted: false, spamInMute: 0};
		}
	}

	function verificacaoEntrada(player){
		var players = room.getPlayerList();
		for (i = 1; i < players.length-1; i++){
			if (player.name == players[i].name){
				room.kickPlayer(player.id, "Já estão a usar esse nickname no servidor.", false);
			}
		}
		for(let i = 1; i < players.length-1;i++){
			if(stats.get(players[i].name) !== undefined){
				var jogador = stats.get(players[i].name);
				if(player.auth !== null && jogador.auth != null){
					if(player.auth == jogador.auth){
						room.kickPlayer(player.id, "Já estás no servidor com outro nome.", false);
					}
				}
			}
		}
		if(stats.get(player.name) !== undefined){
			var jogador = stats.get(player.name);
			if(stats.get(player.name).banido){
				room.kickPlayer(player.id, "Estás banido! Pedidos de desbanimento é no discord: " + linkDiscord, true);
			}
			if(listaBanidos.get(stats.get(player.name).conn)){
				room.kickPlayer(player.id, "Estás banido! Pedidos de desbanimento é no discord: " + linkDiscord, true);
			}
			if(player.auth !== null && jogador.auth != null){
				if(jogador.auth !== player.auth && player.conn !== jogador.conn){
					room.kickPlayer(player.id, "Essa conta não é tua!", false);
				}
			}
		}
	}

	function isInQJogaBets(player){
		for(let i = 0;i < qJogaBets.length;i++){
			if(player.name == qJogaBets[i].name){
				return true;
			}
		}
		return false;
	}

		
	function enviarMensagemDiscord(url, params = {}) {

		const xhr = new XMLHttpRequest();
			
		xhr.open("POST", url);
			
		xhr.setRequestHeader("Content-Type", "application/json");
			
		xhr.send(JSON.stringify(params));
	
	}
