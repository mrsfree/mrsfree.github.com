// ##########  START Oskarlib

const ow = {
	update: function(bound) {
		var ows = bound.querySelectorAll("ow[type=\"text\"]");
		for (var i = 0; i < ows.length; i++) {
			ows[i].innerHTML = eval(ows[i].getAttribute("value"));
		}
	},
	expandloops: function(bound) {											//Die Idee war gut, aber ihre Arme waren zu kurz.
		var ows = bound.querySelectorAll("ow[type=\"loop\"]");				//Das hier funktioniert aus 2 Gründen nicht:
		for (var i = 0; i < ows.length; i++) {								//Es fügt die falschen indizes an den Falschen Stellen ein
			var template = ows[i].innerHTML;								//Es kann nur Klartext und nicht Attribute ersetzen.
			ows[i].innerHTML = "";											//Was muss passieren?
			var arrname = ows[i].getAttribute("value");						//"template" muss in jeder iteration mit RegEx alle Occurences
			var arr = eval(arrname);										//eines Identifiers mit dem aktuellen Index oder so ersetzen
																			//evtl sollte man noch mit "for in" Objekte statt Arrays unterstützen
			for (var i = 0; i < arr.length; i++) {
				ows[i].innerHTML += template;
			}

			var owsinloop = ows[i].querySelectorAll("ow[value^=\".\"]");
			for (i = 0; i < owsinloop.length; i++) {
				var valofow = owsinloop[i].getAttribute("value");
				if (valofow[valofow.length - 1] != ".") {
					owsinloop[i].setAttribute("value", arrname + "[" + i + "]" valofow);
				}
			}
		}
	},
	version: "0.1"
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

var texts = langs[localStorage.getItem("lang")];
ow.update(document);

function switchlang() {
	if (texts == langs.de_DE) {
		texts = langs.en_US;
	} else {
		texts = langs.de_DE;
	}
	ow.update(document);
}
