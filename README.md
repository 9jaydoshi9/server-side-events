# Server Side Events with Node.js

A basic example of [Server Side Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) with [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource), to receive events from server without requesting every time.

## Getting Started

### Install Dependencies
```
npm i
```

### Run Server
```
node index.js
```
This will start the server at localhost:3000

### Open index.html in browser.

* Go to http://localhost:3000/ to see if server has started successfully.
* Go to http://localhost:3000/status to check connected connections.
* Use http://localhost:3000/send/post?post=PostByDJ to send event to client browser. Replace "PostByDJ" with anything you want to send.

## Outcome

When you use */send/post?post=text* , to send event to clients , all connected clients will receive the event and data will be added to the list on the browser's DOM.
