const num = window.prompt("Enter a number between 0 and 1 million");

let sum = 0

if(num < 0 || num > 1*10**6){
    console.log('Invalid number');
}else{
    for(var i = 1 ; i <= num ; i++){
     sum +=  i
    }
    console.log(sum);
}