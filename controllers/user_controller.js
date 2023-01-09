const data=require("../nodejsEXCELlinker")
module.exports.logIn=function(req,res)
{
    // if passwords match then show the user page other wise return back
    console.log(req.body);
    const tempdata= data.find(user => user.Student_ID == req.body.SID)
    
   
    if(tempdata!=undefined)
    {
      if(tempdata.Password==req.body.password){
        res.cookie('user_id',tempdata.Unique_ID)
        return res.redirect('/user/profile');
      } else 
      { 
        
        // Add flash message 
        console.log("Wrong password")
        return res.redirect('/')
      }
    }
    else
    {
      //  Must add flash message
      console.log("Sorry user not found");
      return res.redirect('/')

    } 

    // return res.render('back')
}

module.exports.profile=function(req,res)
{ 
  // console.log(req.cookies);
  if(req.cookies.user_id!=undefined)
  {
    const user= data.find(user => user.Unique_ID == req.cookies.user_id);
    if(user!=undefined)
    {
      return res.render('profile',{
        title:"User Profile",
        user:user
      });

    }
    else{

      // add flash message
      return res.redirect('/');
    }
  }
  else{
    return res.redirect('/');

  }
  
}

module.exports.sign_out=function(req,res)
{
  res.clearCookie('user_id');

  // Add flash message for sign out
  return res.redirect('/');
}