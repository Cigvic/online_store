const apiError = require('../../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {user, basket} = require('../../database/database')

const createJwt = (id, email, role) => {
   return  jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class userController {
    async create(request, response,next){
        const {email, password, role} = request.body
        if (!email || !password){
            return next(apiError.badRequest('Неправильное имя пользователя или пароль'))
        }
        const usernameIsTaken = await  user.findOne({where: {email}})
        if (usernameIsTaken) {
            return next(apiError.badRequest(('Email уже занят')))
        }
        const hashPassword = await bcrypt.hash(password,4)
        const userInfo = await user.create({email, password: hashPassword, role})
        const userBasket = await basket.create({userId: userInfo.id})
        const token = createJwt(userInfo.id, userInfo.email, userInfo.role)
        return response.json({token})
    }

    async login (request, response, next){
        const {email, password} = request.body
        const userInfo = await user.findOne({where: {email}})
        if (!userInfo) {
            return next(apiError.internal('Пользователь с таким именем не найден'))
        }
        let userPassword = bcrypt.compareSync(password, userInfo.password)
        if (!userPassword) {
            return next(apiError.internal('Неверный пароль'))
        }
        const token = createJwt(userInfo.id, userInfo.email, userInfo.role)
        return response.json({token})
    }
    async updateJwt (request, response, next) {
        const token = createJwt(request.user.id, request.user.email, request.user.role)
        return response.json({token})
    }

}

module.exports = new userController ()