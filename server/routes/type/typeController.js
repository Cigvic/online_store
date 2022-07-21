const typeService = require("../../services/typeService");
const apiError = require("../../error/apiError");


class typeController {
    async create(request, response, next){
        try {
            const types = await typeService.create(request.body)
            return response.json(types)
        } catch (e) {
            next(apiError.badRequest(e))
        }

    }

    async getAll (request, response){
        return response.json(await typeService.getAll())
    }

    async deleteOne (request, response,next) {
        try {
            const types = await typeService.deleteOne(request.body)
            return response.json({
                message: "ok"
            })
        } catch (e) {
            next(apiError.badRequest(e))
        }


    }

}

module.exports = new typeController()