const accountId = 1144553 // const cant be changed
let accountEmail = "123@gmail.com" // let is changeable 
var accountPassword = "password" // var is changeable but scope issue

accountCity = "Karachi" // not preferred at all

let accountState;

// accountId = 2 // not allowed

accountEmail = "456@gmail.com" // this is allowed
accountPassword = "New Password"
accountCity = "Isb"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])