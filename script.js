
function toVice() {
	var title = document.getElementById("GoldenTitle")
	var subtitle = document.getElementById("GoldenSubtitle")
	var p1 = document.getElementById("GoldenP1")
	var p2 = document.getElementById("GoldenP2")
	
	var pres = document.getElementById("GoldenPresident")
	var vp = document.getElementById("GoldenVice")
	var pic = document.getElementById("GoldenCandidate")
	
	title.innerHTML = "MEET ALEXANDER J. FORRY"
	subtitle.innerHTML = "Activist, Lobbyist (2002 - )"
	p1.innerHTML = "Alexander J. Forry was born in York, Pennsylvania. He was selected by Mr. Trevor Blood to be his Vice-President presiding over the Golden Party in early March 2017 to begin the rise of a “Golden Age.” In early years, he began his education at Central York School District, where he was very successful in investing his time in various clubs and activities. He was  and is a very involved person within his community with the Boy Scouts of America and National Honor Society. He was the captain of the boys swim team furthering showcasing his leadership skills. For his undergraduate degree, he attended American University to study Politics, Policy, and Law, where he met his running mate for President, Trevor Blood. "
	p2.innerHTML = "They founded the Golden Party with the help of Mr. Brent Forry, and Mr. Clayton Brosend. He then went on to pursue his Law degree from Columbia and became a member of the New York BAR Association. His love for traveling took him all over the world during his time spent in school having studied abroad in over 6 countries including Spain, France, and Greenland. After graduation, he worked at a few firms before deciding to pursue work in activist campaigns. He has been involved in many different movements such as Women’s March, the Not One More campaign, and many more. From there he was able to move into starting his own lobbying firm to be able to push for policy change to help support the causes he is an activist for. His motivation is that of the Golden Party, to equally represent everyone, despite the background of any person."
	
	pres.style.textDecoration = "none";
	vp.style.textDecoration = "underline";
	pic.src = "Images/Golden/alexander.png";
}

function toPresident() {
	var title = document.getElementById("GoldenTitle")
	var subtitle = document.getElementById("GoldenSubtitle")
	var p1 = document.getElementById("GoldenP1")
	var p2 = document.getElementById("GoldenP2")
	
	var pres = document.getElementById("GoldenPresident")
	var vp = document.getElementById("GoldenVice")
	var pic = document.getElementById("GoldenCandidate")
	
	title.innerHTML = "MEET TREVOR V. BLOOD"
	subtitle.innerHTML = "Activist, Government Official (2000 - )"
	p1.innerHTML = "Trevor V. Blood was born in York, Pennsylvania. He elected to run the Golden Party in early March 2017 to begin the rise of a “Golden Age.” In early years, he began his education at Central York School District, where he invested many hours and time into various clubs and organizations. He was and is a very involved person within his community with National Honor Society and the International Thespian Society. He worked as a Guest Service Ambassador at Target of East York. In his college years, he attended American University to study Politics and United States Government, where he met his running mate for Vice-President, Alexander Forry."
	p2.innerHTML = "They founded the Golden Party with the help of Mr. Brent Forry, and Mr. Clayton Brosend. After graduating from American University, he attended New York University for his doctorate, further pursuing his love for politics. He even minored again in French language to be an ambassador to France. In later year, he grew more passionate in politics, and he began protesting social issues that inhibits people the rights that they equally deserved. He attended marches for women and was an activist in the Not One More and the Me Too movements. He works for equality for all, as the whole basis of the Golden Party is to equally represent everyone, despite the background of any person."
	
	pres.style.textDecoration = "underline";
	vp.style.textDecoration = "none";
	pic.src = "Images/Golden/trevor.png";
}

/* Create America First Pop-up */
function ReadMore(candidate) {
	var wid = window.screen.width;
	var hei = window.screen.height;
	var newid = wid / 2;
	var nehei = hei / 2;
	var newhei = nehei / 2;
	var newwid = newid / 2;
	
	if (candidate == "Ian") {
		open("popups/ianPopup.html", "_Blank", "width=" + newid + ", height=" + nehei + ", left=" + newwid + ", top=" + newhei);
	} else {
		open("popups/kadenPopup.html", "_Blank", "width=" + newid + ", height=" + nehei + ", left=" + newwid + ", top=" + newhei );
	}
}

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