const data=require("../nodejsEXCELlinker")
module.exports.long_leave=function(req,res)
{     
        return res.render('long_leave',{
            title: 'long_leave',
        });  
}
module.exports.late_leave=function(req,res)
{    
        return res.render('late_leave',{
            title: 'late_leave',
        });   
}

module.exports.applyll=function(req,res)
{
    req.flash("success","Applied successfully")
    console.log(req.body);
    // Handle database
    return res.redirect('/user/profile');

}

module.exports.applylateleave=function(req,res)
{
    console.log("applied for late leave");
    console.log(req.body);
    // Handle database
    req.flash("success","Applied successfully")  
    return res.redirect('/user/profile')
}

