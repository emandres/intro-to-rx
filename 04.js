const Observable = require('rxjs').Observable

let n = 0
function* generator() {
    while(true) {
        // console.log('*')
        yield n++
    }
}

let observable = Observable.from(generator())

observable.take(4).subscribe(item => console.log(item))