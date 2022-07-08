const {brand} = require("../../database/database");
const apiError = require("../../error/apiError")

class brandController {
    async create(request, response){
        const {name} = request.body
        const brands = await brand.create({name})
        return response.json(brands)
    }

    async getAll (request, response){
        const brands = await brand.findAll()
        return response.json(brands)
    }
    async deleteOne (request, response, next) {
        const {name} = request.body
        const brands = await brand.destroy({ where: {
                name: name
            }
        });
        if (!brands) {
            return next(apiError.badRequest(0))
        }
        return response.json({
            "message": 1
        })
    }

}

module.exports = new brandController()