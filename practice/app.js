// var subscribeButton=document.getElementById("subscribe");
// subscribeButton.addEventListener("click",function(){
//     subscribeButton.textContent="Subscribed";
//     subscribeButton.style.backgroundColor= "green";
//     subscribeButton.style.borderRadius=  "20px";
//     // subscribeButton.classList.toggle("btn2");
//     subscribeButton.style.fontStyle ="oblique";
    // subscribeButton.classList.toggle('.btn2')
    // subscribeButton.innerHTML='subscribed';
    // setTimeout("click",()=>{
    //     document.getElementById("subscribe").remove(innerHTML);
    // },2000);
// });
// var divbutton=document.getElementById("d1");
// divbutton.addEventListener("click",()=>{
//     divbutton.style.marginTop="100px";
//     divbutton.textContent="pratham harami";
//     divbutton.style.backgroundColor="red";
// });
function show(){
    var userinput = prompt("Enter the number :");
    if(userinput !== null){
        var number = parseInt(userinput);
        if(!isNaN(number)){
            if(number % 2===0){
                console.log(number + " is even.");
            }else{
                console.log(number + " is odd.");
            }
        }else{
            console.log("number is invalid");
        }
    }
};
// document.getElementById("subscribe").innerHTML="pinku htelaa";
// var newy = document.getElementById("subs");
// document.getElementById("subs").addEventListener("click",function(){
//     documen.getElementById("subs").textContent("pinku htela");
//     document.getElementById("subs").style.backgroundColor="red";
//     newy.style.color="white";
// });
// onclick="document.getElementById('subs').style.color='red' ";
// function displayDate(){
//     document.getElementById("demo").innerHTML=Date();
// };
// function dis(){
//     var userin=prompt("Enter the number");
//     if(userin !== null){
//         var num = parseInt(userin);
//         if(!isNaN(num)){
//             if(num%2 === 0){
//                 alert(num + " is even");
//             }else{
//                 console.log(num + " is odd");
//             }
//         }else{
//             console.log(num +" is not a valid number");
//         }
//     }
// };