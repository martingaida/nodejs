// An example of using a promise in JS
let a = 1 + 1

const p = new Promise((resolve, reject) => {

    if (a === 2) resolve('Great success!')
    else reject('Failed')
})

p.then((message) => {
    console.log(`Promise resolved: ${message}`)
}).catch((message) => {
    console.log(`Promise not resolved: ${message}`)
})