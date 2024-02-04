// counter which goes up by 1 every second

let count = 1;

const intervalId = setInterval(()=>{
   console.log(count++);
},1000)

setTimeout(()=>{
    clearInterval(intervalId)
    console.log(`counter stopped`);
},10000)