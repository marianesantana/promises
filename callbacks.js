const angular = true
const vue = false

function programming(callback, errorCallback) {
    if(angular) {
        errorCallback({
            name: 'angular,',
            message: ' eww!'
        })

    } else if(vue) {
        errorCallback({
            name: 'vue, ',
            message: 'eww!'
        })
    } else {
        callback({
            name: 'react,',
            message: 'go to do some functional components :)'
        })
    }
}

programming(( message ) => {
    console.log('yess, queen!: ', message)
}, (error) => {
    console.log(error.name + ' '+ error.message)
})