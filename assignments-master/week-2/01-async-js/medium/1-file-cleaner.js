// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs")

fs.readFile("assignments-master\\week-2\\01-async-js\\easy\\one.txt","UTF-8",function(err,data1){
       if(err){
        console.log(err);
        return
       }
       else{
        console.log(`File read Succesfully`);
          console.log(`Data is ->${data1}`);
          let updatedData = data1.replaceAll(/\s+/g," ");
          console.log(`Updated data is ->${updatedData}`);

          fs.writeFile("assignments-master\\week-2\\01-async-js\\easy\\one.txt",updatedData,function(err2){
            if(err2){
                console.log(err2);
                return
            }
            console.log(`File Written SuccesFull`);
          })
       
        fs.readFile("assignments-master\\week-2\\01-async-js\\easy\\one.txt","UTF-8",function(err3,data3){
            if(err3){
                console.log(err3);
                return 
            }
            else{
                console.log(`Data is ${data3}`);
            }
        })

       }
})
