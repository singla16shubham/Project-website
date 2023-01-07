const express = require('express');
const router = express.Router();

const userController=require('../controllers/user_controller');

router.post('/log-in',userController.logIn)


module.exports=router