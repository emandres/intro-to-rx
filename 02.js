const Observable = require('rxjs').Observable

let n = 0

let observable = Observable.create(observer => {
    console.log('publish')
    for (let i = 0; i < 4; i++) {
        observer.next(n++)
    }
})

observable.subscribe(item => console.log(item))
observable
    .scan((acc, item) => acc + item, 0)
    .subscribe(item => console.log("Running total:", item))