const {Pokemon} = require('../db/sequelize'); //On importe le modèle pokemon

//
module.exports = (app) => { 
    app.get('/pokemons/:id', (req, res) => {
        Pokemon.findByPk(req.params.id) //plus besoin de convertir en number
        .then(pokemon => {
            const message = 'Un pokemon a bien été trouvé' 
            res.json({message, data: pokemon})
        })
    })
}