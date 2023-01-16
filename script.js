function getRandomNumber(max, min){
    return Math.round(Math.random() * (max - min) + min);
}
var n = -1;
function random_number() {
    var RandNum = getRandomNumber(20,1);
    n = n +1;
    document.getElementById("RandomNumber").innerHTML= RandNum;
    document.title = "Number of Clicks ---> " + n;
    if( n === RandNum ) {
        console.log("you won");
        //document.getElementById("won").innerHTML = "You won!!"
        document.title = "Congrats You won!";
        document.querySelector("button").remove();
        document.getElementById("RandomNumber").remove();
        document.getElementById("ButtonClickCount").remove();
        document.getElementById("won").innerHTML = "Congrats You won !!";
    } else {
        document.getElementById("won").innerHTML = "";
        document.title = "Try again";
    }
}

function event_(){
    const myButton = document.querySelector("button")
    myButton.addEventListener("click", random_number());
    const bcount = document.getElementById("ButtonClickCount");
    bcount.innerText = n;
}

