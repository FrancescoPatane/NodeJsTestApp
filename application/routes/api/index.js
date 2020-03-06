var router = require('express').Router();
const database = require('./../../db');


router.get('/findAll', (req, res) => {
  database.findAll().then(function(result){
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        payload: result
        })
    })
});



module.exports = router;
