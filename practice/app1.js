
var subscribeButton = document.getElementById("btn1");
subscribeButton.addEventListener("click",function(){
    subscribeButton.style.backgroundColor = "red";
    subscribeButton.style.color = "white";
    subscribeButton.textContent = "subscribed";
    alert("hey you stop poking me");

})