const express = require('express')
const router = express.Router();
const {getusers,getuser,adduser,deleteuser} =  require('../controller/controller');

router.get('/getusers',getusers)

router.get('/getuser/:id',getuser)

router.post('/adduser',adduser)

router.delete('/deleteuser/:id',deleteuser)
    
module.exports = router