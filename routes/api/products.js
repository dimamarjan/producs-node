const express = require('express');
const router = express.Router();
const validators = require('../../middlewares/validators');
const controllers = require('../../controllers');

router
	.get('/', controllers.productsGet)
	.post('/', validators.addProduct, controllers.productsAdd)
	.patch('/', validators.updateProduct, controllers.productsUpdate)
	.delete('/', validators.deleteProduct, controllers.productsDelete);

module.exports = router;
