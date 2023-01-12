const express = require('express');
const router = express.Router();
const passport=require('passport');

const leaveController=require('../controllers/leave_controller');

router.get('/long-leave/:sid',passport.checkAuthentication,leaveController.long_leave);
router.post('/apply_longleave/:sid',leaveController.applyll);

router.get('/late-leave/:sid',passport.checkAuthentication,leaveController.late_leave);
router.post('/apply_lateleave/:sid',leaveController.applylateleave);

module.exports=router