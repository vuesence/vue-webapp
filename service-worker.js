/* eslint-disable no-restricted-globals */
const VERSION = 1.0;
// const HOSTNAME = self.location.hostname;

const nonCached = ["/", "/build.json"];

const CHACHE_LIST = {
  assets: `assets-v${VERSION}`,
  images: `images-v${VERSION}`,
  fonts: `fonts-v${VERSION}`,
};

self.addEventListener("install", () => {
  self.skipWaiting();
  console.log("Service Worker has been installed");
});

self.addEventListener("activate", (event) => {
  const expectedCacheNames = Object.keys(CHACHE_LIST).map((key) => {
    return CHACHE_LIST[key];
  });

  // Delete out of date caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!expectedCacheNames.includes(cacheName)) {
            console.log("Deleting out of date cache:", cacheName);
            return caches.delete(cacheName);
          }
          return null;
        }),
      );
    }),
  );
  console.log("Service Worker has been activated");
});

self.addEventListener("fetch", (event) => {
  // console.log("Fetching:", event.request.url);
  event.respondWith(
    (async function () {
      // console.log(event.request);
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        // console.log("\tCached version found: " + event.request.url);
        return cachedResponse;
      } else {
        console.log(`\tGetting from the Internet:${event.request.url}`);
        return await fetchAndCache(event.request);
      }
    })(),
  );
});

function fetchAndCache(request) {
  return fetch(request)
    .then((response) => {
      // Check if we received a valid response
      if (!response.ok) {
        return response;
      }
      // throw Error(response.statusText);

      const url = new URL(request.url);
      // console.log(url);
      if (
        response.status < 400
        && response.type === "basic"
        && !url.search.includes("mode=nocache")
        && !nonCached.includes(url.pathname)
        && url.protocol !== "chrome-extension:"
      ) {
        const cur_cache = getCache(response);
        if (cur_cache) {
          // console.log("\tCaching the response to", request.url);
          return caches.open(cur_cache).then((cache) => {
            cache.put(request, response.clone());
            return response;
          });
        }
      }
      return response;
    })
    .catch((error) => {
      console.log(`Request failed for: ${request.url}`, error);
      throw error;
    });
}

function getCache(response) {
  const contentType = response.headers.get("content-type");
  if (contentType) {
    if (contentType.includes("image")) {
      return CHACHE_LIST.images;
    } else if (
      ["application/javascript", "text/css", "font/woff2"].includes(contentType)
    ) { return CHACHE_LIST.assets; }
  }
  return false;
}
