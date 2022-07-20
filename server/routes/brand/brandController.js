const brandService = require("../../services/brandService")
const apiError = require("../../error/apiError");

class brandController {
    async create(request, response){
        const {name} = request.body
        const brands = await brandService.create({name})
        return response.json(brands)
    }

    async getAll (request, response){
        return response.json(await brandService.getAll())
    }

    async deleteOne (request, response,next) {
        const {name} = request.body
        const brands = await brandService.deleteOne({name})
        if (!brands){
            next(apiError.badRequest("С таким именем не существует"))
        }
        else {
            return response.json({
                message: "ok"
            })
        }

    }

}

module.exports = new brandController()