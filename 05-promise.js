const { reject } = require("bcrypt/promises")

// A simple promise in JS
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


// Promise land instead of callback hell
const randomNum = () => Math.floor(Math.random() * 100)

const votingMachine1 = new Promise((resolve, reject) => {
    let vote = randomNum()

    if (vote > 50) resolve('Yay')
    else reject('Nay')
})

const votingMachine2 = new Promise((resolve, reject) => {
    let vote = randomNum()
    
    if (vote > 50) resolve('Yay')
    else reject('Nay')
})

const votingMachine3 = new Promise((resolve, reject) => {
    let vote = randomNum()
    
    if (vote > 50) resolve('Yay')
    else reject('Nay')
})

Promise.all([
    votingMachine1,
    votingMachine2,
    votingMachine3
]).then((message) => {
    console.log(`Passed. ${message}!`)
}).catch((error) => {
    console.log(`Did not pass. ${error}!`)
})