const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;

const data=require('../nodejsEXCELlinker');

// Authentication with passprt
passport.use(new LocalStrategy({
        usernameField:'SID',
        passReqToCallback:true
    },
    function(req,SID,password,done)
    {
// find a user and establish identity
const tempdata= data.find(user => user.Student_ID == SID)
    
   
if(tempdata!=undefined)
{
  if(tempdata.Password==password){
    // res.cookie('user_id',tempdata.Unique_ID)
    return done(null,tempdata);
  } else 
  { 
    
    // Add flash message 
    req.flash('error',"Invalid Username/Password");
    console.log("Wrong password")
    // return res.redirect('/')
    return done(null,false);
  }
}
else
{
  //  Must add flash message
  console.log("Sorry user not found");
  req.flash("error","User not found");
  return done(null,false);

} 
  
 }



));


// Serializing the user to decide which key is to be kept in cookies
passport.serializeUser(function(user,done){
    done(null,user.Unique_ID);
})

// Deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){

    const tempdata= data.find(user => user.Unique_ID == id);
    if(tempdata==undefined)
    {
        console.log("Error in finding user--->Passprt");

    }
    return done(null,tempdata);

  
})

passport.checkAuthentication=function(req,res,next)
{    //if user is signed in then pass on the request to next function(controller's action)
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/');
}

passport.setAuthenticatedUser=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        // req.user contains the current signed in user form the session cookie and we are just sending this to the locals for the views
        res.locals.user=req.user
    }
    next();
}

module.exports=passport;