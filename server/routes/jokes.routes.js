const JokeController = require("../controller/jokes.controller")

const routes = (app) => {

    app.post('/api/jokes', JokeController.create)
    
    // get all
    app.get('/api/jokes', JokeController.getAll)

    // get one
    app.get('/api/jokes/:id', JokeController.getOne)

    //Update
    app.put('/api/jokes/:id', JokeController.update)

    //Destroy
    app.delete('/api/jokes/:id',JokeController.delete)

}


module.exports = routes