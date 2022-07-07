const {device} = require("../../database/database");
const uuid = require('uuid')
const path = require('path')
const apiError = require('../../error/apiError')

class deviceController {
    async create(request, response, next){
        try {
            const {name, price, description, typeId, brandId} = request.body
            const {img} = request.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname,'..','..','images',fileName))
            const devices = await device.create({name, price, description, typeId, brandId, img: fileName})
            return response.json(devices)
        } catch (e) {
            next(apiError.badRequest(e.message))
        }

    }

    async getAll (request, response){
        let {typeId, brandId, limit, page} = request.query
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
        return response.json(devices)
    }

    async deleteOne (request, response, next) {

    }

    async getOne (request, response) {
        const {id} = request.params
        const deviceOne = await device.findOne({
        where:{id}
        })
        if (!deviceOne){
           return response.status(404).send({message:'Not found'})
        }

        return response.json(deviceOne)
    }

    async new (request, response) {
        const deviceOne = await device.findAll({ limit: 18, order: [['updatedAt', 'DESC']]});
        return response.json(deviceOne)
    }

}

module.exports = new deviceController()