const express = require('express');
const router = express.Router();
const passport=require('passport');


const userController=require('../controllers/user_controller');

router.post('/log-in',  passport.authenticate(
    'local',
    { failureRedirect: '/' }
)  ,userController.logIn)

router.get('/profile',passport.checkAuthentication,userController.profile);

router.get('/sign-out',userController.sign_out);


module.exports=router