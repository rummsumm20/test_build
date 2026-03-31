'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fbc9809220c6a40fda98f8e6cc027eeb",
"assets/AssetManifest.bin.json": "72940fce160e49753ebc344466d07bdf",
"assets/assets/audio/lesson1-14.m4a": "7f7981f275c00c622dcbb96b429a23ac",
"assets/assets/audio/Level_1_Part_1_Lesson_1.m4a": "e6eac305e72879c766a7f07da8b11eab",
"assets/assets/audio/Level_1_Part_1_Lesson_2.m4a": "d9568c27031418f254c7ebbfb5e044b0",
"assets/assets/audio/Level_1_Part_1_Lesson_3.m4a": "61a1ceb22cb45c8ede7f60010ee4a624",
"assets/assets/audio/Level_1_Part_1_Lesson_4.m4a": "e043420bc3d3f5b7426c35f93f824c67",
"assets/assets/audio/Level_1_Part_1_Lesson_5.m4a": "2b66aea4e9c56daf950ebce19caef47f",
"assets/assets/audio/Level_1_Part_1_Lesson_6.m4a": "8c344f60db2bad2a8b349d0b032c3e7e",
"assets/assets/audio/Level_1_Part_1_Lesson_7.m4a": "ebc31439e2e020404a6a49371ba2e59f",
"assets/assets/audio/Level_1_Part_1_Lesson_8.m4a": "0ee1e366d7f01cee41563adfe71a4360",
"assets/assets/audio/Level_1_Part_2_Lesson_1.m4a": "ae2a6590b7acc85fcb3cd6cfec0b9f9f",
"assets/assets/audio/Level_1_Part_2_Lesson_2.m4a": "e2ca99f159a7f5969d2b93a29f98fe27",
"assets/assets/audio/Level_1_Part_2_Lesson_3.m4a": "6b6fd1f476ec48be4f40344ba6634498",
"assets/assets/audio/Level_1_Part_2_Lesson_4.m4a": "5948537bcd367bc79a201d6e62eb76c8",
"assets/assets/audio/Level_1_Part_2_Lesson_5.m4a": "ba60f6a43e93ecd2391f359be02be778",
"assets/assets/audio/Level_2_Part_1_Lesson_1.m4a": "7e4d96517641a77ae0f36edaaef0c71e",
"assets/assets/audio/Level_2_Part_1_Lesson_2.m4a": "e763a27c549cbf0cc48c9b0d659e01d5",
"assets/assets/audio/Level_2_Part_1_Lesson_3.m4a": "115cea2702a3dcf69aad18e3dd23dfcd",
"assets/assets/audio/Level_2_Part_1_Lesson_4.m4a": "53b88fad1056c53e102f1502f1620439",
"assets/assets/audio/Level_2_Part_1_Lesson_5.m4a": "3a88190f55454a38e9d1c929654f63aa",
"assets/assets/audio/Level_2_Part_1_Lesson_6.m4a": "ff6bfc0f86d031049817604b2e387559",
"assets/assets/audio/Level_2_Part_1_Lesson_7.m4a": "16262d2605666962cf3b58410bbcb418",
"assets/assets/audio/Level_2_Part_2_Lesson_1.m4a": "59ff1749321c762d1d2e91b58d439b66",
"assets/assets/audio/Level_2_Part_2_Lesson_2.m4a": "a97dc3ad856ecf2c02ae9a2c76ed3d52",
"assets/assets/audio/Level_2_Part_2_Lesson_3.m4a": "eba160615fad3472b3ff5c2cc070724d",
"assets/assets/audio/Level_2_Part_2_Lesson_4.m4a": "17b1c949556b863b31bdd3a22efb5625",
"assets/assets/audio/Level_2_Part_2_Lesson_5.m4a": "857fb35b68f5324445d1fd145d09b91b",
"assets/assets/audio/Level_2_Part_2_Lesson_6.m4a": "3299c22000c89393236297a34df2078e",
"assets/assets/audio/Level_2_Part_2_Lesson_7.m4a": "3860acfc2e22da119fe1a62ea7c7f1b3",
"assets/assets/audio/Level_2_Part_3_Lesson_1.m4a": "89f4745263ce132a1cea195494e7a439",
"assets/assets/audio/Level_2_Part_3_Lesson_2.m4a": "4ad91adb097de97dd6661f8d9ab19ea2",
"assets/assets/audio/Level_2_Part_3_Lesson_3.m4a": "02eb6175d732a39d48faf24a7d500673",
"assets/assets/audio/Level_2_Part_3_Lesson_4.m4a": "d36fd35206df162a6abb2b1922e5de68",
"assets/assets/audio/Level_2_Part_3_Lesson_5.m4a": "a21c1715f391fc463bfca6896c6f17f7",
"assets/assets/audio/Level_2_Part_3_Lesson_6.m4a": "0f0da55f719372ae3811fad7e6c6fc13",
"assets/assets/audio/Level_3_Part_1_Lesson_1.m4a": "5564ab2a21b74bb5d6be8dd74174516f",
"assets/assets/audio/Level_3_Part_1_Lesson_2.m4a": "7ec522ee7930be91ff4aa23b4e74b3b6",
"assets/assets/audio/Level_3_Part_1_Lesson_3.m4a": "544ffe699290d49f40a2318e433392ae",
"assets/assets/audio/Level_3_Part_1_Lesson_4.m4a": "a27e986c39e0a36ce90ea6d3735b27a9",
"assets/assets/audio/Level_3_Part_1_Lesson_5.m4a": "c9ed08c0de700877090ff351e4a34e31",
"assets/assets/audio/Level_3_Part_2_Lesson_1.m4a": "6ff8fccea72799a23062ea0fa842aad7",
"assets/assets/audio/Level_3_Part_2_Lesson_2.m4a": "89ef23ec92ed89ca8bb3cd74df42becb",
"assets/assets/audio/Level_3_Part_2_Lesson_3.m4a": "ac77fe915364677734e511f425251d4c",
"assets/assets/audio/Level_3_Part_2_Lesson_4.m4a": "183d7ccbdcd74a9cd2a026e2ea56b056",
"assets/assets/audio/Level_3_Part_2_Lesson_5.m4a": "5eb942e9f3f92090e827bf982c9b9e35",
"assets/assets/audio/test.mp3": "4f774d08f0c3e66594704d6be4a2d052",
"assets/assets/csv/flashcard.csv": "f2c7f24e7bf39b09b4da801a06345649",
"assets/assets/csv/jumbledsentence_withTranslation.csv": "eb67ad1c9494a7c8172c43bde95df5a3",
"assets/assets/csv/match_column.csv": "b6391e12108927b60815e6d92d6fb1cb",
"assets/assets/csv/match_sentence_wordsSeparated_withTranslation.csv": "2e2d192a397bf984c81877b6e4bc39ad",
"assets/assets/img/Brown.jpg": "3e6149c616dad1e91ad033a09c3c15d9",
"assets/assets/img/cat.jpg": "e501d8cb0fd311af7dad127496514f12",
"assets/assets/img/Daughter%2520in%2520law.jpg": "529bd878fc0b2c6a5db3fbe1df63dbde",
"assets/assets/img/Daughter.jpg": "bc4331b81a0ff743590ab163a489aee6",
"assets/assets/img/dog.jpg": "d64077e5eb3031484b96ac30652d0e48",
"assets/assets/img/Grandfather.jpg": "8e6fc1694c5174338492fb04a6d0f999",
"assets/assets/img/Grandmother.jpg": "937e8add193e49357d73ce7d4fbe2423",
"assets/assets/img/Groom.jpg": "b61515a0127623bcd44f49b0f425ea05",
"assets/assets/img/He.jpg": "c0ea1321161ce028bfd4634fb2ba72e0",
"assets/assets/img/Husband.jpg": "b61515a0127623bcd44f49b0f425ea05",
"assets/assets/img/I.jpg": "4a0f417129414b1012090c51f59becee",
"assets/assets/img/Orange.jpg": "84493d0e68638d1ed11920646aeb9789",
"assets/assets/img/Pink.jpg": "6456390ebfd93cacd8f13c94bde40e28",
"assets/assets/img/Red.jpg": "25f5579cbc8715a5d26520a93eeea748",
"assets/assets/img/She.jpg": "b4a923408c02782ae64f5fb2d2f21bc2",
"assets/assets/img/Son%2520in%2520law.jpg": "054e72c1752cad18ed47129bb67b6826",
"assets/assets/img/Son.jpg": "63ff6620299261f7f44ccf6a198b6cc1",
"assets/assets/img/There.jpg": "2882254042fa0565e56f6e73efec4716",
"assets/assets/img/Violet.jpg": "a34fdfec3a4fbd57f76772d6a68f1899",
"assets/assets/img/White.jpg": "943bfddc9f5dedeff91eaae60fa892a4",
"assets/assets/img_lessons/Black.jpg": "33e40de4d4d29a8683f98e514d9bdc96",
"assets/assets/img_lessons/Blue.jpg": "b8870f319f23492305df16f0bbe66b1a",
"assets/assets/img_lessons/book.jpg": "ba9aa3e7da83d0597789543195f857df",
"assets/assets/img_lessons/Brown.jpg": "3e6149c616dad1e91ad033a09c3c15d9",
"assets/assets/img_lessons/Bye.jpg": "98b691601186fc877635cd8f021fe9f1",
"assets/assets/img_lessons/cat.jpg": "e501d8cb0fd311af7dad127496514f12",
"assets/assets/img_lessons/Daughter%2520in%2520law.jpg": "529bd878fc0b2c6a5db3fbe1df63dbde",
"assets/assets/img_lessons/Daughter.jpg": "bc4331b81a0ff743590ab163a489aee6",
"assets/assets/img_lessons/dog.jpg": "d64077e5eb3031484b96ac30652d0e48",
"assets/assets/img_lessons/Grandfather.jpg": "8e6fc1694c5174338492fb04a6d0f999",
"assets/assets/img_lessons/Grandmother.jpg": "937e8add193e49357d73ce7d4fbe2423",
"assets/assets/img_lessons/Green.jpg": "0820f383abf0259d9afacf09a0e9d5ef",
"assets/assets/img_lessons/He.jpg": "c0ea1321161ce028bfd4634fb2ba72e0",
"assets/assets/img_lessons/Here.jpg": "6f8a2844fce3aa0ae40ad23c01f0140b",
"assets/assets/img_lessons/Hi.jpg": "d1275b25fad57abdb132e152214f031c",
"assets/assets/img_lessons/Husband.jpg": "b61515a0127623bcd44f49b0f425ea05",
"assets/assets/img_lessons/i.jpg": "4a0f417129414b1012090c51f59becee",
"assets/assets/img_lessons/laptop.png": "79e651c055c07f172e64f2af3af0e0a3",
"assets/assets/img_lessons/No.jpg": "65203caa27235421ab286bbb9d3ce544",
"assets/assets/img_lessons/Orange.jpg": "84493d0e68638d1ed11920646aeb9789",
"assets/assets/img_lessons/Parents.jpg": "3f035495140441472401f4c71cdb73cc",
"assets/assets/img_lessons/Pink.jpg": "6456390ebfd93cacd8f13c94bde40e28",
"assets/assets/img_lessons/Please.jpg": "1a67f1cc5f5775f68c8cc1e729173063",
"assets/assets/img_lessons/Red.jpg": "25f5579cbc8715a5d26520a93eeea748",
"assets/assets/img_lessons/Relatives.jpg": "b610cb66f1fce4e126a29f47d09a7621",
"assets/assets/img_lessons/She.jpg": "b4a923408c02782ae64f5fb2d2f21bc2",
"assets/assets/img_lessons/Son%2520in%2520law.jpg": "054e72c1752cad18ed47129bb67b6826",
"assets/assets/img_lessons/Son.jpg": "63ff6620299261f7f44ccf6a198b6cc1",
"assets/assets/img_lessons/Sorry.jpg": "0a6473966e72b0f4e07630ce883f26ef",
"assets/assets/img_lessons/There.jpg": "2882254042fa0565e56f6e73efec4716",
"assets/assets/img_lessons/Violet.jpg": "a34fdfec3a4fbd57f76772d6a68f1899",
"assets/assets/img_lessons/White.jpg": "943bfddc9f5dedeff91eaae60fa892a4",
"assets/assets/img_lessons/Wife.jpg": "ab46c875835ac20cfb314b936cb119e1",
"assets/assets/img_lessons/Yellow.jpg": "6c42ad6a03b5fba7b3617bc9d9f58986",
"assets/assets/img_lessons/Yes.jpg": "b86dce14b3afce4495ff0483c5017de3",
"assets/assets/img_lessons/You.jpg": "2882254042fa0565e56f6e73efec4716",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "b22157b4bb523e8e87381944441df841",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "12d4320c21ef60533d4cc613512d3007",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a6b127425e2ca84ffe34923f422d9e71",
"/": "a6b127425e2ca84ffe34923f422d9e71",
"main.dart.js": "ff25966ea48b70937c2c3da607213cf6",
"manifest.json": "9b4710c3bfc7c7ef128a21f1b52c2a5a",
"version.json": "b07e5ef35f5f6a107228c988f4c8e1f1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
