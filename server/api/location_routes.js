const locationController = require('../controllers/location_controllers');
const express = require('express');
const router = express.Router();

router.post('/register-location', locationController.newLocation);
router.get('/all-locations', locationController.get);

module.exports = router;