const {Pokemon} = require('../db/sequelize'); //On importe le modèle pokemon

//
module.exports = (app) => { //O export dans toute l'application
    app.get('/pokemons', (req, res) => {
        Pokemon.findAll()
        .then(pokemon => {
            const message = 'La liste des pokémons a bien été récupéré' 
            res.json({message, data: pokemon}) //methode de retour fournie par express
        })
    })
}