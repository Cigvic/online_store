const {order, basketDevice, device} = require("../database/database");
const apiError = require("../error/apiError");
const sequelize = require('sequelize')

class orderService {
    async create(request){
        const {userId} = request
        let orders = await order.create({userId, status:'Оплачен'});
        orders = await basketDevice.update({basketId: null, orderId: orders.id},
            {where: {basketId:userId}})
        return orders
    }

    async getAll (request){
        const {userId} = request
        const all = await order.findAll({
            where: {userId},
            include: {
                model : basketDevice,
                include:{
                    model : device
                }
            }
        })
        // const orders = await basketDevice.findAll({
        //     where: {orderId: all},
        //     include: {
        //         model: device,
        //     }
        // })
        return all
    }

    // async deleteOne (request) {
    //     const {name} = request
    //
    //     const orders = await order.destroy({ where: {name}})
    //     if(!orders){
    //         throw ( "Бренд с таким именем не существует")
    //     }
    //     return orders
    // }

}

module.exports = new orderService()