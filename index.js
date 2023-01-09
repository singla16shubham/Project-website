const express=require('express');
const app=express();
const port=8000;
const path=require('path');
var data=require('./nodejsEXCELlinker')

const { urlencoded } = require('express');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local');



app.use(express.urlencoded()); // so that i can access form data
app.use(express.static('assets'));
app.use(cookieParser());



const db = require('./config/mongoose');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(session({
    name: 'project',
    // change secret before deploy
    secret: "Hello",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },

}));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);



app.use('/',require('./routes'));
app.listen(port,function(err)
{
    if(err)
    {
        console.log("Sorry There is some error");

    }
    console.log("Server is running on port",port);
})