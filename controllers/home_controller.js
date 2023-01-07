
// var student_data=require('../models/db')
const StudentList = require('../models/user');
// console.log(student_data);
module.exports.home=function(req,res)
{
    // StudentList.find({},function(err,student_data){
    //     if(err){
    //         console.log('Error in fetching list from db');
    //         return;
    //     }
    //     return res.render('home',{
    //         // title : "Doo Itt!", 
    //         data : student_data
    //      });
    // });
    return res.render('home')
    // return res.render('home',{data:student_data});
}