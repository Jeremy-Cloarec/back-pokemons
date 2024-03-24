const { Pokemon } = require('../db/sequelize');

//
module.exports = (app) => {
    app.put('/pokemons/:id', (req, res) => {
        const id = req.params.id
        Pokemon.update(req.body, { //ne renvoie pas de réponse automatiquement
            where: { id: id }
        })
            .then(_ => { // Réponse au client
                Pokemon.findByPk(id).then(pokemon => {
                    const message = `Le pokémon ${pokemon.name} a bien été modifié`
                    res.json({ message, data: pokemon })
                })
            })
    })
}