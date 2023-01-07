const findSID=require("../nodejsEXCELlinker")
module.exports.logIn=function(req,res)
{
    // if passwords match then show the user page other wise return back
    console.log(req.body);
    // const {SID, password } = req.body
    const data=findSID(req.body.SID);
    console.log(data);
   
    if(data!=undefined)
    {
      if(data.Password==req.body.password){
        return res.render('user');
      } else 
      { 
        // alert("Wrong password")
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