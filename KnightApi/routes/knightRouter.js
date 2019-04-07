let express = require('express');

let Knight = require('.././models/knightSchema')

let knightController = require('../controllers/knightController')(Knight);

let knightRouter = express.Router();

knightRouter.route('')
    .get(knightController.get)
    .post(knightController.add)
    
knightRouter.route('/:id')
    .get(knightController.getById)
    .put(knightController.update)
    .delete(knightController.del)

    module.exports = knightRouter