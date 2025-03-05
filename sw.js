self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("app-cache").then((cache) => {
      return cache.addAll(["/",
      "/index.html",
      "/sw.js", 
      "/Currency converter icon v1.png",
       "/manifest.json",
        "/icon-217x217.png",
        "/Currency-converter v1.html",
        "/Currency-converter v2.html",
        "/Currency-converter icon v2.png",
        "/feedback_form_email.html",
        "/country list v2.js",
        "/country list v2.js",
        "/Colours.png",
        "/bg animation.html",
        "/style for feedback.css",
        "/style animation.css",
        "/style v1.css",
        "/style v2.css",
        "/script v1",
        "/script v2",
        
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});