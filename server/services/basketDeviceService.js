const {basketDevice, device} = require("../database/database");
const apiError = require("../error/apiError");
const sequelize = require("sequelize")
const {request} = require("express");
class basketDeviceService {

    async getAll (request){
        const {basketId} = request
        const all = await basketDevice.findAll({
            where: {basketId},
            include: {
                model: device,
            }
        })
        return all
    }

    async add (request) {
        const {deviceId, basketId} = request
        const add = await basketDevice.create({deviceId, basketId})
        return add
    }

    async deleteOne (request) {
        const {basketId, deviceId} = request
        const response = await basketDevice.destroy({where: {deviceId, basketId}})
        return response
    }

    async deleteAll (request) {
        const {basketId} = request
        const response = await basketDevice.destroy({where: {basketId}})
        return response
    }

}

module.exports = new basketDeviceService()