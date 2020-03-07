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

router.get('/findById/:id', (req, res) => {
  let id = Number(req.params.id)
  database.findById(id).then(function(result){
    res.status(200).send({
        success: 'true',
        message: 'Elements matching id ' + id,
        payload: result
        })
    })
});



module.exports = router;
