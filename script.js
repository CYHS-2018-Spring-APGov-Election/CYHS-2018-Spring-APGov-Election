
function adjustTableWidth() {
	var x = document.getElementById("navTable").getElementsByTagName("td");
	var length = document.getElementById("navTable").getElementsByTagName("td").length;
	
	for (var i = 0; i < length; i++) {
		x[i].style.width = (960/length) + "px";
		console.log(960/length);
		//x[i].style.backgroundColor = "red"; 
	}     
}

/*	Determines td width
window.onload = function() {
	adjustTableWidth();
}
*/

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

console.log("I told you not to inspect my code.")
console.log("GET OUT NOW!!!")