const express = require("express")
const sequelize = require('./src/db/sequelize')


const app = express();
const port = 3000;

sequelize.initDb()

require('./src/routes/findAllPokemons')(app) //raccourci de syntaxe. Evite de créer des modules en plus
require('./src/routes/findPokemonByPk')(app)
require('./src/routes/createPokemon')(app)
require('./src/routes/updatePokemon')(app)
require('./src/routes/deletePokemon')(app)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

