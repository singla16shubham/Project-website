const nodemailer=require('nodemailer');

const msg = {
    from: "singla16shubham@gmail.com",
    to: "vatspeeyush1990@gmail.com",
    subject: "Nodemailer testing",
    text: "Testing our first sender"
};
nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "singla16shubham@gmail.com",
        pass: ""
    },
    port: 587,
    secure:false,
    host: 'smtp.gmail.com',
    timeout: 2000
})
.sendMail(msg, (err )=>{
    if(err) {
        return console.log('Error occurs', err);
    } else {
        return console.log('Email sent');
    }
})