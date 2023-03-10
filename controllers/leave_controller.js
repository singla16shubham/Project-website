const data=require("../nodejsEXCELlinker");
const User=require('../models/user')

module.exports.long_leave=function(req,res){    
    User.find({sid:req.params.sid},function(err,user){
        if(err){
            console.log('Error in fetching list from db');
            return res.redirect('back');
        }
        if(user[0]['longleave_applied']){
            req.flash("error","Already applied for long leave"); 
            return res.redirect('/user/profile'); 
        }
        if(user[0]['to_show_long']){ //case where the leave was rejected
            req.flash("error","You are on cooldown for long leave application"); 
            return res.redirect('/user/profile');
        } else{
            return res.render('long_leave',{
                title: 'long_leave'
            }); 
        }
    } 
    )      
}

module.exports.late_leave=function(req,res){    
    User.find({sid:req.params.sid},function(err,user){
        if(err){
            console.log('Error in fetching list from db');
            return res.redirect('back');
        }
        var str1= new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"});
        var str2="12:00";
        if(str1>str2){
            req.flash("error","Leave can be applied before 11:59 am"); 
            return res.redirect('/user/profile');
        }
        if(user[0]['lateleave_applied']){
            req.flash("error","Already applied for late leave"); 
            return res.redirect('/user/profile');
        } 
        if(user[0]['lateleaves_month']>2){ //reset late leaves after month
            req.flash("error","Monthly limit of late leaves (3) already reached"); 
            return res.redirect('/user/profile');
        } 
        if(user[0]['lateleaves_sem']>5){  //reset late leaves after semester
            req.flash("error","Semester limit of late leaves (6) already reached"); 
            return res.redirect('/user/profile');
        }
        if(user[0]['to_show_late']){
            req.flash("error","You are on cooldown for late leave application"); 
            return res.redirect('/user/profile');
        } else{
            return res.render('late_leave',{
                title: 'late_leave'
            })
        }
    })
}

module.exports.applyll=function(req,res){
    console.log(req.body);

        User.findOneAndUpdate({sid: req.params.sid } , {
            start_date: req.body.start_date , 
            end_date: req.body.end_date ,
            longleave_reason: req.body.reason,
            longleave_address: req.body.visiting_address,
            phone_number_temp: req.body.number,
            guardian_phone_number_long: req.body.parent_number,
            room_number: req.body.room_number,
            longleave_applied: true, 
            longleave_approved: false, 
            to_show_long: true }, 
            function (err, docs) {
            if(err){
                console.log(err);
                return res.redirect('back');
            }
            else{
                req.flash("success","Leave Applied successfully");
                console.log("applied for late leave");
                return res.redirect('/user/profile');
            }          
        });   
}

module.exports.applylateleave=function(req,res){ 
    console.log(req.body);
    User.findOneAndUpdate({sid: req.params.sid } , {
        lateleave_applied:true, 
        lateleave_approved: false,
        to_show_late: true, 
        lateleave_date: req.body.start_date,
        lateleave_reason: req.body.reason,
        phone_number_temp: req.body.number,
        guardian_phone_number_late: req.body.parent_number,
        room_number: req.body.room_number,
        department: req.body.department,
        lateleave_address: req.body.visiting_address,
        },

            function (err, docs) {
             if (err){
            console.log(err);
            return res.redirect('back');
             } else{
            console.log("applied for late leave");
            req.flash("success","Leave Applied successfully");   
            return res.redirect('/user/profile')
        } 
      });    
}