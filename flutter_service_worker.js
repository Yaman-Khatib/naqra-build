'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7acccbd19ea9de1c39698e305acadd72",
".git/config": "8a5a437441e574338ece279ba4a8dccf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "40b5267940294ef6010de5a0195ba492",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7141f091d7459e8884b2f5e5b0df4604",
".git/logs/refs/heads/master": "7141f091d7459e8884b2f5e5b0df4604",
".git/logs/refs/remotes/origin/master": "7eeaa60710a7a84c41e7e975dbf351d8",
".git/objects/02/56627bee5c010b050488bb13b4d494d030a00a": "745c57ed7eef585841d49b7870a0cee3",
".git/objects/04/9e233a5ab75fadbc17784e44209ca6e9f9a0be": "8e65d2a3ea9604d27de58377168e8468",
".git/objects/13/1b38ff5e471d07ba63aef4f38e5673d0a3f264": "e8d34d2ec9a4d5d63d031f6c3d7bc30a",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2d/65e4c2951fb72174eecef9c4dca0ba8f49617f": "dd317de95f76c971e03309dc00e54ea7",
".git/objects/33/dd12e8dd57fcfc571fcadca9f291813abadff5": "2d409be2d723be47d52489bfe305954a",
".git/objects/41/3676d342f4aaafae7e311b3069e982555d12eb": "a94d874f26b37e0e9f896257174759ac",
".git/objects/42/708b5a0109ecaa418f6ae0bb79f109ca54beb2": "c572e5b26ee8fecd68d7d69e551b6a4b",
".git/objects/46/9ba69b3886ea2b8bd2382a4bc56a9409d0f9fe": "f16e660c0b7fe6fa16aa0137188485cc",
".git/objects/47/8b148225880f40d7ecbb51115f132b56d5ef25": "db911f257f7c6a20fb701f8a875fc844",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/068d432f75771d64220e77d7198a416275f23f": "ada84bfc36c82446322d082783d50ce3",
".git/objects/50/d817240b56179123657dd8b04eac5921268242": "1f44e6b6d39d93227b0d7402d6f7ee1f",
".git/objects/52/0ab052108fb2ceb53663e9adfd68513e66c7d3": "d995cbf2e561ae5bf8206eba5db3d765",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/56/8d3653e6905fc0f845bb11004f5c514cb238f7": "6427698885ca4e9b42749c366d2926f7",
".git/objects/5a/7ca5ed82a170ca4c2fd2965ca81978a8e114fa": "286ee6d71065972621db698677de0dde",
".git/objects/62/cf9ff7c0a807025e04e664e0d4031cca136297": "239919d0fb516521d752941694a8fcaf",
".git/objects/64/1036886bbd32b09785997d24bcb9865e628b0e": "164d301741cfa0806f6aacf11e2efb72",
".git/objects/65/c392e85d287a19b4cc28f83a46b09d1fecbbb4": "93fa94fbb28bd5aa978f5d63df9cc134",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/a70897a065ac8d0b90eae88e24829a821643a6": "ef0970394d63f9150ed8e64c8cfc01c1",
".git/objects/78/f2f6889e2ea7f6fa2960159007b656bb247d59": "7dfbf7673e21dee1cc05ae4618acaf3f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2dd4d97649a64e65c793c3d9a1217f9862f8ef": "4a6caaea9a660876d3a3b14cde223e20",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/11607d3c99f6b7a5785cc8f2c45947e8fcff22": "966954edc210ad19827ac6b7e5d07e9a",
".git/objects/99/2dbca3866db0b91e23b6d3cf4066f921d26b21": "495e43a653f6042d9918e04a4a765859",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/16e95a2c5afb9328db47d6d0eeb31e21ff3138": "7165162280cb3238caef1ee206cdd809",
".git/objects/a1/2ae7d619c203935e029a3c287f63e27a7a01f7": "bba2c689ecb4392fc324a45b5c7870d2",
".git/objects/a8/c4ff06712b6358e99768583abbddcc9ad47407": "26b2e913c4987662000ed53c3659be47",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/8497a98826d82cecd70635a573a08225540080": "61f1732f9db3b8906bdfec44e8abf188",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/36a5c76a0a3f48248ac1e20d0a23f95a610f25": "7bee943d97cc3b377e376ed2062d99a5",
".git/objects/e2/2f5e4b7cd047444195f0c75fd6b30f6f33a005": "77865e93322a83be97699146a3e972e1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/96177f8088eb1b52bdc667deabd50135e788eb": "533592401cbf767164f4c293cd23239a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/df76d63888f956c24ceab2573ce02d331cc31d": "915661ac08168ac13131d8895ee1279a",
".git/refs/heads/master": "3002eb8dfb8eff0c3e303b5f05c03d04",
".git/refs/remotes/origin/master": "3002eb8dfb8eff0c3e303b5f05c03d04",
"assets/AssetManifest.bin": "941d419f1cb555676b13246b838a7e92",
"assets/AssetManifest.bin.json": "9d0b9585a4857df0bb506dbd2ee50c2d",
"assets/AssetManifest.json": "887390856c716cceef80d7f71900ebf6",
"assets/assets/images/map.jpg": "f898fd18a337b72b2d6a0db48063163c",
"assets/assets/svg/login_vector.svg": "f46bcb36f34155b3de886423c773f407",
"assets/assets/svg/signup_vector.svg": "aecc6141aa4130b660e239035fd5c20c",
"assets/assets/svg/world.svg": "8d4fd55fba5e0f8e3836790d08e853b8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "00a3f81adda0e2e42a8e1efcad1860cc",
"assets/NOTICES": "ef4989cedb80deb0b874c7a7dc8261ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c5ccd4a22cdc73ba3dd7c1e48833bb6b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01e32ffa88b672386c4c9f1547ef8f16",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2416f942a04d6ed2f08b341c7df61ec0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "cbfcab8eb59b8ca39e49d30f5687dfcf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fe7d2fd0ce835181a5ee59d8db5c92e2",
"/": "fe7d2fd0ce835181a5ee59d8db5c92e2",
"main.dart.js": "a551728b0378e394558e66e393d770db",
"manifest.json": "ef71886b957f7d60a620417002c48ad8",
"version.json": "7b897fa55b3196803266e17d6f8980ba"};
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
