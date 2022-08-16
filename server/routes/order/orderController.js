const orderService = require("../../services/orderService")
const apiError = require("../../error/apiError");

class brandController {
    async create(request, response){
        const orders = await orderService.create(request.body)
        return response.json(orders)
    }

    async getAll (request, response){
        const all = await orderService.getAll(request.params)
        return response.json(all)
    }

    // async deleteOne (request, response,next) {
    //     try {
    //         const orders = await orderService.deleteOne(request.body)
    //         return response.json({message: "ok"})
    //     } catch (e) {
    //         next(apiError.badRequest(e))
    //     }
    //
    // }

}

module.exports = new brandController()