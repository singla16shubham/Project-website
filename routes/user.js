const express = require('express');
const router = express.Router();


const userController=require('../controllers/user_controller');

router.post('/log-in',userController.logIn)

router.get('/profile',userController.profile);

router.get('/sign-out',userController.sign_out);


module.exports=router