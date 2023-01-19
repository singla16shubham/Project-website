const User=require('../models/user');

module.exports.admin=function(req,res){
        return res.render('student');
}

module.exports.longleave=function(req,res){
    User.find({ longleave_applied: true, longleave_approved: false }, function(err,user){ 
        if(err){
            console.log('Error in fetching list from db');
            return res.redirect('back');
        }
        return res.render('adminlongl',{ 
            student_list : user       
         });
     })
}

module.exports.lateleave=function(req,res){
    User.find({ lateleave_applied: true, lateleave_approved: false } , function(err,user){ 
        if(err){
            console.log('Error in fetching list from db');
            return res.redirect('back');
        }
        return res.render('adminlatel',{
            student_list : user
         });
    });
}

module.exports.handleLongleave=function(req,res){
        var myquery = { sid: req.params.sid };
        var newvalues={};
        if(req.params.val==1){
           newvalues = { $set: { longleave_approved: true, longleave_applied: true } }; //set leave approved, leave applied, to show false after end date
        } else{
           newvalues = { $set: { longleave_approved: false, longleave_applied: false } };
        }
        User.updateOne(myquery, newvalues, function(err, res){
          console.log("Sheet updated");
        });
        return res.redirect("back");
}

module.exports.handleLateleave=function(req,res){
    var myquery = { sid: req.params.sid };
    var newvalues={};
    if(req.params.val==1){
        var numberM;
        var numberS;
        User.find({sid:req.params.sid},function(err,user){
            if(err){
                console.log('Error in fetching list from db');
                return res.redirect('back');
            } 
          numberM = user[0]['lateleaves_month']+1; 
          numberS = user[0]['lateleaves_sem']+1; 
        });
       newvalues = { $set: {lateleave_approved: true , lateleave_applied: true, lateleaves_sem: numberS, lateleaves_month: numberM }}; //set leave approved, leave applied, to show false when current day exceeds late leave date
    }
    else{
       newvalues = { $set: {lateleave_approved: false , lateleave_applied: false } };
    }

    User.updateOne(myquery, newvalues, function(err, res){
      console.log("Sheet updated");
    });
    return res.redirect("back");
}