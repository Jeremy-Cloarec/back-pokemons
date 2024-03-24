const {Pokemon} = require('../db/sequelize'); //On importe le modèle pokemon

//
module.exports = (app) => { 
    app.post('/pokemons', (req, res) => {
        Pokemon.create(req.body) 
        .then(pokemon => {
            const message = `Le pokemon ${req.body.name} a bien été créé`
            res.json({message, data: pokemon})
        })
    })
}