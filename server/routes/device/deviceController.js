const {device} = require("../../database/database");
const uuid = require('uuid')
const path = require('path')
const apiError = require('../../error/apiError')
const deviceService = require('../../services/deviceService')

class deviceController {
    async create(request, response, next){
            const devices = await deviceService.create(request.body,request.files)
            return response.json(devices)
    }

    async getAll (request, response){
        const devices = await deviceService.getAll(request.query)
        return response.json(devices)
    }

    async deleteOne (request, response, next) {

    }

    async getOne (request, response) {
        const devices = await deviceService.getOne(request.params)
        return response.json(devices)
    }

    async new (request, response) {
        return response.json(await deviceService.new())
    }

    async rating (request, response){
        const rating = await deviceService.rating(request.body)
        return response.json(rating)
    }

    // getRating
    async getRating (request, response) {
        const rating = await deviceService.getRating(request.body)
        return response.json(rating)
    }
}

module.exports = new deviceController()