const User=require('../models/user');

module.exports.admin=function(req,res)
{
// We can add the functionality that if the size of the array that below function returned is 0 then dont send the mail to mam
    User.find({leave_applied:true} && {leave_approved:false},function(err,user){
        if(err){
            console.log('Error in fetching list from db');
            return res.redirect('back');
        }
        return res.render('student',{
            // title : "Doo Itt!", 
            student_list : user
         });
    });
    // return res.render('student');
}