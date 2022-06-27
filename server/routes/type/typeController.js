const {type} = require("../../database/database");


class typeController {
    async create(request, result){
        const {name} = request.body
        const brands = await type.create({name})
        return result.json(brands)
    }

    async getAll (request, result){
        const brands = await type.findAll()
        return result.json(brands)
    }
    async deleteOne (request, result) {
        const {name} = request.body
        const types = await type.destroy({ where: {
                name: name
            }
        });
        return result.json(types)
    }

}

module.exports = new typeController()