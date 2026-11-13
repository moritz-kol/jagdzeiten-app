// Bei Änderungen an Dateien die Versionsnummer erhöhen, damit der Cache erneuert wird.
const V = "jagdzeiten-v19";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "pako.min.js", "qr.js"];
self.addEventListener("install", e => {
  // jsQR.js ist optional (Kamera-/Bild-Scan auf Geräten ohne eingebaute QR-Erkennung)
  e.waitUntil(caches.open(V).then(c => c.addAll(FILES).then(() => c.add("jsQR.js").catch(() => {}))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => e.request.mode === "navigate" ? caches.match("index.html") : Response.error())));
});
