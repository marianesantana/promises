const firstRequest = new Promise((resolve, reject) => {
    resolve('Im the first request ')
})

const secondRequest = new Promise((resolve, reject) => {
    resolve(' Im the second request')
})

Promise.all([firstRequest, secondRequest])
    .then(messages => {
        console.log('Success! ' + messages)
})