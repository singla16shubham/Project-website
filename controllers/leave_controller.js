const data=require("../nodejsEXCELlinker");
const User=require('../models/user')

module.exports.long_leave=function(req,res)
{    
    User.find({sid:req.params.sid},function(err,user)
    {
        if(err){
            console.log('Error in fetching list from db');
            return res.redirect('back');
        }
        if(user.longleave_applied)
        {
            return res.render('long_leave',{
                title: 'long_leave',
            });  

        }
        else{
            req.flash("success","Already applied"); 
            return res.redirect('/user/profile');

        }
    } 
    )
       
}
module.exports.late_leave=function(req,res)
{    
    User.find({sid:req.params.sid},function(err,user)
    {
        if(err){
            console.log('Error in fetching list from db');
            return res.redirect('back');
        }
        if(user.lateleave_applied)
        {
            return res.render('long_leave',{
                title: 'long_leave',
            });  

        }
        else{
            req.flash("success","Already applied"); 
            return res.redirect('/user/profile');

        }
    } 
    )
}

module.exports.applyll=function(req,res)
{
   
        User.findOneAndUpdate({sid: req.params.sid } , {start_date: req.body.start_date , end_date: req.body.end_date , longleave_reason: req.body.reason, longleave_address: req.body.visiting_address,longleave_applied:true}, function (err, docs) {
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

module.exports.applylateleave=function(req,res)
{
    
      User.findOneAndUpdate({sid: req.params.sid } , {lateleave_applied:true ,lateleave_date: req.body.start_date , lateleave_reason: req.body.reason, lateleave_address: req.body.visiting_address}, function (err, docs) {
        if (err){
            console.log(err);
            return res.redirect('back');
        }
        else{
            console.log("applied for late leave");
            req.flash("success","Leave Applied successfully");   
            return res.redirect('/user/profile')

        }
      
      });
     
}

