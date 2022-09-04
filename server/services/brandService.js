const {brand} = require("../database/database");
const apiError = require("../error/apiError");

class brandService {
    async create(request){
        const {name} = request
        return await brand.create({name});
    }

    async getAll (){
        return await brand.findAll()
    }

    async deleteOne (request) {
        const {name} = request

        const brands = await brand.destroy({ where: {name}})
        if(!brands){
            throw ( "Бренд с таким именем не существует")
        }
        return brands
    }

}

module.exports = new brandService()