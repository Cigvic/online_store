const apiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {user, basket} = require('../database/database')

const createJwt = (id, email, role) => {
    return  jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class userService {
    async create(request,){
        const {email, password, role} = request
        if (!email || !password){
            return ('Неправильное имя пользователя или пароль')
        }
        const usernameIsTaken = await  user.findOne({where: {email}})
        if (usernameIsTaken) {
            return ('Email уже занят')
        }
        const hashPassword = await bcrypt.hash(password,4)
        const userInfo = await user.create({email, password: hashPassword, role})
        const userBasket = await basket.create({userId: userInfo.id})
        const token = createJwt(userInfo.id, userInfo.email, userInfo.role)
        return ({token})
    }

    async login (request){
        const {email, password} = request
        const userInfo = await user.findOne({where: {email}})
        if (!userInfo) {
            return ('Пользователь с таким именем не найден')
        }
        let userPassword = bcrypt.compareSync(password, userInfo.password)
        if (!userPassword) {
            return ('Неверный пароль')
        }
        const token = createJwt(userInfo.id, userInfo.email, userInfo.role)
        return ({token})
    }
    async updateJwt (id, email, role) {
        const token = createJwt(id, email, role)
        return ({token})
    }

}

module.exports = new userService ()