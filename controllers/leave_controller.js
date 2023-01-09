const data=require("../nodejsEXCELlinker")
module.exports.long_leave=function(req,res)
{  
    if(req.cookies.user_id!=undefined)
    {
      const user= data.find(user => user.Unique_ID == req.cookies.user_id);
      if(user!=undefined)
      {
        return res.render('long_leave',{
            title: 'long_leave',
            user:user
        });
  
      }
      else{
        return res.redirect('/');
      }
    }
    else{
      return res.redirect('/');
  
    }
    
}
module.exports.late_leave=function(req,res)
{ 
  
    if(req.cookies.user_id!=undefined)
    {
      const user= data.find(user => user.Unique_ID == req.cookies.user_id);
      if(user!=undefined)
      {
        return res.render('late_leave',{
            title: 'late_leave',
            user:user
        });
  
      }
      else{
        return res.redirect('/');
      }
    }
    else{
      return res.redirect('/');
  
    }
    
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

