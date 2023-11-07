import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let connections = [];

/**
 * Connect to server for events
 */
app.get('/', (req, res) => {
  res.send({ status: true, message: 'Server Started, send event with http://localhost:3000/send/post?post=MyPost'})
});

/**
 * Connect to server for events
 */
app.get('/events', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  connections.push(res);

  req.on('close', () => {
    connections = connections.filter(conn => conn !== res);
  });
});

/**
 * For simplicity using get ; to send new data to the client connections
 */
app.get('/send/post', (req, res) => {
  const post = req.query.post || 'Default Post';
  console.log(`Sending ${post}, to all connections.`);
  connections.forEach(conn => {
    conn.write(`data: ${post}\n\n`);
  });
  res.status(200).send();
});

/**
 * Get the number of connected clients
 */
app.get('/status', (req, res) => {
  res.json({ connections: connections.length });
});

app.listen(3000, () => {
  console.log('Server started on port 3000, http://localhost:3000');
});
