# Aufgabe: Geburtstagskalendar

1. HTML:
    * Dieses mal brauchen wir nicht viel HTML. Schreibe eine Überschrift und die tags für eine ungeordnete Liste.
    * In die tags für die Liste kannst du schonmal den Aufruf deiner Funktion schreiben. Diesesmal einfach in script-tags.
2. Javascript Array:
    * Ersteinmal brauchst du Einträge für die Geburtstage die du angezeigt bekommen möchtest. Such dir min 2 Leute die im August Geburtstag haben und Bilder von ihnen.
    * Jetzt kommt das ganze in ein Array. Pro Person willst du aber mehrere Sachen Speichern deswegen benutzt du als Arrayelemente Objekte. Ein solches Objekt sieht dann so aus:

```	
		 {    
				name: Max Mustermann,
		     	month: 8,
		    	date: 1.8.2000,
		    	src: “irgendein Bild”
		  }
```
   

3. Javascript aktuelles Datum:
    * Du brauchst eine neue Variable in der du das aktuelle Datum speicherst. das aktuelle Datum bekommst du über den Aufruf “new Date()”.
4. Javascript Function:
    * Lege eine neue Funktion an. Diese soll jedes Arrayelement anschauen und wenn der Monat des Eintrages der aktuelle Monat ist soll sie eine Ausgabe machen, die wir in 5. behandeln. Den aktuellen Monat kannst du über array[i].month abfragen wenn array dein Arrayname und i der Index deines Arrayelementes ist. Den aktuellen Monat bekommst du über date.getMonth(), wenn date dein Datum ist. 
    * Achtung: Januar ist der Monat 0, Dezember ist 11
5. Ausgabe HTML und Javascript:
    * Unser Ziel ist es, dass von allen Leuten die Geburtstag haben das Bild sowie Name und Geburtsdatum ausgegeben wird. Das ganze soll dann eine Liste sein, in der alle Personen untereinander aufgeführt sind.  
    * Für die Ausgabe verwenden wir “document.write()”. Diese Funktion schreibt das was ihr als Parameter gegeben wird direkt an die Stelle ins html an der sie aufgerufen wird. In unserem Fall also zwischen den Listentags. Am besten schreibst du dir jetzt den HTML-Code auf für das was du am Ende als Ausgabe haben möchtest. Also ein Listenelement das ein Bild sowie einen Paragraphen beinhaltet, in dem Name und  Geburtsdatum der Person steht.
    * Jetzt wird es ein bisschen kompliziert. Schau dir deinen HTML code an und füge vor allen Anführungszeichen ein \ ein. Das brauchst du weil Anführungszeichen in Javascript das Ende oder den Anfang von Strings markieren. Deshalb muss man sie “escapen” das heißt man sagt dem Computer das er sie als Anführungszeichen und nicht als Stringanfang oder Ende Lesen soll.
    * Jetzt musst du alle Informationen die du aus deinem Array bekommst makieren und dein HTML davor und dahinter auseinander ziehen und dort ein Plus einfügen zB so: `<p> + name + + datum +</p>`
    * Als nächstes fügst du vor und hinter alle zusammenhängenden HTML Stücke Anführungszeichen ein. Also sähe unser Beispiel so aus: `“<p>”+ name + ” “ + datum + “</p>”`
    * Als nächstes fügst du statt deinem Bild, name und datum die Elemente aus dem Array ein. auf diese greifst du genauso zu wie auf dem Monat aus dem Array.
6. Jetzt probiere das ganze aus.

**Falls du nicht weiterkommst, kannst du uns gerne fragen oder auf der Demoseite von sciencecampinformatik.github.io/2016 nachschauen.**


