const {Model, DataTypes } = require("sequelize")

const sequelize = require("../database")

class  Teams extends Model{}


 Teams.init({
     FristName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      NIN: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Gender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ImagePath: {
        type: DataTypes.STRING,
        allowNull: false
      },
      State: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      LGA: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Residence: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
    }, {
      sequelize, // Pass the sequelize instance
      modelName: 'Users' // Set the model name
    });




module.exports = {Teams};
