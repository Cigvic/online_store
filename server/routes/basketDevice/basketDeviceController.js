const basketDeviceService = require('../../services/basketDeviceService')

class basketDeviceController {

    async getAll (request, response){
        const all = await basketDeviceService.getAll(request.params)
        return response.json(all)
    }

    async add (request, response){
        const add = await basketDeviceService.add(request.body)
        return response.json(add)
    }

    async deleteOne (request, response){
        const deleteOne = await basketDeviceService.deleteOne(request.query)
        return response.json(deleteOne)
    }

    async deleteAll (request, response){
        const deleteAll = await basketDeviceService.deleteAll(request.query)
        return response.json(deleteAll)
    }

}

module.exports = new basketDeviceController()