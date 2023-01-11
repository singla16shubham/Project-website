const mongoose= require("mongoose");
//  Do changes Here make all columns just like excel sheet
const userSchema=new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
       
    SID: {
        type: String,
        required: true
    },

})

const StudentList = mongoose.model('StudentList',userSchema);

module.exports = StudentList;