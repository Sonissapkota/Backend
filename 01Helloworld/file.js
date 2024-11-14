const fs = require("fs");
const os = require("os")
// Sync
// fs.writeFileSync('./test.txt', 'Hello world');

//Async
// fs.writeFileSync('./test.txt', 'Hello World async', (err)=>{})

// const result = fs.readFileSync("./contacts.txt", 'utf-8')

// fs.readFile('./contacts.txt', 'utf-8', (error, result)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(result)
//     }
// })

fs.appendFileSync("./test.txt", 'Hey whatsapp up\n')
console.log(os.cpus().length)