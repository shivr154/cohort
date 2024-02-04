const fs = require("fs")

fs.writeFile("assignments-master\\week-2\\01-async-js\\easy\\one.txt","YOYOY HONEY SINGHH",function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`File written succesfully`);
})

fs.readFile("assignments-master\\week-2\\01-async-js\\easy\\one.txt","UTF-8",function(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(`written data is ${data}`);
})

for(let i =0; i<100000; i++){
    console.log(i);
}