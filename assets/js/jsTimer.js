
// var buttonText = document.querySelectorAll("div .timeBlocks");
var buttonStr = document.querySelector("#buttonStart");
var buttonSto = document.querySelector("#buttonStop");

//set date to count down to:
var countDownDate = new Date("May 16, 2018 23:05:00").getTime();

//update count function every 1sec:
function setInt(){
	
	//get current date/time:
	var currentTime = new Date().getTime();
	
	//distance between now and count down date
	var lengTime = countDownDate - currentTime;

	//calculations for days, hours, minutes, seconds:
	var days = Math.floor(lengTime / (1000 * 60 * 60 * 24));
	var hours = Math.floor((lengTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((lengTime % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((lengTime % (1000 * 60)) / 1000);

	//write to elements:
	var d = document.querySelector("#days");
	d.innerHTML = days;
	var h = document.querySelector("#hours");
	h.innerHTML = hours;
	var m = document.querySelector("#minutes");
	m.innerHTML = minutes;
	var s = document.querySelector("#seconds");
	s.innerHTML = seconds;

	// If the count down is finished or , write some text
    if(lengTime < 0) {
      clearInterval(setInt);
      document.querySelector("h1").innerHTML = "Error!";
      alert("Error: possible date format typo!");
  }
}

	
//Start
function startTime(){
	//click to update buttonText:
	buttonStr.addEventListener("click", function(){
		//myTime var to setInterval:
		myTime = setInterval(setInt, 1000);
		//function reference
		stopTime(myTime);
	});
}

//Stop
function stopTime(myTime){
	//declaring referenced function variable
	var mTime = myTime;
	buttonSto.addEventListener("click", function(){
		if(mTime > 0){
			clearInterval(mTime);
		
			return;
		}
		console.log("Timmer stoped!");
	});
}

startTime();
stopTime();

