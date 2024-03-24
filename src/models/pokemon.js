
module.exports = (sequelize,DataTypes) => {
    return sequelize.define('Pokemon', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        adress: {
            type: DataTypes.STRING
        },
        type2: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        sprite: {
            type: DataTypes.STRING
        },
        hp: {
            type: DataTypes.INTEGER
        },
        speed: {
            type: DataTypes.INTEGER
        },
        attack: {
            type: DataTypes.INTEGER
        },
        defense: {
            type: DataTypes.INTEGER
        },
        sp_attack: {
            type: DataTypes.INTEGER
        },
        sp_defense: {
            type: DataTypes.INTEGER
        },
        captured: {
            type: DataTypes.INTEGER
        },
        evolution_url: {
            type: DataTypes.STRING
        },
        evolution_chain: {
            type: DataTypes.STRING
        }
    }, {
        timestamps:true,
        createdAt: 'created',
        uptdateAt: false
    });
}

