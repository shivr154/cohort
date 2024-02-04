setInterval(function(){
    let currTimeObject = new Date();
        console.log(`${currTimeObject.getHours()}:${currTimeObject.getMinutes()}:${currTimeObject.getSeconds()}`);
        console.log(`${currTimeObject.toLocaleTimeString()}\n`);

},1000)