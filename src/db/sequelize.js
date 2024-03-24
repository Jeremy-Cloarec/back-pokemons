//Gérer la connexion à notre bdd et l'exportation des modèles
const { Sequelize, DataTypes } = require('sequelize') //DataType : contient les types de données
//on importe le modèle Pokemon
const PokemonModel = require('../models/pokemon.js')
let pokemons = require('./mock-pokemon.js') // On importe ici la liste des pokemons, puis on s'en sert dans notre point de terminaison un peu plus bas

//On configue une instance de la classe Sequelize
const sequelize = new Sequelize(
    'pokedex-react', //nom de la bdd que l'on veut créer
    'root', //l'identifiant de la bdd
    '', //mdp
    {
        host: 'localhost', //où se trouve la bdd sur notre machine
        dialect: 'mysql', //nom du driver qu'on utilise
        logging: false
    }
)

//On instancie notre modèle : "Je veux que tu crée cette table". A ce moment, la table est créé
const Pokemon = PokemonModel(sequelize, DataTypes);

//Ensuite il faut syncroniser cette demande avec l'état de notre bdd
const initDb = () => {
    return sequelize.sync({ force: true }) //force : supprime les données avant synchronisation. Plutôt en phase de développement
        .then(_ => {
            console.log('La base de donnée Pokedex a bien été synchronisée');
            pokemons.map(pokemon =>
                Pokemon.create({ // On ne passe pas ses identifiants ou sa date de création
                    type1: pokemon.type1,
                    type2: pokemon.type2,
                    name: pokemon.name,
                    sprite: pokemon.sprite,
                    hp: pokemon.hp,
                    speed: pokemon.speed,
                    attack: pokemon.attack,
                    defense: pokemon.defense,
                    sp_attack: pokemon.sp_attack,
                    sp_defense: pokemon.sp_defense,
                    captured: pokemon.captured,
                    evolution_url: pokemon.evolution_url,
                    evolution_chain: pokemon.evolution_chain
                }).then(pokemon => console.log(pokemon.toJSON())) //Traitement asynchrone.toJSON : recommandé pour afficher correctement les instances d'un modèle
            )
        })
}
module.exports = {
    initDb, Pokemon
}