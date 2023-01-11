const express=require('express');
const router=express.Router();


const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);

router.use('/admin',require('./admin'));

router.use('/Leave',require('./Leave'));
router.use('/user',require('./user'))

module.exports=router

