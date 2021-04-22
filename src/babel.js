async function start() {
    await Promise.resolve('async is working')
}

start().then(console.log('is working'))

class Util {
    static id = Date.now()
}

console.log('Util id: ', Util.id)
