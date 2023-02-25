const data=require("../nodejsEXCELlinker")

module.exports.logIn=function(req,res)
{
  req.flash("success","Logged In successfully")
  return res.redirect('/user/profile');
}

module.exports.profile=function(req,res)
{ 
  
  var sid1=req.user.sid;
  if(sid1=="Admin2"||sid1=="Jyoti Kedia"){
  return res.redirect('/admin/access');
  } 
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
  
}