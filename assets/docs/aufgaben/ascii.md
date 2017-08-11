# Aufgabe: ASCII Text Generieren
Wir wollen auf der Webseite nun ein Tool schreiben, mit dem wir Text in ASCII Art schreiben können. Das kann zum Beispiel so aussehen:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A6914867EF771308151F7E0A9D9902A47D04DD9568D52EE51BDD844910DBBC06_1502402836571_Screenshot+2017-08-11+00.05.58.png)


Wir haben also einen `**button**` bei dem sich ein `**prompt**` öffnet in welches wir ein Wort einfügen können. Dieses Wort wird dann als ASCII Art angezeigt.

## Vorbereitung:
1. Erstelle eine Funktion `schreibeAsciiArt()` , die ein `prompt` öffnet und die EIngabe in einer Variable `var text` speichert.
2. Füge einen `button` in deine Webseite ein, die die Funktion `schreibeAsciiArt()` aufruft, wenn er geklickt wird.
3. Füge außerdem ein `<pre id=``"``asciiart``"``></pre>` ein.


## ASCII Art Alphabet:

Auf https://sciencecampinformatik.github.io/2017/ findest du eine Datei `alphabet.js`, in der ein `**Object**` ****namens `alphabet` liegt, die ungefähr so aussieht:


    var alphabet = {
      "a" : ["       ",
             "  __ _ ",
             " / _` |",
             "| (_| |",
             " \\__,_|",
             "       "
            ],
      "b" : [" _     ",
             "| |__  ",
             "| '_ \\ ",
             "| |_) |",
             "|_.__/ ",
             "       "
            ],
      "c" : ["      ",
             "  ___ ",
             " / __|",
             "| (__ ",
             " \\___|",
             "      "
            ],
      ...

`**Objects**` sind eine Sammlung von mehreren Elementen und funktionieren ähnlich wie Arrays. 
An einem Beispiel:

    var beispiel_object = {
      "schluessel1" : 1893,
      "schluessel2" : 2346, 
    }

`beispiel_object` ist ein Object, mit zwei Schlüsseln die jeweils für eine Zahl stehen.

- `beispiel_object["schluessel1"]` gibt den Wert `1893` zurück
- `beispiel_object["schluessel2"]` gibt den Wert 2346 zurück

Schauen wir uns nochmal `alphabet.js` genauer an. `alphabet[``"``a``"``]` gibt uns einen Array zurück, welches in ASCII Art ein `a` schreibt. Wir kopieren die komplette Variable `alphabet` in unsere Skript-Datei.

## Implementieren:

Die Grundidee ist: 

1. Lies den Text, der im `prompt` eingegeben wurde
2. Für jeden Buchstaben, lies den ASCII Art Teil vom Buchstaben aus dem `alphabet`
3. Füge alle ASCII Art Teile zusammen
4. Zeige das ASCII Art im `pre` an.

Zunächst brauchst du ein Array, welches nur leere Textzeilen enthält, indem wir unser Ergebnis ASCII Art zusammenbasteln wollen.

    var ascii = ["",
                 "",
                 "",
                 "",
                 "",
                 ""
                ];

Wir wollen nun nacheinander für jeden einzelnen Buchstaben, die ASCII Art Teile zusammenfügen, daher benutzen wir eine Schleife:

      for (var buchstabe = 0; buchstabe < text.length; buchstabe++) {
        ...
      }

**Innerhalb** dieser Schleife wollen wir nun jede Zeile des Buchstabens kopieren und in unserer Ausgabe speichern. 

- Wir können auf den x. Buchstaben in einem Wort `text` zugreifen mit `text.charAt(x)`. 
- Wir erhalten ein Array mit der ASCII Art von einem Buchstaben x mit `alphabet[``"``x``"``]`
- Wir wollen dies in unser Ausgabearray `ascii` speichern.

Dies müssen wir für jede Zeile machen, also 

    for (var zeile = 0; zeile < ascii.length; zeile++) {
      ascii[zeile] = ascii[zeile] + alphabet[text.charAt(buchstabe)][zeile];
    }

Am Ende müssen wir jede Zeile, die in unserem Ergebnis-Array `ascii` steht, ausgeben. Dies wollen wir in unserem `pre` anzeigen lassen. Um innerhalb eines `pre`'s einen Zeilenumbruch zu erzeugen, muss man `\n`  einfügen. Wenn wir also alle Zeilen in `ascii`  anzeigen lassen wollen, nehmen wir wieder eine Schleife für jede Zeile. Wir schreibe jede neue Zeile in das `pre` und fügen eine neue Zeile ein.

      for (var zeile = 0; zeile < ascii.length; zeile++) {
        document.getElementById("asciiart").textContent =
        document.getElementById("asciiart").textContent + ascii[zeile] + "\n";
      }


















## Lösung

Zum Nachschauen und verstehen und für zu Hause:
**HTML**

    <button onclick="schreibeAscii()">Generiere ASCII Text</button>
    <pre id="asciiart"></pre>

**script.js**

    function schreibeAscii() {
      var text = prompt("","Schreibe Text");
      var ascii = ["",
                   "",
                   "",
                   "",
                   "",
                   ""
                  ];
      for (var buchstabe = 0; buchstabe < text.length; buchstabe++) {
        for (var zeile = 0; zeile < ascii.length; zeile++) {
          ascii[zeile] = ascii[zeile] + alphabet[text.charAt(buchstabe)][zeile];
        }
      }
    
      for (var zeile = 0; zeile < ascii.length; zeile++) {
        document.getElementById("asciiart").textContent =
        document.getElementById("asciiart").textContent + ascii[zeile] + "\n";
      }
    }
    

