const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('GET route');
})

router.use('/users', require('./user_routes'));
router.use('/locations', require('./location_routes'))
router.use('/attendence', require('./monthly_attendence'))


module.exports = router;





