var list1 = ["Lazy", "Stupid", "Insecure", "Idiotic", "Slimy", "Smelly", "Pompous", "Dicknose", "Pie-Eating", "Racist", "Elitist", "Whitetrash", "Drug-Loving", "Butterface", "Tonedeaf", "Creepy", "Artless", "Bawdy", "Beslubbering", "Bootless", "Churlish", "Cockered", "Clouted", "Craven", "Currish", "Dankish", "Dissembling", "Droning", "Errant", "Fawning", "Fobbing", "Froward", "Frothy", "Gleeking", "Goatish", "Gorbellied", "Impertinent", "Infectious", "Jarring", "Loggerheaded", "Lumpish", "Mammering", "Mangled", "Mewling", "Paunchy", "Pribbling", "Puking", "Puny", "Qualling", "Rank", "Reeky", "Roguish", "Ruttish", "Saucy", "Spleeny", "Spongy", "Surly", "Tottering", "Unmuzzled", "Vain", "Venomed", "Villainous", "Warped", "Wayward", "Weedy", "Yeasty", "Fascist", "Deplorable"];
var list2 = ["Douche", "Ass", "Turd", "Rectum", "Butt", "Cock", "Shit", "Crotch", "Turd", "Prick", "Taint", "Fuck", "Dick", "Boner", "Shart", "Nut", "Sphincter", "Base-Court", "Bat-Fowling", "Beef-Witted", "Beetle-Headed", "Boil-Brained", "Clapper-Clawed", "Clay-Brained", "Common-Kissing", "Crook-Pated", "Dismal-Dreaming", "Dizzy-Eyed", "Doghearted", "Dread-Bolted", "Earth-Vexing", "Elf-Skinned", "Fat-Kidneyed", "Fen-Sucked", "Flap-Mouthed", "Fly-Bitten", "Folly-Fallen", "Fool-Born", "Full-Gorged", "Guts-Griping", "Half-Faced", "Hasty-Witted", "Hedge-Born", "Hell-Hated", "Idle-Headed", "Ill-Breeding", "Ill-Nurtured", "Knotty-Pated", "Milk-Livered", "Motley-Minded", "Onion-Eyed", "Plume-Plucked", "Pottle-Deep", "Pox-Marked", "Reeling-Ripe", "Rough-Hewn", "Rude-Growing", "Rump-Fed", "Shard-Borne", "Sheep-Biting", "Spur-Galled", "Swag-Bellied", "Tardy-Gaited", "Tickle-Brained", "Toad-Spotted", "Unchin-Snouted", "Weather-Bitten"];
var list3 = ["Pilot", "Canoe", "Captain", "Pirate", "Hammer", "Know", "Box", "Jockey", "Nazi", "Waffle", "Goblin", "Blossom", "Biscuit", "Clown", "Socket", "Monster", "Hound", "Dragon", "Balloon", "Apple-John", "Baggage", "Barnacle", "Bladder", "Boar-Pig", "Bugbear", "Bum-Bailey", "Canker-Blossom", "Clack-Dish", "Clotpol", "Coxcomb", "Codpiece", "Death-Token", "Dewberry", "Flap-Dragon", "Flax-Wench", "Flirt-Gill", "Foot-Licker", "Fustilaria", "Giglet", "Gudgeon", "Haggard", "Harpy", "Hedge-Pig", "Horn-Beast", "Hugger-Mugger", "Joithead", "Lewdster", "Lout", "Maggot-Pie", "Malt-Worm", "Mammet", "Measle", "Minnow", "Miscreant", "Moldwarp", "Mumble-News", "Nut-Hook", "Pigeon-Egg", "Pignut", "Puttock", "Pumpion", "Ratsbane", "Scut", "Skainsmate", "Strumpet", "Varlot", "Vassal", "Whey-Face", "Wagtail", "Fascist", "Troglodyte"];
var output = "A"

function insult() {
	var output = "A"
	var rand1 = Math.floor(Math.random() * (list1.length - 1));
	if (list1[rand1][0] === "A" || list1[rand1][0] === "E" || list1[rand1][0] === "I" || list1[rand1][0] === "O" || list1[rand1][0] === "U") {
		output += "n";
	}
	output += " " + list1[rand1] + ", ";

	var rand2 = Math.floor(Math.random() * (list2.length - 1));
	output += list2[rand2] + " ";

	var rand3 = Math.floor(Math.random() * (list3.length - 1));
	output += list3[rand3];

	return (output);
};

function font() {
	var fontSelect = Math.floor(Math.random() * 3);
	switch (fontSelect) {
		case 1:
			return "'Great Vibes', cursive";
			break;
		case 2:
			return "'Berkshire Swash', cursive";
			break;
		case 3:
			return "'Monsieur La Doulaise', cursive";
			break;
		default:
			return "'Ruthie', cursive";
	}
}

function generate() {
	document.getElementById("nothingAtAll").style.fontFamily = font();
	document.getElementById("nothingAtAll").innerHTML = insult();
};