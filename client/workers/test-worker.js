import toolbox from "sw-toolbox";
import Stomp from "stompjs";
//import { Store } from "./Store";

let socket = new WebSocket("ws://172.20.10.14:8080/ws-api");

let stompClient = Stomp.over(socket);

stompClient.connect({}, function (frame) {

    console.log("Connected: " + frame);

    stompClient.subscribe("/topic/3", function (greeting) {
        console.log(JSON.parse(greeting.body).content);
    });

    stompClient.send("/app/chat/3", {}, JSON.stringify({
        "name": "Nick"
    }));
});

toolbox.options.debug = true;

toolbox.precache(['/index.html', '/app.bundle.js', '/images/logo.png']);
toolbox.router.any("/(.*)", function(request, values) {
    console.log(request, values)
});

/*
toolbox.router.get(':foo/index.html', function(request, values) {
    return new Response('Handled a request for ' + request.url +
        ', where foo is "' + values.foo + '"');
});
*/

// For requests to other origins, specify the origin as an option
/*
toolbox.router.post('/(.*)', function(request, values) {
    values.sw = true;
    console.log("SW: TRUE", values);
    return new Response(values);
});

toolbox.router.get('/(.*)', function(request, values) {
    values.sw = true;
    console.log("SW: TRUE", values);
    return new Response(values);
});
*/


//
// let CACHE_NAME = 'risingapp-hubs-cache-v1';
// let urlsToCache = [
//     "/",
//     "/app.bundle.js"
// ];
//
// self.addEventListener('install', function(event) {
//     // Perform install steps
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(function(cache) {
//                 console.log('Opened cache');
//                 return cache.addAll(urlsToCache);
//             })
//     );
// });
//
//
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request)
//             .then(function(response) {
//                 // Cache hit - return response
//                 if (response) {
//                     return response;
//                 }
//
//                 // IMPORTANT: Clone the request. A request is a stream and
//                 // can only be consumed once. Since we are consuming this
//                 // once by cache and once by the browser for fetch, we need
//                 // to clone the response.
//                 var fetchRequest = event.request.clone();
//
//                 return fetch(fetchRequest).then(
//                     function(response) {
//                         // Check if we received a valid response
//                         if(!response || response.status !== 200 || response.type !== 'basic') {
//                             return response;
//                         }
//
//                         // IMPORTANT: Clone the response. A response is a stream
//                         // and because we want the browser to consume the response
//                         // as well as the cache consuming the response, we need
//                         // to clone it so we have two streams.
//                         var responseToCache = response.clone();
//
//                         caches.open(CACHE_NAME)
//                             .then(function(cache) {
//                                 cache.put(event.request, responseToCache);
//                             });
//
//                         return response;
//                     }
//                 );
//             })
//     );
// });
