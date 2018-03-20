
// 0 - 10 inclusive both sides
// setInterval(alert(Math.floor(Math.random()*11)), 500);

/*
setInterval("randomColor()", 5);

function randomColor() {
	document.body.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
	document.getElementById("header-content").style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
	document.getElementById("navbar").style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
	document.getElementById("body-content").style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
}
*/

var a = 0, toggle = false;
const RATE = .02;

function colorChange() {
	document.body.style.backgroundColor = "rgba(0,0,0,"+a+")"
	document.getElementById("header-content").style.backgroundColor = "rgba(0,0,0,"+a+")"
	document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,"+a+")"
	document.getElementById("body-content").style.backgroundColor = "rgba(0,0,0,"+a+")"
	
	if (toggle) {
		a -= RATE;
	} else {
		a += RATE;
	}

	if (a >= 1) {
		toggle = true;
	} else if (a <= 0) {
		toggle = false;
	}
	
	setTimeout("colorChange()", 30)
	// recursion
	
	document.body.style.fontSize = (Math.floor(Math.random()*1000))+"px";
}



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function archiveDropdown() {
    //document.getElementById("dropdown").classList.toggle("show");
    
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      openDropdown.classList.toggle("show")
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
