const {device, ratingDevice} = require("../database/database");
const uuid = require('uuid')
const path = require('path')
const sequelize = require('sequelize')
const apiError = require('../error/apiError')

class deviceService {
    async create(body, files){
        try {
            const {name, price, description, typeId, brandId} = body
            const {img} = files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname,'..','images',fileName))
            const devices = await device.create({name, price, description, typeId, brandId, img: fileName})
            return devices
        } catch (e) {
            throw (e)
        }

    }

    async getAll (request){
        let {typeId, brandId, limit, page} = request
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let devices
        if (!typeId && !brandId) {
            devices = await device.findAndCountAll({limit, offset})
        }
        if (!typeId && brandId) {
            devices = await device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (typeId && !brandId) {
            devices = await device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (typeId && brandId) {
            devices = await device.findAndCountAll({where: {brandId, typeId},limit, offset})
        }
        return (devices)
    }

    async deleteOne (request) {
        const {name} = request

        const devices = await device.destroy({ where: {name}})
        if(!devices){
            throw ( "Девайс с таким именем не существует")
        }
        return devices
    }


    async getOne (request) {
        try {
            const {id} = request
            const deviceOne = await device.findOne({
                where:{id}
            })
            return (deviceOne)
        } catch (e) {
            throw (e)
        }

    }

    async new () {
        const deviceOne = await device.findAll({ limit: 18, order: [['updatedAt', 'DESC']]});
        return (deviceOne)
    }

    async rating (request){
        const {deviceId, userId, rate} = request;
        const isRatingSet = await ratingDevice.findOne({where: {deviceId,userId}})
        if (isRatingSet) {
            const updateRating = await ratingDevice.update(
                {rate},
                {where: {deviceId,userId}})
            return updateRating
        }
        const rating = await ratingDevice.create({deviceId,userId,rate})
        return rating
    }

    async getRating (request) {
        const {deviceId} = request;
        const rating = await ratingDevice.findOne({
        where: {deviceId},
        attributes: [[sequelize.fn('AVG', sequelize.col('rate')), 'avgRating']]
        })
        let avgRating = +rating.getDataValue('avgRating')
        avgRating = avgRating.toFixed(2)
        return avgRating
    }


}

module.exports = new deviceService()