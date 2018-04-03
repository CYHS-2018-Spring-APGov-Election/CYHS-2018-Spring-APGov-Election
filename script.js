var a = 0, toggle = false;
const RATE = .02;

function colorChange() {
	document.body.style.backgroundColor = "rgba(0,0,0,"+a+")"
	document.body.style.backgroundImage = "url(Images/APGov_LOGO.png)"
	document.getElementById("header-content").style.backgroundImage = "url(Images/APGov_LOGO.png)"
	document.getElementById("navbar").style.backgroundImage = "url(Images/APGov_LOGO.png)"
	document.getElementsByClassName("body-content")[0].style.backgroundImage = "url(Images/APGov_LOGO.png)"
	document.getElementById("header-content").style.backgroundColor = "rgba(0,0,0,"+a+")"
	document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,"+a+")"
	document.getElementsByClassName("body-content")[0].style.backgroundColor = "rgba(0,0,0,"+a+")"
	
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
	window.scrollTo(Math.random()*1000, Math.random()*1000)
}

function switchCandidate(party, toCandidate) {
	// Not actually all Golden Party, just named that because Golden was the only Party to utilize this at first
	
	var title = document.getElementById("GoldenTitle")
	var subtitle = document.getElementById("GoldenSubtitle")
	var p1 = document.getElementById("GoldenP1")
	var p2 = document.getElementById("GoldenP2")
	
	var pres = document.getElementById("GoldenPresident")
	var vp = document.getElementById("GoldenVice")
	var pic = document.getElementById("GoldenCandidate")
	
	if (party == "Golden") {
		if (toCandidate == "Alexander") {
			title.innerHTML = "MEET ALEXANDER J. FORRY"
			subtitle.innerHTML = "Activist, Lobbyist (2002 - )"
			p1.innerHTML = "Alexander J. Forry was born in York, Pennsylvania. He was selected by Mr. Trevor Blood to be his Vice-President presiding over the Golden Party in early March 2017 to begin the rise of a \"Golden Age.\" In early years, he began his education at Central York School District, where he was very successful in investing his time in various clubs and activities. He was  and is a very involved person within his community with the Boy Scouts of America and National Honor Society. He was the captain of the boys swim team furthering showcasing his leadership skills. For his undergraduate degree, he attended American University to study Politics, Policy, and Law, where he met his running mate for President, Trevor Blood. "
			p2.innerHTML = "They founded the Golden Party with the help of Mr. Brent Forry, and Mr. Clayton Brosend. He then went on to pursue his Law degree from Columbia and became a member of the New York BAR Association. His love for traveling took him all over the world during his time spent in school having studied abroad in over 6 countries including Spain, France, and Greenland. After graduation, he worked at a few firms before deciding to pursue work in activist campaigns. He has been involved in many different movements such as Women's March, the Not One More campaign, and many more. From there he was able to move into starting his own lobbying firm to be able to push for policy change to help support the causes he is an activist for. His motivation is that of the Golden Party, to equally represent everyone, despite the background of any person."
	
			pres.style.textDecoration = "none";
			vp.style.textDecoration = "underline";
			pic.src = "Images/Golden/alexander.png";
		} else {
			title.innerHTML = "MEET TREVOR V. BLOOD"
			subtitle.innerHTML = "Activist, Government Official (2000 - )"
			p1.innerHTML = "Trevor V. Blood was born in York, Pennsylvania. He elected to run the Golden Party in early March 2017 to begin the rise of a \"Golden Age.\" In early years, he began his education at Central York School District, where he invested many hours and time into various clubs and organizations. He was and is a very involved person within his community with National Honor Society and the International Thespian Society. He worked as a Guest Service Ambassador at Target of East York. In his college years, he attended American University to study Politics and United States Government, where he met his running mate for Vice-President, Alexander Forry."
			p2.innerHTML = "They founded the Golden Party with the help of Mr. Brent Forry, and Mr. Clayton Brosend. After graduating from American University, he attended New York University for his doctorate, further pursuing his love for politics. He even minored again in French language to be an ambassador to France. In later year, he grew more passionate in politics, and he began protesting social issues that inhibits people the rights that they equally deserved. He attended marches for women and was an activist in the Not One More and the Me Too movements. He works for equality for all, as the whole basis of the Golden Party is to equally represent everyone, despite the background of any person."
	
			pres.style.textDecoration = "underline";
			vp.style.textDecoration = "none";
			pic.src = "Images/Golden/trevor.png";
		}
	} else {
		if (toCandidate == "Delaney") {
			title.innerHTML = "Delaney Boylan"
			p1.innerHTML = "Delaney Boylan is a forty two year old woman and a member of the Libere party. She is married to Bryce Boylan and has two kids: Rebecca, 15, and Thomas, 12. Mrs. Boylan grew up in Mississippi, but moved to Pennsylvania after college. She attended The University of Mississippi and majored in political science with a minor in business. Once she acquired her degree, she worked her way up through competition and ran for the House of Representatives in Pennsylvania. She has served six years as a representative of Pennsylvania. Recently, she was asked to be the Vice Presidential candidate for Michael Gilliland. Boylan plans to run alongside him and give her party the platform it deserves."
			
			pres.style.textDecoration = "none";
			vp.style.textDecoration = "underline";
			pic.src = "Images/Libere/delaney.jpg";
		} else {
			title.innerHTML = "Michael Gilliland"
			p1.innerHTML = "Mr. Michael Gilliland is the President under the political party, Libere. He is fifty four years old and has a wife, Ellen Gilliland, along with three children: Amber, Angie and Aaron. Mr. Gilliland grew up in York, Pennsylvania with his mother and father. After attending Central York High School, he continued his education at Harvard University where he received his masters degree in finance. After attaining his degree, he moved to New York and acquired a position as a statistician. Mr. Gilliland decided he wanted to move back to Pennsylvania where he could pursue a political career. Michael became mayor of York and fulfilled his eight years with successful track records and production. He restored many buildings and created many Homeless shelters in York City. Now, Michael is running for United States President under the political party, Libere."
			
			pres.style.textDecoration = "underline";
			vp.style.textDecoration = "none";
			pic.src = "Images/Libere/michael.jpg";
		}
	}
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
		console.log(960/length); // outputs length td needs to be to account for all tabs
	}     
}

/*	
Run this to figure out the width for each td in your navigation bar

window.onload = function() {
	adjustTableWidth();
}
*/

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function archiveDropdown() {
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
console.log("But, so long as you're here, I'll tell you there are a few easter eggs hidden in this site. Don't cheat and look for them in the code, try and find them on the webpage itself.")
console.log("There are four easter eggs.")