const WebSocket = require('ws')
const { Subject, Observable } = require('rxjs')

const socket = new WebSocket('ws://localhost:9999')
let subject = new Subject()
socket.on('message', d => subject.next(d))
socket.on('close', () => subject.complete())

let freeMemory = subject.map(JSON.parse).map(x => x.freeMemory)

freeMemory.map(megabytes).subscribe(d => {
    console.log(`${d} MB`)
})

const avg = ({sum, count}, b) => {
    sum = sum + b
    count = count + 1
    let avg = Math.floor(sum / count)
    return { sum, count, avg }
}

freeMemory.windowCount(5, 1)
    .map(o => o.reduce(avg, {sum: 0, count: 0}))
    .mergeAll()
    .subscribe(p => console.log(`Average (5s): ${megabytes(p.avg)} MB`))


function megabytes(d) {
    return Math.floor(d / 1024 / 1024)
}

function average(points) {
    console.log(points)
    let sum = points.reduce((a, c) => a + c, 0)
    return sum / points.length
}
