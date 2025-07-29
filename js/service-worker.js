self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const preloadResponse = await event.preloadResponse;

      if (preloadResponse) {
        return preloadResponse;
      }

      return fetch(event.request);
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration.navigationPreload.enable());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration.navigationPreload.disable());
});
