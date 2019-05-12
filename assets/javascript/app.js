
var intervalId;
var counter = 30;



// function on click "start" from dispaly none to display the game 
$("#resume").on("click", run);



//timer 30 sec on start 

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }



 //  The decrement function.
 function decrement() {
    number--;
    $("#seconds").html("<h2>" + number + "</h2>");
    if (number === 0) {
    alert("well done loser"); 
    }
  }