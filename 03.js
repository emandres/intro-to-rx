const Observable = require('rxjs').Observable

let n = 0

let observable = Observable.create(observer => {
    while(true) {
        //console.log('*')
        observer.next(n++)
    }
})

observable.take(4).subscribe(item => console.log(item))