const data=require("../nodejsEXCELlinker")
module.exports.long_leave=function(req,res)
{  
   
        return res.render('long_leave',{
            title: 'long_leave',
            // user:user
        });
  
   
    
}
module.exports.late_leave=function(req,res)
{ 
  
  
        return res.render('late_leave',{
            title: 'late_leave',
            // user:user
        });
  
     
    
}

module.exports.applyll=function(req,res)
{
  
    console.log(req.body);
    // Handle database
    // Add flash message if successfully applied
 
    return res.redirect('/user/profile');

}

module.exports.applylateleave=function(req,res)
{
    console.log("applied for late leave");
    console.log(req.body);
    // Handle database
    // Add flash message if successfully applied
    
    return res.redirect('/user/profile')
}

