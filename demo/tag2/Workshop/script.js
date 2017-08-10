var name = "Lena";

function zeigeName(){
		document.getElementById("name").textContent = name;
}

function aendereName(){
		name = prompt("Aendere den Namen!","Gib hier Namen an");
}

function aendereHintergrund(){
	var wahl = document.getElementById("hintergrundWechsler").value
	
	if(wahl === "blumen"){
		document.querySelector("body").style.backgroundImage = "url(bilder/hintergrund/blumen.png)";
		document.querySelector("body").style.backgroundSize = "auto";
	}else if(wahl === "zitronen"){
		document.querySelector("body").style.backgroundImage = "url(bilder/hintergrund/zitronen.png)";
		document.querySelector("body").style.backgroundSize = "auto";
	}else{
		document.querySelector("body").style.backgroundImage = "url(bilder/hintergrund/pink-blau.png)";
		document.querySelector("body").style.backgroundSize = "cover";
	}
}

function schleife(){
	var limit = prompt("Gebe das Limit an", "");
	var summe = 0;
	
	for(var zaehler = 1; zaehler <= limit; zaehler =  zaehler + 1){
		summe = summe + zaehler;
	}
	
	document.getElementById("ergebnis").textContent = summe;

}



function fruechte(){
	var obst = ["apfel", "birne", "banane"]
	
	var wahl = prompt("Wähle ein Obst aus", "Gebe eine Zahl von 0 bis 2 an");
	
	document.getElementById("obstsalat").textContent = obst[wahl];

}
