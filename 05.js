const Observable = require('rxjs').Observable

let n = 0
function* generator() {
    while(true) {
        yield n++
    }
}

let observable = Observable.from(generator())

observable.take(4).subscribe(item => console.log(item))

observable
    .scan((acc, item) => acc + item, 0)
    .subscribe(item => console.log("Running total:", item))