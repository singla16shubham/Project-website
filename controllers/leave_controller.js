
module.exports.long_leave=function(req,res)
{
    return res.render('long_leave');
}
module.exports.late_leave=function(req,res)
{ 
    // console.log("late")
    return res.render('late_leave');
}

module.exports.applyll=function(req,res)
{
  
    console.log(req.query);
    StudentList.create(req.query,function(err,student_data){
        if(err){console.log('error in creating the list',err);return res.redirect('back');}
        // console.log(student_data);
        return res.redirect('/');
    });
}

module.exports.applylateleave=function(req,res)
{
    console.log("applied for late leave");
    console.log(req.query);
    

    return res.redirect('/')
}

