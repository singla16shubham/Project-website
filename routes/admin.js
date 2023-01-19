const express=require('express');
const router=express.Router();

const adminController=require('../controllers/admin_controller');

router.get('/access',adminController.admin);
router.get('/getlongleave',adminController.longleave);
router.get('/getlateleave',adminController.lateleave);
router.get('/longleave/:sid/:val',adminController.handleLongleave);
router.get('/lateleave/:sid/:val',adminController.handleLateleave);

module.exports=router;