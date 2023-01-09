const express = require('express');
const router = express.Router();
const passport=require('passport');

const leaveController=require('../controllers/leave_controller');

router.get('/long-leave',passport.checkAuthentication,leaveController.long_leave);
router.post('/apply_longleave',leaveController.applyll);

router.get('/late-leave',passport.checkAuthentication,leaveController.late_leave);
router.post('/apply_lateleave',leaveController.applylateleave);

module.exports=router