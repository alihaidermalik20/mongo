const mongoose = require('mongoose')


// wait for index.js to connect to mongod mongo daemon that is running on your machine on port 27017 and let me know it's connected
// otherwise catch the error
main().then(() => console.log('CONNECTION OPEN')).catch(err => console.log('the following error has occured: ', err))
async function main() {
    await mongoose.connect('mongodb://localhost:27017/movieApp')
}

// create a schema like in sql that tells the columns and type of data stored in it
// then from the schema, create a model that will be used to make a new instance which can be saved into out mongodb
// creating a new model in js doesn't change anything in mongodb as .save() method has to be called for that

const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
})

const Movie = mongoose.model('Movie', movieSchema)

// amadeus can be accessed in node repl but isn't yet in the db movieApp that we created when we connected. run amadeus.save() in repl
// and you'll be able to find amadeus with db.movies.find() when using movieApp db
const amadeus = new Movie({
    name: 'Amadeus',
    year: 1982,
    rating: 9.2
})
