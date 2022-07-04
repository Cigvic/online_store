const {type} = require("../../database/database");


class typeController {
    async create(request, response){
        const {name} = request.body
        if(!name.length)
        {
            return response.json({message: "Нельзя пустое имя типа"})
        }
        try {
            const brands = await type.create({name})
            return response.json(brands)
        } catch (e) {
            return response.json({message: "Тип с таким именем уже существует"})
        }

    }

    async getAll (request, response){
        const brands = await type.findAll()
        return response.json(brands)
    }
    async deleteOne (request, response) {
        const {name} = request.body
        const types = await type.destroy({ where: {
                name: name
            }
        });
        return response.json(types)
    }

}

module.exports = new typeController()