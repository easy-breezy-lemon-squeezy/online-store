const { Basket, BasketDevice } = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
	async create(req, res) {
		const { name } = req.body
		console.log(req.user)
		//"basketId": null,
		//"deviceId": null
		const basketDevice = await BasketDevice.create({ basketId: 1, deviceId: 2 })
		return res.json(basketDevice)
	}

	async getAll(req, res) {
		const basketDevices = await BasketDevice.findAll()
		return res.json(basketDevices)
	}
}

module.exports = new BasketController()
