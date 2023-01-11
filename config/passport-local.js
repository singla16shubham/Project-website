const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');
// now just use studentData in place of data 

const data=require('../nodejsEXCELlinker');

// Authentication with passprt
passport.use(new LocalStrategy({
        usernameField:'sid',
        passReqToCallback:true
    },
    function(req,sid,password,done)
    {
      User.findOne({sid:sid},function(err,user){
        if(err)
        {
            req.flash('error',"Error in finding user");
            return done(err);
        }
        if(!user||user.password!=password)
        {
            req.flash('error',"Invalid Username / Password");
            return done(null,false);
        }
        return done(null,user);

    })
// find a user and establish identity
// const tempdata= data.find(user => user.sid == sid);
// // Now in place of this find in mongo db
    
   
// if(tempdata!=undefined)
// {
//   if(tempdata.password==password){
//     // res.cookie('user_id',tempdata.Unique_ID)
//     return done(null,tempdata);
//   } else 
//   { 
    
//     // Add flash message 
//     req.flash('error',"Invalid Username/Password");
//     console.log("Wrong password")
//     // return res.redirect('/')
//     return done(null,false);
//   }
// }
// else
// {
//   //  Must add flash message
//   console.log("Sorry user not found");
//   req.flash("error","User not found");
//   return done(null,false);

// } 
  
 }



));


// Serializing the user to decide which key is to be kept in cookies
passport.serializeUser(function(user,done){
  console.log(user.id);
    done(null,user.id);
})

// Deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){

    // const tempdata= data.find(user => user.unique_id == id);
    // if(tempdata==undefined)
    // {
    //     console.log("Error in finding user--->Passprt");

    // }
    // return done(null,tempdata);
    User.findById(id,function(err,user){
      if(err)
      {
          console.log("Error in finding user--->Passprt");
      }
      return done(null,user);
  })

  
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