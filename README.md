<div align="center">

# 🦌 Jagdzeiten

**Jagdzeiten, Drückjagd-Freigaben und Streckennotizen – direkt auf dem Handy, auch ohne Netz.**

### 👉 [**Zur App: https://moritz-kol.github.io/jagdzeiten-app/**](https://moritz-kol.github.io/jagdzeiten-app/?v=19) 👈

![PWA](https://img.shields.io/badge/PWA-offline%20nutzbar-3b4a2f)
![Hosting](https://img.shields.io/badge/Hosting-GitHub%20Pages-555)
![Länder](https://img.shields.io/badge/Bundesl%C3%A4nder-BW%20%C2%B7%20BY%20%C2%B7%20NI%20%C2%B7%20NRW%20%C2%B7%20RLP%20%C2%B7%20ST-f26a1b)

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

## 🌿 Funktionen

### 🗓️ Jagdzeiten
- **Bundesland-Auswahl** im Burger-Menü: Angezeigt werden nur die Wildarten und Zeiten des gewählten Landes (Landesjagdgesetz bzw. Landesjagdzeitenverordnung).
- Pro Wildart alle **Klassen und Geschlechter** mit eigener Jagdzeit, z. B. Hirsche, Alttiere, Kälber, Schmalspießer, Schmaltiere.
- **Tagesaktueller Status** je Zeile: *jagbar* oder *Schonzeit*, dazu ein **Jahresbalken** (Januar bis Dezember).
- **Automatische Sortierung:** Jagbares steht oben, Schonzeit unten und ausgegraut, bei Wildarten und bei Klassen.
- Hinweise zu Sonderregelungen direkt an der Zeile, z. B. Elterntierschutz, Schadensabwehr oder Schongebiete.

### 📯 Drückjagd-Modus
Im **Burger-Menü** einschaltbar.

- **Freigaben bei der Ansprache:** Haken neben jeder Klasse, ein Haken an der Überschrift gibt die ganze Wildart frei.
- **Tab „Freigegeben“:** zeigt nur die abgehakten, freigegebenen Wildarten.
- **Notizen:** Neben jeder Wildart und Klasse gibt es einen **Notiz-Knopf** für Einschränkungen.
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
- Optionen die letzte Markierung zu entfernen oder alle zu löschen.

> Die Koordinaten sind eine **Schätzung** aus Standort und Tippposition, also nur so genau wie GPS und Tippen. Die Karte in Google Maps braucht Internet, Koordinaten und Liste funktionieren offline.

---

## 🗺️ Hinterlegte Bundesländer

| Land | Quelle |
|---|---|
| Baden-Württemberg | DVO JWMG § 10, Fassung vom 13.1.2026 (GBl. 2026 Nr. 1) |
| Nordrhein-Westfalen | Landesjagdzeitenverordnung NRW |
| Niedersachsen | DVO-NJagdG, konsolidierte Fassung Stand 6.10.2026 |
| Rheinland-Pfalz | Landesjagdverordnung (LJVO) § 42, Hinweis auf neues Landesjagdgesetz 2025 |
| Bayern | AVBayJG § 19, Übersicht des StMWi Stand 11/2026 |
| Sachsen-Anhalt | Übersicht des LJV Sachsen-Anhalt (JagdZeitV, § 19 LJagdG-DVO), Rehwild-Verordnung des LVwA 2017 |

Die übrigen Bundesländer sind in der Auswahl vorhanden und werden nach und nach ergänzt. Bis dahin erscheint ein Hinweis.

---

## ⚠️ Hinweis zu den Jagdzeiten

Alle Angaben sind **ohne Gewähr**. Rechtslage und Fristen können sich ändern. Bitte vor der Jagd mit der **aktuell gültigen Verordnung** abgleichen. Ebenfalls zu beachten: Abschusspläne, Vorgaben des Reviers, Verbreitungsgebiete, Muttertierschutz und Setzzeiten.

## 🔒 Datenschutz

Alles bleibt **lokal auf deinem Gerät**. Es gibt keine Server, keine Konten und kein Tracking. Nur beim Öffnen eines Google-Maps-Links wird die Koordinate an Google übergeben.

---