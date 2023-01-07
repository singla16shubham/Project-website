const LocalStrategy=require('passport-local').Strategy;
const findSID=require("../nodejsEXCELlinker")
function initialize(passport)
{  
    const authenticateUser= (SID,password,done)=>
    {
        const user=findSID(SID);
        if(user==null)
        {
            // return done(null);
            return done(null, false, { message: 'No user with that SID' })
        }

        try {
            if ( password==user.Password) {
              return done(null, user)
            } else {
              return done(null, false, { message: 'Password incorrect' })
            }
          } catch (e) {
            return done(e)
          }


    }
    passport.use(new LocalStrategy({

        usernameField: "SID"
    }),authenticateUser)

    // passport.serializeUser((user,done)=>{

    // })
    // passport.deserializeUser((id,done)=>{
        
    // })


    passport.serializeUser((user, done) => done(null, user.Unique_ID))
    passport.deserializeUser((id, done) => {
      return done(null, getUserById(id))
    })
  }

module.exports=initialize;