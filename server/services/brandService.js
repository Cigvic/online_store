const {brand} = require("../database/database");
const apiError = require("../error/apiError");

class brandService {
    async create(name){
        const brands = await brand.create(name);
        return brands
    }

    async getAll (){
        return await brand.findAll()
    }

    async deleteOne (name) {
        const brands = await brand.destroy({ where: name})
        return brands
    }

}

module.exports = new brandService()