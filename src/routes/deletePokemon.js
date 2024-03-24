const { Pokemon } = require('../db/sequelize');
const pokemon = require('../models/pokemon');

//
module.exports = (app) => {
    app.delete('/pokemons/:id', (req, res) => {
        const id = req.params.id
        Pokemon.findByPk(req.params.id).then(pokemon => { //On récupère le pokemon puis on le supprime
            const pokemonDelete = pokemon;
            Pokemon.destroy({
                where: { id: pokemon.id }
            })
                .then(_ => { // Réponse au client

                    const message = `Le pokémon ${pokemon.name} a bien été supprimé`
                    res.json({ message, data: pokemon })
                })
        })
    })
}