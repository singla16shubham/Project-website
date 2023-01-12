const reader = require('xlsx');
const User=require('./models/user');
  
// Reading our test file
const file = reader.readFile('./dataset.xlsx',{cellDates:true});
  
let data = []
  
const sheets = file.SheetNames

   const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]])
   temp.forEach((res) => {data.push(res)})
// User.create(data);
module.exports=data
