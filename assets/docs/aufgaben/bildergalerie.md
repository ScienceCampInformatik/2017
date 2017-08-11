# Aufgabe: Bilder Galerie

1. Html-Wiederholung:	
    * Füge zwei Buttons auf deiner Internetseite hinzu einen um weiter zu schalten und einen um zurück zu schalten.
        
        ```
        <button>...</button>
        ```
    * Füge auf deiner Internetseite ein Bild ein und gibt diesem Element eine id.
        
        ```
        <img id =”bild” src = “...” />
        ```
2. Javascript Bilder für die Galerie:
    * Für eine Bildergalerie brauchst du natürlich auch Bilder suche dir mindestens 3 Stück heraus.
    * Erstelle ein Array mit den Links zu den Bildern als Elemente.
        
        ```
        var bilder = [“...”, “...”, “...”];
        ```
        Wobei ihr in den Anführungszeichen immer den Pfad zu eurem Bild braucht. Setze das Bild, das bereits in HTML eingebunden ist, zusätzlich als erstes Element in das Array.
3. Javascript Variablen:
    * Füge eine Variable hinzu die den Index des aktuell angezeigten Bildes enthält. Der Index ist die Position an der euer Bild im Array steht.
        
        ```
        var indexaktuell = 0;
        ```
    * Füge eine Variable hinzu, die den größten Index in deinem Array enthält. Das entspricht der Länge des Arrays minus 1.

        ```
        var max = bilder.length -1;
        ```
4. Javascript Funktion `next`:
    * Erstelle eine Funktion next. 
        
        ```
        function next(){}
        ```
    * Diese Funktion soll beim Aufruf das nächste Bild in der Galerie anzeigen. Also den Index des momentan angezeigten Bildes um eins erhöhen. Und dieses dann auch anzeigen

        ```
        function next(){
        	indexaktuell = indexaktuell + 1;
        	document.getElementById(“bild”).src = bilder[indexaktuell];
        }
        ```
    * Achtung: Beachte den Fall wenn der Index des angezeigten Bildes größer werden würde als der maximale Index deines Arrays. Um diesen Fall zu beachten benutzt du eine if-Abfrage:

        ```
        function next(){
        	if(indexaktuell = = max){
        		indexaktuell = 0;
        	}else{
        		indexaktuell = indexaktuell + 1;
        	}
        	document.getElementById(“bild”).src = bilder[indexaktuell];
        }
        ```
    * Diese Funktion soll beim click auf den Button zum weiterschalten in der Galerie aufgerufen werden 
        * fügt in den Tag eures Button, der weiter schalten soll,
`<button onclick=”next()”>` hinzu. 

5. Javascript Funktion previous:
    * Diese Funktion ist sehr ähnlich zu next. Versuche das mal alleine. 


