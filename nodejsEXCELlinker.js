const reader = require('xlsx')
  
// Reading our test file
const file = reader.readFile('./dataset.xlsx')
  
let data = []
  
const sheets = file.SheetNames

   const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]])
   temp.forEach((res) => {data.push(res)})

module.exports=data
