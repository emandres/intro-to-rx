const Observable = require('rxjs').Observable

let observable = Observable.create(observer => {
    let a = [1, 2, 3, 4]
    for (let i = 0; i < a.length; i++) {
        observer.next(a[i])
    }
    observer.complete()
})

observable.subscribe(item => console.log(item))
observable
    .scan((acc, item) => acc + item, 0)
    .subscribe(item => console.log("Running total:", item))