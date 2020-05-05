const angular = false
const vue = false

function singlePageApps() {
    return new Promise ((resolve, reject ) => {

        if(angular) {
            reject({
                name: 'angular,',
                message: ' eca!'
            })
    
        } else if(vue) {
            reject({
                name: 'vue, ',
                message: 'eca!'
            })
        } else {
            resolve({
                name: 'react,',
                message: 'go to do some functional components :)'
            })
        }
    })
}

singlePageApps().then(( message ) => {
    console.log('yess, queen!: ', message)
}).catch ((error) => {
    console.log(error.name + ' '+ error.message)
})