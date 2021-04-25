async function start() {
    await Promise.resolve('async is working')
}

start().then(console.log('is working'))

const unused = 42

class Util {
    static id = Date.now()
}

console.log('Util id: ', Util.id)
console.log(unused)
