const User=require('../models/user');

module.exports.admin=function(req,res)
{
// We can add the functionality that if the size of the array that below function returned is 0 then dont send the mail to mam
    User.find({longleave_applied:true, longleave_approved:false},function(err,user){ 
        if(err){
            console.log('Error in fetching list from db');
            return res.redirect('back');
        }
        return res.render('student',{
            student_list : user
         });
    });
}

module.exports.handleLeave=function(req,res){
        var myquery = { sid: req.params.sid };
        var newvalues={};
        if(req.params.val==1){
           newvalues = { $set: {longleave_approved: true , longleave_applied: true } }; //leave approved false after end date
        } else{
           newvalues = { $set: {longleave_approved: false , longleave_applied: false } }; //we need to differntitate a rejected leave from not applied leave
        }
        User.updateOne(myquery, newvalues, function(err, res){
          console.log("Sheet updated");
        });
        return res.redirect("back");
}