let a = [1, 2, 3, 4]
let iterator = a[Symbol.iterator]()
let x = iterator.next()
while (!x.done) {
    console.log(x.value)
    x = iterator.next()
}