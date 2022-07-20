const {type} = require("../../database/database");
const typeService = require("../../services/typeService");
const apiError = require("../../error/apiError");


class typeController {
    async create(request, response){
        const {name} = request.body
        const types = await typeService.create({name})
        return response.json(types)
    }

    async getAll (request, response){
        return response.json(await typeService.getAll())
    }

    async deleteOne (request, response,next) {
        const {name} = request.body
        const types = await typeService.deleteOne({name})
        if (!types){
            next(apiError.badRequest("С таким именем не существует"))
        }
        else {
            return response.json({
                message: "ok"
            })
        }

    }

}

module.exports = new typeController()