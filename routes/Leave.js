const express = require('express');
const router = express.Router();

const leaveController=require('../controllers/leave_controller');

router.get('/long-leave',leaveController.long_leave);
router.post('/apply_longleave',leaveController.applyll);

router.get('/late-leave',leaveController.late_leave);
router.post('/apply_lateleave',leaveController.applylateleave);

module.exports=router