const {brand} = require("../../database/database");


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
    async deleteOne (request, result) {
        const {name} = request.body
        await brand.destroy({ where: {
                name: name
            }
        });
        return result.json(brand)
    }

}

module.exports = new brandController()