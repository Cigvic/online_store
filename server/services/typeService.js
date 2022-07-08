const {type} = require("../database/database");
const apiError = require("../error/apiError");

class typeService {
    async create(names){
        const {name} = names
        if(!name.length)
        {
            return ({message: "Нельзя пустое имя типа"})
        }
        try {
            const types = await type.create({name})
            return (types)
        } catch (e) {
            return ({message: "Тип с таким именем уже существует"})
        }
    }

    async getAll (){
        return await type.findAll()
    }

    async deleteOne (name) {
        const types = await type.destroy({ where: name})
        return types
    }

}

module.exports = new typeService()