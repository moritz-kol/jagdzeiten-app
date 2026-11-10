<div align="center">

# 🦌 Jagdzeiten NRW

**Jagdzeiten, Drückjagd-Freigaben und Streckennotizen – direkt auf dem Handy, auch ohne Netz.**

### 👉 [**Zur App: https://moritz-kol.github.io/jagdzeiten-app/**](https://moritz-kol.github.io/jagdzeiten-app/) 👈

<sub>Den Link oben bitte durch die Adresse deiner GitHub-Pages-Seite ersetzen.</sub>

![PWA](https://img.shields.io/badge/PWA-offline%20nutzbar-3b4a2f)
![Land](https://img.shields.io/badge/Jagdzeiten-NRW-f26a1b)
![Hosting](https://img.shields.io/badge/Hosting-GitHub%20Pages-555)

</div>

---

## 📲 Zum Home-Bildschirm hinzufügen

Die App ist eine Web-App (PWA). Einmal installiert, startet sie wie eine normale App und läuft **auch ohne Empfang im Revier**.

> **Wichtig:** Öffne die App zum Installieren einmal **mit Internetverbindung**, damit alle Dateien auf dem Handy gespeichert werden.

### iPhone / iPad (Safari)
1. Link oben in **Safari** öffnen
2. Auf **Teilen** tippen (Quadrat mit Pfeil nach oben)
3. **„Zum Home-Bildschirm“** wählen
4. Namen bestätigen und auf **Hinzufügen** tippen

### Android (Chrome)
1. Link oben in **Chrome** öffnen
2. Oben rechts auf das **Menü ⋮** tippen
3. **„App installieren“** oder **„Zum Startbildschirm hinzufügen“** wählen
4. Mit **Installieren** bestätigen

### Offline-Test
Flugmodus einschalten und die App vom Home-Bildschirm starten. Jagdzeiten, Freigaben und Notizbuch stehen weiterhin zur Verfügung.

### Aktualisieren
Neue Versionen werden automatisch geladen, sobald die App mit Netz geöffnet wird. Die neue Fassung ist nach dem **nächsten Neustart** der App aktiv (App schließen und erneut öffnen).

---

## 🌿 Funktionen

### 🗓️ Jagdzeiten abrufen
- Übersicht aller Wildarten nach **Landesjagdzeitenverordnung NRW**
- Auswahl über Tabs: **Niederwild · Haar**, **Niederwild · Feder** und **Hochwild**
- Pro Wildart alle **Klassen und Geschlechter** (z. B. Hirsche, Alttiere, Kälber, Schmalspießer, Schmaltiere) mit eigener Jagdzeit
- **Tagesaktueller Status:** jede Zeile zeigt, ob das Wild heute *jagbar* ist oder *Schonzeit* hat
- **Jahresbalken** (Januar bis Dezember) auf einen Blick
- **Automatische Sortierung:** jagbares Wild steht oben, Wild in Schonzeit unten und ausgegraut – bei Wildarten und bei Klassen
- Hinweise zu Sonderregelungen, z. B. Schwarzwild, Schongebiete bei Gänsen oder Rebhuhn mit Schonzeit bis 31.12.2027

### 📯 Drückjagd-Modus
Im **Burger-Menü** (oben links) lässt sich der Drückjagd-Modus einschalten.

- **Freigaben bei der Ansprache:** neben jeder Wildart und jeder Klasse erscheint ein Haken. Die Haken an der Überschrift geben die komplette Wildart frei.
- **Tab „Freigegeben“:** zeigt später nur noch das, was für die Jagd freigegeben wurde. Dort sind die Haken ausgeblendet, damit nichts versehentlich abgewählt wird.
- Freigaben bleiben **gespeichert** und sind auch nach dem Schließen der App wieder abrufbar.
- Im Burger-Menü lassen sich alle Freigaben mit einem Tipp **zurücksetzen**.

### 📍 Notizbuch (nur im Drückjagd-Modus)
Ein Plan mit deinem **Stand in der Mitte** und Entfernungsringen bei **50, 100 und 150 m**.

- **Markieren:** Wildart bzw. Klasse aus den Freigaben wählen, Farbe wählen, auf die Stelle im Plan tippen
- **Drei Status-Farben:**
  - 🟢 **Anblick**
  - 🟡 **Anschuss**
  - 🔴 **Tot**
- **GPS-Standort:** mit „Standort abrufen“ wird dein Stand per GPS bestimmt. Jede Markierung erhält daraus errechnete Koordinaten.
- **Norden ausrichten:** Handy flach halten, Oberkante in Blickrichtung, auf „Norden ausrichten“ tippen. Der Plan dreht sich **einmalig** so, dass **N** nach Norden zeigt. Danach bleibt er stehen. „Zurücksetzen“ stellt Norden wieder nach oben.
- **Markierungsliste:** unten lassen sich alle Markierungen anzeigen, nummeriert und mit Uhrzeit. Pro Eintrag gibt es **Koordinaten** (mit Kopieren-Knopf) und einen **Google-Maps-Link**.
- **Rückgängig:** letzte Markierung entfernen oder alle löschen

> Die Koordinaten der Markierungen sind eine **Schätzung** aus Standort und Tippposition im Plan, also nur so genau wie GPS und Tippen. Die Karte in Google Maps braucht Internet, Koordinaten und Liste funktionieren auch offline.

### 🔒 Datenschutz
Alles bleibt **lokal auf deinem Gerät** (Browser-Speicher). Es gibt keine Server, keine Konten und kein Tracking. Nur beim Öffnen eines Google-Maps-Links wird die jeweilige Koordinate an Google übergeben.

---

## ⚠️ Hinweis zu den Jagdzeiten

Die Angaben sind **ohne Gewähr**. Sie wurden aus der Landesjagdzeitenverordnung NRW und weiteren Übersichten zusammengestellt, Rechtslage und Fristen können sich ändern. Bitte vor der Jagd mit der **aktuell gültigen Verordnung** abgleichen. Ebenfalls zu beachten: Abschusspläne, Vorgaben des Reviers, Verbreitungsgebiete von Rot-, Dam- und Sikawild sowie Muttertierschutz und Setzzeiten.

---

## 🛠️ Für Entwickler

### Dateien
| Datei | Zweck |
|---|---|
| `index.html` | komplette App (HTML, CSS, JavaScript und Daten) |
| `manifest.webmanifest` | Name, Farben und Icons für die Installation |
| `sw.js` | Service Worker für die Offline-Nutzung |
| `icon-192.png`, `icon-512.png` | App-Icons |

### Jagdzeiten ändern
Die Daten stehen im Block `D` am Anfang des Skripts in `index.html`. Jede Zeile hat das Format:

```js
["Klasse", "von-bis", "Hinweis (optional)", "Schonzeit bis (optional, JJJJ-MM-TT)"]
```

Beispiel: `["Schmalrehe", "1.5-31.5,1.9-31.1"]`. Mehrere Zeiträume werden durch Komma getrennt, ganzjährig steht als `1.1-31.12`.

### Nach Änderungen
In `sw.js` die Versionsnummer `V` erhöhen (z. B. `jagdzeiten-v12`), damit Handys die neue Fassung aus dem Cache erneuern.

### Veröffentlichen mit GitHub Pages
1. Alle Dateien in ein Repository hochladen
2. **Settings → Pages**, Branch `main` und Ordner `/ (root)` wählen
3. Nach ein bis zwei Minuten ist die App unter `https://<nutzername>.github.io/<repo>/` erreichbar

GPS und Kompass funktionieren nur über **https**, also nicht, wenn `index.html` lokal als Datei geöffnet wird.
