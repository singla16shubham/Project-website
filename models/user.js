const mongoose= require("mongoose");
//  Do changes Here make all columns just like excel sheet
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
       
    sid: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true

    },
    start_date:{
        type: Date,
        required:true
    },
    end_date:{
        type: Date,
        required:true
    },
    reason:{
        type:String,
        require:true
    },
    leave_applied:{
        type:Boolean,
        required:true
    },
    leave_approved:{
        type:Boolean,
        required:true
    },
    room_number:{
        type: String,
        required: true
    },
    reason:{
        type: String,
        required: true
    },
    visiting_address:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true

    },
    address:{
        type: String,
        required: true
    }
})

const StudentList = mongoose.model('StudentList',userSchema);

module.exports = StudentList;