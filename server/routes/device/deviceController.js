const {device} = require("../../database/database");
const uuid = require('uuid')
const path = require('path')
const apiError = require('../../error/apiError')

class deviceController {
    async create(request, result, next){
        try {
            const {name, price, description, typeId, brandId} = request.body
            const {img} = request.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname,'..','..','images',fileName))
            const devices = await device.create({name, price, description, typeId, brandId, img: fileName})
            return result.json(devices)
        } catch (e) {
            next(apiError.badRequest(e.message))
        }

    }

    async getAll (request, result){

    }
    async deleteOne (request, result) {

    }

}

module.exports = new deviceController()