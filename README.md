<div align="center">

# 🦌 Jagdzeiten

**Jagdzeiten, Drückjagd-Freigaben und Streckennotizen – direkt auf dem Handy, auch ohne Netz.**

### 👉 [**Zur App: https://moritz-kol.github.io/jagdzeiten-app/**](https://moritz-kol.github.io/jagdzeiten-app/?v=17) 👈

![PWA](https://img.shields.io/badge/PWA-offline%20nutzbar-3b4a2f)
![Hosting](https://img.shields.io/badge/Hosting-GitHub%20Pages-555)
![Länder](https://img.shields.io/badge/Bundesl%C3%A4nder-NRW%20%C2%B7%20NI%20%C2%B7%20RLP%20%C2%B7%20BY-f26a1b)

</div>

---

## 📲 Installation

Die App ist eine Web-App (PWA). Einmal zum Home-Bildschirm hinzugefügt, startet sie wie eine normale App und läuft **auch ohne Empfang im Revier**.

> **Wichtig:** Öffne die App zum Installieren einmal **mit Internetverbindung**, damit alle Dateien auf dem Handy gespeichert werden.

| Gerät | Schritte |
|---|---|
| **iPhone / iPad** (Safari) | Link öffnen → **Teilen** → **„Zum Home-Bildschirm“** → **Hinzufügen** |
| **Android** (Chrome) | Link öffnen → **Menü ⋮** → **„App installieren“** bzw. **„Zum Startbildschirm hinzufügen“** |

**Offline-Test:** Flugmodus einschalten und die App vom Home-Bildschirm starten.

**Aktualisieren:** Neue Versionen werden geladen, sobald die App mit Netz geöffnet wird. Aktiv sind sie nach dem **nächsten Neustart** der App (schließen und neu öffnen).

---

## 🌱 Funktionen

### 🗓️ Jagdzeiten
- **Bundesland-Auswahl** im Burger-Menü: Angezeigt werden nur die Wildarten und Zeiten des gewählten Landes (Landesjagdgesetz bzw. Landesjagdzeitenverordnung).
- Drei Tabs: **Niederwild · Haar**, **Niederwild · Feder** und **Schalenwild** (inkl. Rehwild).
- Pro Wildart alle **Klassen und Geschlechter** mit eigener Jagdzeit, z. B. Hirsche, Alttiere, Kälber, Schmalspießer, Schmaltiere.
- **Tagesaktueller Status** je Zeile: *jagbar* oder *Schonzeit*, dazu ein **Jahresbalken** (Januar bis Dezember).
- **Automatische Sortierung:** Jagbares steht oben, Schonzeit unten und ausgegraut, bei Wildarten und bei Klassen.
- Hinweise zu Sonderregelungen direkt an der Zeile, z. B. Elterntierschutz, Schadensabwehr oder Schongebiete.

### 📯 Drückjagd-Modus
Im **Burger-Menü** einschaltbar.

- **Freigaben bei der Ansprache:** Haken neben jeder Klasse, ein Haken an der Überschrift gibt die ganze Wildart frei.
- **Tab „Freigegeben“:** zeigt nur das Freigegebene. Die Haken sind dort ausgeblendet, damit nichts versehentlich abgewählt wird.
- **Notizen:** Neben jeder Wildart und Klasse gibt es einen **Notiz-Knopf** für Einschränkungen, z. B. „Rehböcke nur bis lauscherhoch“.
- Freigaben und Notizen bleiben **gespeichert**. Im Burger-Menü lassen sie sich zurücksetzen.

### 📤 Freigaben teilen (komplett offline)
Der Jagdleiter kann Freigaben samt Notizen vorab eingeben und an die Teilnehmer weitergeben. Beides liegt im **Burger-Menü**.

- **Freigaben teilen:** erzeugt einen **QR-Code** und einen **Text-Code**. Der QR-Code lässt sich als Bild speichern und verschicken.
- **Freigaben importieren:** per **Kamera scannen**, per **Bild wählen** (Screenshot oder Foto) oder per **Text-Code einfügen**.
- Vor dem Übernehmen zeigt die App eine **Vorschau** (Bundesland, Freigaben, Notizen). Übernehmen ersetzt die aktuellen Freigaben und Notizen.
- Nachträgliche Änderungen brauchen einen neuen Code.

> **Hinweis zum Scannen:** Kamera und Bild-Import nutzen die QR-Erkennung des Browsers (Chrome/Android). Fehlt sie, etwa auf dem iPhone, liegt die Datei [`jsQR.js`](https://github.com/cozmo/jsQR) (MIT) im Repository neben `index.html`. Die App lädt sie dann automatisch.
> Der **Text-Code funktioniert immer:** QR-Code mit der Kamera-App (iPhone) oder Google Lens (Android) scannen, den Text kopieren und unter „Freigaben importieren“ einfügen.

### 📍 Notizbuch (im Drückjagd-Modus)
Plan mit dem **Stand in der Mitte** und Ringen bei **50, 100 und 150 m**.

- **Markieren:** Wildart bzw. Klasse aus den Freigaben wählen, Farbe wählen, auf die Stelle im Plan tippen.
  - 🟢 **Anblick** · 🟡 **Anschuss** · 🔴 **Tot**
- **GPS-Standort:** „Standort abrufen“ bestimmt den Stand. Jede Markierung erhält daraus errechnete Koordinaten.
- **Norden ausrichten:** Handy flach halten, Oberkante in Blickrichtung, tippen. Der Plan dreht sich **einmalig** nach Norden und bleibt dann stehen. „Zurücksetzen“ stellt Norden wieder nach oben.
- **Markierungsliste:** nummeriert, mit Uhrzeit, **Koordinaten** (kopierbar) und **Google-Maps-Link**.
- Letzte Markierung entfernen oder alle löschen.

> Die Koordinaten sind eine **Schätzung** aus Standort und Tippposition, also nur so genau wie GPS und Tippen. Die Karte in Google Maps braucht Internet, Koordinaten und Liste funktionieren offline.

---

## 🗺️ Hinterlegte Bundesländer

| Land | Quelle |
|---|---|
| Nordrhein-Westfalen | Landesjagdzeitenverordnung NRW |
| Niedersachsen | DVO-NJagdG, konsolidierte Fassung Stand 6.10.2026 |
| Rheinland-Pfalz | Landesjagdverordnung (LJVO) § 42, Hinweis auf neues Landesjagdgesetz 2025 |
| Bayern | AVBayJG § 19, Übersicht des StMWi Stand 11/2026 |

Die übrigen Bundesländer sind in der Auswahl vorhanden und werden nach und nach ergänzt. Bis dahin erscheint ein Hinweis.

---

## ⚠️ Hinweis zu den Jagdzeiten

Alle Angaben sind **ohne Gewähr**. Rechtslage und Fristen können sich ändern. Bitte vor der Jagd mit der **aktuell gültigen Verordnung** abgleichen. Ebenfalls zu beachten: Abschusspläne, Vorgaben des Reviers, Verbreitungsgebiete, Muttertierschutz und Setzzeiten.

## 🔒 Datenschutz

Alles bleibt **lokal auf deinem Gerät**. Es gibt keine Server, keine Konten und kein Tracking. Nur beim Öffnen eines Google-Maps-Links wird die Koordinate an Google übergeben.

---

## 🛠️ Für Entwickler

### Dateien
| Datei | Zweck |
|---|---|
| `index.html` | komplette App (HTML, CSS, JavaScript und Daten) |
| `manifest.webmanifest` | Name, Farben und Icons für die Installation |
| `sw.js` | Service Worker für die Offline-Nutzung |
| `icon-192.png`, `icon-512.png` | App-Icons |
| `qr.js` | QR-Code-Erzeugung (QRCode for JavaScript, Kazuhiko Arase, MIT) |
| `pako.min.js` | Komprimierung der Freigabe-Codes (pako, MIT) |
| `jsQR.js` | optional: QR-Erkennung für Browser ohne eigene Funktion |

> Dateinamen sind auf GitHub Pages **groß-/kleinschreibungssensitiv**: `qr.js`, `pako.min.js` und `jsQR.js` müssen exakt so heißen.

### Jagdzeiten ergänzen
Die Daten stehen im Objekt `DATA` am Anfang des Skripts in `index.html`, je Bundesland ein Eintrag (`nw`, `ni`, `rp`, `by`). Ein weiteres Land wird als `DATA.xx=[…]` ergänzt, der Hinweistext steht in `NOTES`. Zeilenformat:

```js
["Klasse", "von-bis", "Hinweis (optional)", "Schonzeit bis (optional, JJJJ-MM-TT)"]
```

Beispiel: `["Schmalrehe", "1.5-31.5,1.9-31.1"]`. Mehrere Zeiträume mit Komma trennen, ganzjährig ist `1.1-31.12`.

### Neue Version veröffentlichen
1. In `sw.js` die Versionsnummer `V` erhöhen (z. B. `jagdzeiten-v18`).
2. Im Link oben `?v=` auf dieselbe Zahl setzen, damit beim Testen immer die frische Seite geladen wird.

### GitHub Pages
1. Alle Dateien in ein Repository hochladen.
2. **Settings → Pages**, Branch `main` und Ordner `/ (root)` wählen.
3. Nach ein bis zwei Minuten ist die App unter `https://moritz-kol.github.io/jagdzeiten-app/` erreichbar.

GPS und Kompass funktionieren nur über **https**, nicht beim lokalen Öffnen von `index.html`.
