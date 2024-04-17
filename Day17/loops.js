// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// for(let i=1;i<=10;i++){
//     // console.log(i);
//     if(i%2==0){
//         console.log(i);
//     }
// }

// loops with array.

// let fruits =["mango","apple","banana","litchi"];
// fruits.push("pineapple");
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

//NESTED LOOPS WITH NESTED ARRAY.

// let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

// for(let i=0;i<heroes.length;i++){
//     console.log(`List #${i}`);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }

//FOR OF LOOP.

// let fruits =["mango","apple","banana","litchi"];
// for(fruit of fruits ){
//     console.log(fruit);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }

// NESTED FOR OF LOOP.
let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}