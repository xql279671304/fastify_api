const boom = require('boom')

const Car = require('../models/Car')

exports.getCars = async (req, reply) => {
  try {
    const cars = await Car.find()
    return cars
  } catch (err) {
    throw boom.boomify(err)
  }
}


exports.getSingleCar = async (req, reply) => {
  try {
    const id = req.params.id
    const car = await Car.findById(id)
    return car
  } catch (err) {
    throw boom.boomify(err)
  }
}

// 添加
exports.addCar = async (req, reply) => {
  try {
    const car = new Car({...req.body})
    return car.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}


// 更新
exports.updateCar = async (req, reply) => {
  try {
    const id = req.body.id
    const car = await Car.findById(id)
    const { ...updateDate } = car
    const update = await Car.findByIdAndUpdate(id, updateDate, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// delete
exports.deleteCar = async (req, reply) => {
  try {
    const id = req.params.id
    const car = await Car.findByIdAndRemove(id)
    return car
  } catch (err) {
    throw boom.boomify(err)
  }
}