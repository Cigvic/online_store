const userService = require('../../services/userService')
const apiError = require("../../error/apiError");


class userController {
    async create(request, response, next){
        try {
            const token = await userService.create(request.body)
            return response.json(token)
        } catch (e) {
            next(apiError.badRequest(e))
        }



    }

    async login (request, response, next){
        try {
            const token = await userService.login(request.body)
            return response.json(token)
        } catch (e) {
            next(apiError.badRequest(e))
        }

    }
    async updateJwt (request, response, next) {
        const token = await userService.updateJwt(request.user.id, request.user.email, request.user.role, request.user.firstName, request.user.lastName, request.user.phoneNumber)
        return response.json(token)
    }

}

module.exports = new userController ()