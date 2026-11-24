const CACHE_NAME = 'mundo-extensiones-editorial-v4';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './avellana.jpeg',
  './avellanalacio.jpeg',
  './blancofantasia.jpeg',
  './caferisadalarga.jpeg',
  './caferizada.jpeg',
  './caferubio.jpeg',
  './cobrisalarga.jpeg',
  './cobrisofantasia.jpeg',
  './cortanegra.jpeg',
  './fantasiaverde.jpeg',
  './japonesa.jpeg',
  './moradonegro.jpeg',
  './negroazul.jpeg',
  './negrodiseno.jpeg',
  './negrodosmil.jpeg',
  './negrosimple.jpeg',
  './rayitoslacio.jpeg',
  './rizadalarga.jpeg',
  './rizadalu.jpeg',
  './roja.jpeg',
  './rojalarga.jpeg',
  './rosacorta.jpeg',
  './rosalargo.jpeg',
  './rubiacorta.jpeg',
  './rubialarga.jpeg',
  './rubiamelena.jpeg',
  './rubiarayitos.jpeg',
  './sarai.jpeg',
  './violeta.jpeg',
  './zoe.jpeg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});