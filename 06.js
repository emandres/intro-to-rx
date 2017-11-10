const {Observable, Subject} = require('rxjs')

let n = 0
function* generator() {
    while(true) {
        yield n++
    }
}

let observable = Observable.from(generator())
let subject = new Subject()

subject.take(4).subscribe(item => console.log(item))

subject
    .take(4)
    .scan((acc, item) => acc + item, 0)
    .subscribe(item => console.log("Running total:", item))

observable.subscribe(subject)
