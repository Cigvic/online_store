const brandService = require("../../services/brandService")
const apiError = require("../../error/apiError");

class brandController {
    async create(request, response){
        const brands = await brandService.create(request.body)
        return response.json(brands)
    }

    async getAll (request, response){
        return response.json(await brandService.getAll())
    }

    async deleteOne (request, response,next) {
        try {
            const types = await brandService.deleteOne(request.body)
            return response.json({message: "ok"})
        } catch (e) {
            next(apiError.badRequest(e))
        }

    }

}

module.exports = new brandController()