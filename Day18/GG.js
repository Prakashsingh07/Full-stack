const max = prompt("Enter the maximum number");
console.log(max);
const random = Math.floor(Math.random()*max+1);
console.log(random);
let guess = prompt("Guess the number number");
while(true){
    if(guess=="quiet"){
        console.log("user quit");
        break;
    }
             
    if(guess==random){
        console.log("You are right!congrats!random number was",random);
        break;
    }else if(guess<random){
        guess=prompt("Hint: Your guess was too small.Please try agin");
    }else if(guess>random){
        guess=prompt("Hint: Your guess was too large.Please try agin"); 
    }
   
}
