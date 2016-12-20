// ##########  START Oskarlib

const ow = {
	update: function () {
		var ows = document.querySelectorAll("ow");
		for (var i = 0; i < ows.length; i++) {
			switch (ows[i].getAttribute("type")) {
				case "text":
					ows[i].innerHTML = eval(ows[i].getAttribute("value"));
					break;
				case "loop":
					console.log("ow loop");
					break;
				default:
					console.log("default ow action");
			}
		}
	}
}



// ##########  END Oskarlib

const de_DE = {
	greet: "Mrs. Free erklärt die Welt",
	about: "Über mich",
	astro: "Astrologie",
	coach: "Coaching",
	nutri: "Ernährung",
	coste: "Aufstellungen"
}, en_US = {
	greet: "Mrs. Free explains the world",
	about: "About Me",
	astro: "Astrology",
	coach: "Coaching",
	nutri: "Nutrition",
	coste: "Comstellations"
};

var lang = en_US;
ow.update();

function switchlang() {
	if (lang == de_DE) {
		lang = en_US;
	} else {
		lang = de_DE;
	}
	ow.update();
}
