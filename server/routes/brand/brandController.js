const {brand} = require("../../database/database");
const apiError = require("../../error/apiError")

class brandController {
    async create(request, result){
        const {name} = request.body
        const brands = await brand.create({name})
        return result.json(brands)
    }

    async getAll (request, result){
        const brands = await brand.findAll()
        return result.json(brands)
    }
    async deleteOne (request, result, next) {
        const {name} = request.body
        const brands = await brand.destroy({ where: {
                name: name
            }
        });
        if (!brands) {
            return next(apiError.badRequest(0))
        }
        return result.json({
            "message": 1
        })
    }

}

module.exports = new brandController()