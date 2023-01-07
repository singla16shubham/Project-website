// Requiring the module
const reader = require('xlsx')
  
// Reading our test file
const file = reader.readFile('./dataset.xlsx')
  
let data = []
  
const sheets = file.SheetNames
  
// for(let i = 0; i < sheets.length; i++){
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[0]])
   temp.forEach((res) => {
      data.push(res)
   })
// }
  
function findSID(SID){
   // for(let i = 0; i < data.length; i++){
   //   if(data[i].Student_ID==SID) return data[i]
   // }
   return data.find(user => user.Student_ID == SID)
   // return null
}
module.exports=findSID
