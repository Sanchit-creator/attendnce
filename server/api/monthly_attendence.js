const attendenceController = require('../controllers/attendence_controller');
const express = require('express');
const router = express.Router();


router.post('/create', attendenceController.create);
router.get('/monthly-attendence/:fromDate/:toDate/:locationId', attendenceController.date);

module.exports = router;




