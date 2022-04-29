const express = require('express');
const router = express.Router();
const validators = require('../../middlewares/validators');
const controllers = require('../../controllers');

router
	.get('/', controllers.productsGet)
	.post('/', validators.addProduct, controllers.productsAdd)
	.patch('/', validators.updateProduct, controllers.productsUpdate)
	.delete('/', validators.deleteProduct, controllers.productsDelete);

router.get('/task1', controllers.productsGetQueryOne);
router.get('/task2', controllers.productsGetQueryTwo);
router.get('/task3', controllers.productsGetQueryThree);
router.get('/task4', controllers.productsGetQueryFour);

module.exports = router;
