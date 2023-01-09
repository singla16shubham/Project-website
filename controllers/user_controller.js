const data=require("../nodejsEXCELlinker")
module.exports.logIn=function(req,res)
{
    // if passwords match then show the user page other wise return back
    console.log(req.body);
    
    
   
    const tempdata= data.find(user => user.Student_ID == req.body.SID)
    
   
    if(tempdata!=undefined)
    {
      if(tempdata.Password==req.body.password){
        return res.render('user');
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