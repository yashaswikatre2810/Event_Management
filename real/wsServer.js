const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log('Client connected');
    ws.on('message', message => {
        console.log(`Received message: ${message}`);
    });
    ws.send('Welcome to the leaderboard updates');
});

// Function to broadcast updates
function broadcastLeaderboardUpdate() {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'LEADERBOARD_UPDATE' }));
        }
    });
}

module.exports = { broadcastLeaderboardUpdate };
