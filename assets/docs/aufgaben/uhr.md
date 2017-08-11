# Aufgabe: Uhr

1. Javascript anlegen und verlinken:
    * Lege eine Javascript Datei für die Uhr an.
    * Verlinke diese als skript im head deiner HTML-Seite
        
        ```
        <script src=”...”> </src>
        ```
2. HTML: 
    * Füge ein DIV mit der id “uhr” ein:
        
        ```
        <div id="uhr"></div>
        ```
3. Javascript:
    * Lege eine Funktion zeitanzeigen() an:
    
        ```
        function zeitanzeigen(){
	...
        }
        ```
    * Lege eine neue Variable an und speichere die aktuelle Zeit darin:
        
        ```
        var currentTime = new Date();`
        ```
    * Lege jeweils eine Variable für die Sekunden, Minuten und Stunden an und lies die aktuellen Sekunden, Minuten und Stundne aus dem Datum aus:
    
        ```
        var stunden = currentTime.getHours();
        ```
        
        ```
        var minuten = currentTime.getMinutes();
        ```
        
        ```
        var sekunden = currentTime.getSeconds();
        ```
4. Javascript:
    * Zeige die zeit auf deiner Seite an:
    
        ```
        document.getElementById("uhr").textContent = stunden + ":" + minuten + ":" + sekunden;
        ```
5. Javascript: 
    * Lass deine Uhr ticken: Schreibe über deine Funktion ganz oben in deine Javascriptdatei:
        
        ```
        setInterval("zeitanzeigen()", 1000); 
        ```
        Dieser Ausdruck ruft deine Funktion zeitanzeigen jede Sekunde einmal auf.
6. Javascript:
    * Wenn du führende Nullen also 08 statt nur 8 für Sekunden, Minuten und Stunden anzeigen willst füge für alles drei jeweils folgenden code ein und tausche “sekunden” entsprechend aus:
        
        ```
        if (sekunden < 10) {
        		sekunden= "0" + sekunden;
        }
        ```
7. CSS:
    * Wenn du Lust dazu hast kannst du deine Uhr auch hübscher aussehen lassen indem du in deiner CSS-Datei ein Feld #uhr hinzufügst und reinschreibst was du möchtest:

        ```
        	#uhr{
	...
	     }
	     ```


