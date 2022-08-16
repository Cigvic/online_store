const sequelize = require('../dbConnect')
const {DataTypes} = require('sequelize')
const queryInterface = sequelize.getQueryInterface();



const user = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    phoneNumber: {type: DataTypes.STRING},
    role: {type: DataTypes.INTEGER, defaultValue: 1},
})

const device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
})

const type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ratingDevice = sequelize.define('ratingDevice', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const typeBrand = sequelize.define('typeBrand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const basketDevice = sequelize.define('basketDevice', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

user.hasMany(ratingDevice)
ratingDevice.belongsTo(user)

device.hasMany(ratingDevice)
ratingDevice.belongsTo(device)

type.hasMany(device)
device.belongsTo(type)

brand.hasMany(device)
device.belongsTo(brand)

type.belongsToMany(brand, {through: typeBrand })
brand.belongsToMany(type, {through: typeBrand })

user.hasOne(basket)
basket.belongsTo(user)

basket.hasMany(basketDevice)
basketDevice.belongsTo(basket)

device.hasMany(basketDevice)
basketDevice.belongsTo(device)

user.hasMany(order)
order.belongsTo(user)

order.hasMany(basketDevice)
basketDevice.belongsTo(order)

module.exports = {
    user,
    basket,
    basketDevice,
    device,
    type,
    brand,
    ratingDevice,
    typeBrand,
    order
}