const mongoose = require('mongoose')


// wait for index.js to connect to mongod mongo daemon that is running on your machine on port 27017 and let me know it's connected
// otherwise catch the error
main().then(() => console.log('CONNECTION OPEN')).catch(err => console.log('the following error has occured: ', err))
async function main() {
    await mongoose.connect('mongodb://localhost:27017/movieApp')
}
