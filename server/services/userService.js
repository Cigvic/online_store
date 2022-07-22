const apiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {user, basket} = require('../database/database')

const createJwt = (id, email, role, firstName, lastName, phoneNumber) => {
    return  jwt.sign(
        {id, email, role, firstName, lastName, phoneNumber},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class userService {
    async create(request){
        const {email, password, firstName, lastName, phoneNumber, role} = request
        if (!email || !password){
             throw ('Неправильное имя пользователя или пароль')
        }
        const usernameIsTaken = await  user.findOne({where: {email}})
        if (usernameIsTaken) {
            throw ('Email уже занят')
        }
        const hashPassword = await bcrypt.hash(password,4)
        const userInfo = await user.create({email, password: hashPassword, firstName, lastName, phoneNumber, role})
        const userBasket = await basket.create({userId: userInfo.id})
        const token = createJwt(userInfo.id, userInfo.email, userInfo.role, userInfo.firstName, userInfo.lastName, userInfo.phoneNumber)
        return ({token})
    }

    async login (request){
        const {email, password} = request
        const userInfo = await user.findOne({where: {email}})
        if (!userInfo) {
            throw ('Пользователь с таким именем не найден')
        }
        let userPassword = bcrypt.compareSync(password, userInfo.password)
        if (!userPassword) {
            throw ('Неверный пароль')
        }
        const token = createJwt(userInfo.id, userInfo.email, userInfo.role, userInfo.firstName, userInfo.lastName, userInfo.phoneNumber)
        return ({token})
    }
    async updateJwt (id, email, role, firstName, lastName, phoneNumber) {
        const token = createJwt(id, email, role, firstName, lastName, phoneNumber)
        return ({token})
    }

}

module.exports = new userService ()