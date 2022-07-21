const {type} = require("../database/database");
const {request} = require("express");

class typeService {
    async create(request){
        const {name} = request
        if(!name.length)
        {
            throw ("Нельзя пустое имя типа")
        }
        try {
            const types = await type.create({name})
            return (types)
        } catch (e) {
            throw ( "Тип с таким именем уже существует")
        }
    }

    async getAll (){
        return await type.findAll()
    }

    async deleteOne (request) {
        const {name} = request

        const types = await type.destroy({ where: {name}})
        if(!types){
            throw ( "Тип с таким именем не существует")
        }
        return types



    }

}

module.exports = new typeService()