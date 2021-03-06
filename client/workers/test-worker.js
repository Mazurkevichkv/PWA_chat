import toolbox from "sw-toolbox";
import Stomp from "stompjs";
//import { Store } from "./Store";

let stompClient;

let version = "v1::";
toolbox.options.debug = true;

toolbox.precache(['/', '/login', '/index.html', '/app.bundle.js', '/images/logo.png', 'test-worker.bundle.js']);


function initWS() {
    let socket = new WebSocket("wss://likeit-risingapp.herokuapp.com/ws-api");

    socket.onclose = function(event) {
        if (event.wasClean) {
            console.log('Соединение закрыто чисто');
        } else {
            console.log('Обрыв соединения'); // например, "убит" процесс сервера
        }
        console.log('Код: ' + event.code + ' причина: ' + event.reason);
    };

    return Stomp.over(socket);
}


self.addEventListener("install", function(event) {
    console.log('WORKER: install event in progress.');
    event.waitUntil(function() {
        stompClient = initWS();
        console.log('WORKER: install completed');
    });
});


self.addEventListener("activate", (event) => {

    return event.waitUntil(() => {

        stompClient.connect({}, function (frame) {

            console.log("WS Connected: " + frame);

            stompClient.subscribe("/chat/1", (msg) => {
                console.log(msg);
            });

            /*
            stompClient.send("/chat/1", {}, JSON.stringify({
                time: (new Date()).getMilliseconds(),
                status: "STATUS_CREATED",
                text: "Hello World!",
                attachments: []
            }));
            */

        });

        return self.clients.claim()
    });
});



/*toolbox.router.get("/rest/rooms/(:id)*", function(request, values) {

    console.log("Getting rooms: ", request, values);
    console.log(stompClient);

});*/

toolbox.router.any('/*', toolbox.networkFirst);

toolbox.router.post("/login", function(request, values) {

    console.log("Login: ", request, values);
    console.log(stompClient);

    return Response({
        status: 200,
        body: {

        }
    });
});

/*

toolbox.router.get("/rest/rooms/(:id)/messages*", function(request, values) {

    toolbox.networkFirst(request);

    console.log("Entering room: ", request, values);
    console.log(stompClient);

});

toolbox.router.post("/rest/rooms/(:id)/messages*", (request, values) => {

    console.log("Sending message: ", request, values);
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
