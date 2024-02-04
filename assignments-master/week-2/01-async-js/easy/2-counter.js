// counter without setInterval

count = 0;

function increaseCount(){
    count++;
    console.log(count);

  if(count < 10){
    setTimeout(increaseCount,1000)
  }
}

increaseCount()


