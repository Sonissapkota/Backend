// There are two ways to export the modules the first is the default way or by creating a object

// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// module.exports = {
//     add,
//     sub
// }


// This is another way to export the function directly
exports.add = (a,b) =>{
    return a+b
}

exports.sub = (a,b) =>{
    return a-b
}