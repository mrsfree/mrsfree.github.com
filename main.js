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

const langs = {
	de_DE: {
		title: "Deutsch",
		greet: "Mrs. Free erklärt die Welt",
		about: "Über mich",
		astro: "Astrologie",
		coach: "Coaching",
		nutri: "Ernährung",
		coste: "Aufstellungen"
	},
	en_US: {
		title: "English",
		greet: "Mrs. Free explains the world",
		about: "About Me",
		astro: "Astrology",
		coach: "Coaching",
		nutri: "Nutrition",
		coste: "Constellations"
	}
}

if (!localStorage.getItem("lang")) {
	localStorage.setItem("lang", "en_US");
}

var lang = langs[localStorage.getItem("lang")];
ow.update();

function switchlang() {
	if (lang == de_DE) {
		lang = en_US;
	} else {
		lang = de_DE;
	}
	ow.update();
}
