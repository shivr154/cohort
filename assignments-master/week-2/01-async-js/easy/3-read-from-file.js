const fs = require("fs")

fs.readFile("assignments-master\\week-2\\01-async-js\\easy\\one.txt","UTF-8",function(err,data){
   if(err){
    console.log(err)
    return;
   }

    console.log(`Data read from file is ${data}`);
})

for(let i=0;i<100000;i++){
    console.log(`DOne with loop`);
}
