const data=require("../nodejsEXCELlinker")

module.exports.logIn=function(req,res)
{
  req.flash("success","Logged In successfully")
  return res.redirect('/user/profile');
}

module.exports.profile=function(req,res)
{ 
  // console.log(req.cookies);
  return res.render('profile',{
          title:"User Profile", });

}

module.exports.sign_out=function(req,res)
{
 
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash("success","Logged out successfully")
    
    res.redirect('/');
  });

  // Add flash message for sign out
  
}