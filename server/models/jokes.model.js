const mongoose = require('mongoose')


const jokeSchema = new mongoose.Schema({
    setup:{
        type:String,
        required:[true, "You need a setup"],
        minLength:[3,"Your setup must be at least 3 characters"],
        maxLength:[40, "Your setup must be less than 41 characters"]
    },
    punchline:{
        type:String,
        required:[true, "You need a punchline"],
        minLength:[3,"Your punchline must be at least 3 characters"],
        maxLength:[40, "Your punchline must be less than 41 characters"]
    },
}, {timestamps:{createdAt:"created_at", updatedAt:"updated_at"}}
)

const Joke = mongoose.model('Joke',jokeSchema)

module.exports = Joke