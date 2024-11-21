const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('centrocomercial', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

class datospersonales extends Model {}
datospersonales.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    nombre: DataTypes.STRING,
    apellidopaterno: DataTypes.STRING,
    apellidomaterno: DataTypes.STRING,   
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    contraseña: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'datospersonales',
    timestamps: false,
    freezeTableName: true,
});

class direccion extends Model {}
direccion.init({
    id_dir: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    calle: DataTypes.STRING,
    colonia: DataTypes.STRING,
    municipio: DataTypes.STRING,   
    codigo_postal: DataTypes.STRING,
    num: DataTypes.STRING,
    
}, {
    sequelize,
    modelName: 'direccion',
    timestamps: false,
    freezeTableName: true,
});

class carrera extends Model {}
carrera.init({
    id_car: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    nombre_car: DataTypes.STRING,
    nombre_uni: DataTypes.STRING,
    semestre: DataTypes.STRING,   
    especialidad: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'carrera',
    timestamps: false,
    freezeTableName: true,
});


async function basededatos() {
    await sequelize.authenticate()
        .then(() => {
            console.log('Conectado a la base de datos');
        })
        .catch((error) => {
            console.error('Error al conectar con la base de datos:', error);
        });
}

basededatos();

module.exports = { datospersonales, direccion, carrera  };