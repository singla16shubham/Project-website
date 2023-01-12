const express=require('express');
const router=express.Router();

const adminController=require('../controllers/admin_controller');

router.get('/access',adminController.admin);
router.get('/:sid/:val',adminController.handleLeave);

module.exports=router;