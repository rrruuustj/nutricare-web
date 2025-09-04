'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "27fb6e76361a4c7108470c384a1b4bac",
".git/config": "0ef18f54d3caf81b2d496768ef647f79",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
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
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e5d58c012c1212043624fa7d78ef3d25",
".git/logs/refs/heads/gh-pages": "90b019eead20e64c2da8b0b82a3c5c7c",
".git/logs/refs/remotes/origin/gh-pages": "43b606dd1e9b094f05fbb2313a9031b2",
".git/objects/05/aa7baa3290a357b63161f01dfe9a8f958956b3": "c7ccb1dace072595f47e8686cf6d632e",
".git/objects/0a/fbe8de59a605c4b8562aea1c743dccee9b47cd": "0bbdfcd89e865af54cc78693ad2110cf",
".git/objects/0e/f3703a995419782958c59606ab689823683a1b": "07ada75a03084e13629579fa8b87944d",
".git/objects/0f/86d403fc6aacde694cfd6439687d727bdfe82a": "b7157681166e04d0905e53c5eba274ce",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/dd18c76009e0a29ebc82b3d8b5ab879ead5904": "09e15b75dd7598e340bd52cdacde5aa8",
".git/objects/2c/6ff5d526be13c0dfcc91fb58dae0e0a80ec0ea": "569b79337ace51e4c5962c6df2762a45",
".git/objects/36/9337d0099251e473992597115c8308160ecbdf": "a98e06b5eab18715e793708950400173",
".git/objects/38/2b22728a6c9d8cc1a86538ef6cdf5c0091b1e5": "2fd9d4fe68a011048561dc9d9e0b88fe",
".git/objects/3d/a053e155dc182c24669e83b550f779fc988909": "adfe42225c86fb08d9d18f64b03c6384",
".git/objects/42/9f5a371f14df2c09bf46aa02d8ff4ad9887060": "029d50b50870195469cfa4037f4c5bec",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/c40617372e108996f4bc00483f66dc0f15c6fd": "43935f17fdaf72c2d965636283f66e6f",
".git/objects/49/707e6b8d8ab2c3dba669b66ddd730ffb310ce8": "60d0388dd50b8c0ef577c9133bfb873c",
".git/objects/4a/614458e8e338776d23d55b6e4fe947cb1fcbae": "087b747c0b466950dc610868a456d602",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/51/e64033e1e9e4a5d7d24313a9219d05deaf4511": "6eb7fc01a7f19cea3981d0d132250158",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/b65122d8f40eb91bf0c03b4aeb6c3ad10aabc9": "4a290a95550ef0b621e207a930220114",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/0c323c8eddc152e333b29b050b93f5543b741b": "06f0b11da55ce38ec4c460d263f30e2d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/1eb44b20c4f3981cf029c69b483b254b6233b8": "59c8b06016cac2c71ef149a3c48c003e",
".git/objects/7f/384816a849d0251064b660e2556ea88e4f6682": "6dd0fe026da1821e90c2486e4c6dfc56",
".git/objects/84/17715ba6052c2086b75ee3ba2dc5a04f7d6d02": "8232da9cfc962b2ab60ebc3fa286d700",
".git/objects/84/a10c9d6b7aadf762d70b93288ad83dddbd9b85": "c711818b6fcb03f9a46cb1f8e0bd61b8",
".git/objects/87/8bb9b19505d6727da546b487bc15fab6e2faae": "2bf8d6d03140d8fd6de804efd5143d80",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/f3608b866192b363f5f4e9f13715cc3e15c243": "9c867cd6ba98ef4c1b0380534a2d6e6d",
".git/objects/96/1f30baf9e3572aaff3a69b9822b32daea96e13": "96056e90816117ef88d2fe095c78e68c",
".git/objects/97/4f83a6b73b3ff206421d09a5db0b896e290cee": "2fbd7c68c9365decaf4cb6e9ca490697",
".git/objects/98/8877fb223b07ee1fafec626159afc092bdb3b2": "3abd5c7de7da065dc69689dcc335b346",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/372ca95157fad4831096b39826f35eb75d2ecd": "66be7eca4b15691f343af8cbde5d84d7",
".git/objects/9e/63d6daa3e7f76e50f31366eb32a5bbc73a4d14": "c023831b3fcca076583e1ce430c42ac3",
".git/objects/ac/02a39a455576f67df24ae86245cbd7140b2fae": "b89db12190e784c717a0fa7cfd3a2f09",
".git/objects/ae/4cf3237b9e189080c5cb44df33aeb16b5b5d9d": "86963e11bcf3ed5484342ebccbe65d6f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c0/af6dab574523bbbc0b17b2680924d94a8c7f0a": "f7581761f446f1e2aac189fe64f6b918",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/e49171ebaffc828f0240b5534fedb6052e9400": "4951159216e64b2d4de1c03abc99549e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e4/06434ed028cd0b94693b99d5ca4ead957e259e": "aa0bc21035910c2dd93b0a0dd4028f12",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/8c62134b42a2a9062ad894deae49f66416b8d4": "5e49d1604b4ce4b605e7cd3288a94d7d",
".git/objects/fb/94c208fb2d72b333e4db0c189c731c00e397c5": "34cbc8ff493a7017ec428677e739671a",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/refs/heads/gh-pages": "a8067916df3d6d036ae967e13827ab9e",
".git/refs/remotes/origin/gh-pages": "a8067916df3d6d036ae967e13827ab9e",
"assets/AssetManifest.bin": "d052be059f525b61d7a545ae34ea45a3",
"assets/AssetManifest.bin.json": "4a2a14291b07120821107d96779deddc",
"assets/AssetManifest.json": "79e093e9a6e339c3914fba7feeabe38b",
"assets/assets/images/bmi_normal.jpg": "0f34fba8bf9d94b08e184550afa468e9",
"assets/assets/images/bmi_normal_2.jpg": "fa9d72349c8de7e0abe64655e80c61cc",
"assets/assets/images/bmi_normal_3.jpg": "1762f45166bad000ef474f0e37964704",
"assets/assets/images/bmi_obese.jpg": "af66a33940b7a8282174007b8163ace6",
"assets/assets/images/bmi_obese_2.jpg": "de0a08afa81b7ae8d84d9a0e0b6e277e",
"assets/assets/images/bmi_over.jpg": "90c07d5e3f5f9400990d0da2cc7b6322",
"assets/assets/images/bmi_under.jpg": "8fd189a5b62281704058ea0abb6fd79d",
"assets/assets/images/bmi_under_2.jpg": "0ee73a430a3c36671a3438f616edda1d",
"assets/assets/images/cat.jpg": "4aeac625ed5cab3e20b704a4497754a4",
"assets/assets/images/cat2.jpeg": "da6820a9e278359579ca2c1dbdcab963",
"assets/assets/images/nutricare%2520(2).png": "83bb47d48e647a1db30b025e0bae248a",
"assets/assets/images/Nutricare.ico": "3234d3b00f361f03c9b7ef2152ce05d0",
"assets/assets/images/nutricare.jpeg": "375829293bb7a26d6e456e1850a1d3a0",
"assets/assets/images/Nutricare.png": "523cd74d079315a5d597d88674c65613",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6dcc50a55382030591c630a5f327f109",
"assets/NOTICES": "df3a6111e950d8dfa10203f589a7c067",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
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
"flutter_bootstrap.js": "5e6fdeed0ae279c02a4f1cccc6fa450e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "82d7e1cf241a84bc142464230f1038e6",
"/": "82d7e1cf241a84bc142464230f1038e6",
"main.dart.js": "3d11cf1152135d976a4d00c682fa5b18",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
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
