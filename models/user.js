const mongoose= require("mongoose");
//  Do changes Here make all columns just like excel sheet
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },  
    sid:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required: true
    },
    department:{
        type:String,
        required:true
    },
    number:{
        type: String,
        required: true
    },
    phone_number_temp:{
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
    parent:{
        type: String,
        required: true
    },
    parent_number:{
        type: String,
        required: true
    },
    guardian_phone_number_long:{
        type: String,
        required: true
    },
    guardian_phone_number_late:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required:true
    },
    on_leave:{
        type: String,
        required:true
    },
    longleave_applied:{
        type:Boolean,
        required:true
    },
    longleave_approved:{
        type:Boolean,
        required:true
    },
    room_number:{
        type: String,
        required:true
    },
    lateleave_reason:{
        type: String,
        required:true
    },
    lateleaves_sem:{
        type: Number,
        required:true
    },
    lateleaves_month:{
        type: Number,
        required:true
    },
    lateleave_date:{
        type: String,
        required:true
    },
    lateleave_address:{
        type: String,
        required:true
    },
    longleave_reason:{
        type: String,
        required:true
    },
    start_date:{
        type: String,
        required:true
    },
    end_date:{
        type: String,
        required:true
    },
    longleave_address:{
        type: String,
        required:true
    },
    lateleave_applied:{
        type:Boolean,
        required:true
    },
    lateleave_approved:{
        type:Boolean,
        required:true
    },
    to_show_long:{
        type:Boolean,
        required:true
    },
    to_show_late:{
        type:Boolean,
        required:true
    }    
})

const StudentList = mongoose.model('StudentList',userSchema);

module.exports = StudentList;