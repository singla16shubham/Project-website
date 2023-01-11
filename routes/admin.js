const express=require('express');
const router=express.Router();

const adminController=require('../controllers/admin_controller');

router.get('/access',adminController.admin);

module.exports=router;