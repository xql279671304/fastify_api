const carController = require('../controller/carController')

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars
  },
  {
    method: 'GET',
    url: '/api/car:id',
    handler: carController.getSingleCar
  },
  {
    method: 'POST',
    url: '/api/addCar',
    handler: carController.addCar
  },
  {
    method: 'PUT',
    url: '/api/updateCar:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/deleteCar:id',
    handler: carController.deleteCar
  }
]

module.exports = routes
