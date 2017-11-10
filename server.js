const WebSocket = require('ws')
const si = require('systeminformation')

const server = new WebSocket.Server({ port: 9999 })

server.on('connection', (socket) => {
    let handle = setInterval(() => sendReading(socket), 1000)
    socket.on('close', () => clearInterval(handle))
})

async function sendReading(socket) {
    let mem = await si.mem()
    socket.send(JSON.stringify({ freeMemory: mem.free }))
}