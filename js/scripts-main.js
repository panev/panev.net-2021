// * NAV LOGIC *

// Binds the nav link elements
const helloLink = document.querySelector("#hello-link")
const workLink = document.querySelector("#work-link")
const contactLink = document.querySelector("#contact-link")

// Binds the section elements
const helloSection = document.querySelector("#hello")
const workSection = document.querySelector("#work")
const contactSection = document.querySelector("#contact")

// Defines the adjusted section start positions
const helloPosStart = 0
const workPosStart = workSection.offsetTop - 180;
const contactPosStart = contactSection.offsetTop - 220;

// Defines the section scroll areas
let helloArea = {
	start: helloPosStart,
	end: workPosStart
}

let workArea = {
	start: workPosStart,
	end: contactPosStart
}

let contactArea = {
	start: contactPosStart,
	end: 10000
}

// Check where the scroll is and manage active class
document.addEventListener("scroll", function(){

	if (window.pageYOffset > helloArea.start && window.pageYOffset < helloArea.end) {

		if (!helloLink.classList.contains("nav-link-active")) {
			helloLink.classList.add("nav-link-active")
			workLink.classList.remove("nav-link-active")
			contactLink.classList.remove("nav-link-active")
		}
	}

	if (window.pageYOffset >= workArea.start && window.pageYOffset < workArea.end) {
		if (!workLink.classList.contains("nav-link-active")) {
			helloLink.classList.remove("nav-link-active")
			workLink.classList.add("nav-link-active")
			contactLink.classList.remove("nav-link-active")
		}

	}

	if (window.pageYOffset >= contactArea.start && window.pageYOffset < contactArea.end) {
		if (!contactLink.classList.contains("nav-link-active")) {
			helloLink.classList.remove("nav-link-active")
			workLink.classList.remove("nav-link-active")
			contactLink.classList.add("nav-link-active")
		}

	}
})

// Manage nav clicks
helloLink.addEventListener("click", function() {
	window.scrollTo({top: helloPosStart, behavior: 'smooth'})
})

workLink.addEventListener("click", function() {
	window.scrollTo({top: workSection.offsetTop - 120, behavior: 'smooth'})
})

contactLink.addEventListener("click", function() {
	window.scrollTo({top: contactSection.offsetTop - 160, behavior: 'smooth'})
})

// * THEMES LOGIC *  

function setPeach() {
	
	// Set button to active
	handleThemeClicks(themePeachButton)
	
	// Clear other styles
	resetTheme();

	// Set the vars
	document.documentElement.style.setProperty('--c-high', '#FEBC9D');
	document.documentElement.style.setProperty('--c-diff', '#F06565');

}

function setPurple() {
	
	// Set button to active
	handleThemeClicks(themePurpleButton)
	
	// Clear other styles
	resetTheme();

	// Set the vars
	document.documentElement.style.setProperty('--c-high', '#A68EFC');
	document.documentElement.style.setProperty('--c-diff', '#626FE3');
}

function setMono() {

	// Set button to active
	handleThemeClicks(themeMonoButton)
	
	// Clear other styles
	resetTheme();

	// Set the vars
	document.documentElement.style.setProperty('--c-high', '#000');
	document.documentElement.style.setProperty('--c-diff', 'var(--c-medi)');

	// Set the SVG geometry
	addSvgFills("svg", "black")
	addSvgFills("rect", "black")
	addSvgFills("oval", "black")
	addSvgFills("path", "black")
	addSvgFills("circle", "black")
	
}

function setDarkMono() {

	// Set button to active
	handleThemeClicks(themeDarkMonoButton)

	// Clear other styles
	resetTheme()
	
	// Set the vars
	document.documentElement.style.setProperty('--c-high', 'white');
	document.documentElement.style.setProperty('--c-diff', 'var(--c-lite)');
	document.documentElement.style.setProperty('--c-medi', 'white');
	document.documentElement.style.setProperty('--c-base', 'white');

	
	// Set the common element styles manualy
	document.querySelector('body').style.background = "black";

	for (worklist of document.querySelectorAll('.work-list li')) {
		worklist.style.background = "#333"
	}

	document.querySelector('nav').style.background = "#333"

	// Set the SVG geometry
	addSvgFills("svg", "white")
	addSvgFills("rect", "white")
	addSvgFills("oval", "white")
	addSvgFills("path", "white")
	addSvgFills("circle", "white")
	
}

function resetTheme() {

	// Reset the vars to default
	document.documentElement.style.setProperty('--c-medi', '#595959');
	document.documentElement.style.setProperty('--c-base', '#2D2D2D');

	// Reset the list item background
	for (worklist of document.querySelectorAll('.work-list li')) {
		worklist.style.removeProperty("background")
	}

	// Reset common element styles
	document.querySelector('body').style.removeProperty("background");
	document.querySelector('nav').style.removeProperty("background")

	// reset the SVG geometry
	removeSvgFills("svg");
	removeSvgFills("rect");
	removeSvgFills("oval");
	removeSvgFills("path");
	removeSvgFills("circle");

}

// Utility functions for looping svgs
function removeSvgFills(e) {
	for (e of document.querySelectorAll(e)) {
		e.style.removeProperty("fill")
	}
}

function addSvgFills(e, colour) {
	for (e of document.querySelectorAll(e)) {
		e.style.fill = colour
	}
}

// UI state handling
function handleThemeClicks(e) {
		for (themeButton of document.querySelectorAll(".themes > div")) {
			themeButton.classList.remove('theme-active')
		}
		e.classList.add('theme-active')
	}

const themePeachButton = document.querySelector('.peach-container')

const themePurpleButton = document.querySelector('.purple-container')

const themeMonoButton = document.querySelector('.mono-container')

const themeDarkMonoButton = document.querySelector('.dark-mono-container')

// * SECTION LOGIC *

// Manage read more click

let helloAction = document.querySelector("#helloAction")

helloAction.addEventListener("click", function(){
	helloSection.classList.toggle("hello-section-active")
	if (!helloSection.classList.contains("hello-section-active")) {
		helloAction.innerHTML = "Read a bit more"
	}

	else {
		helloAction.innerHTML = "Read a bit less"
	}

})

// * FOOTER *

let date = new Date()

let currentYear = date.getFullYear()
document.querySelector('.year').innerHTML = currentYear


// Day greeting
if (date.getDay() === 0) {
	document.querySelector('.weekday-greeting')
	.innerHTML = 'Its Sunday today. Why not take a nap after you\'re done browsing?'
}

if (date.getDay() === 1) {
	document.querySelector('.weekday-greeting')
	.innerHTML = 'It looks like it\'s Monday today. Happy new week!'
}

if (date.getDay() === 2) {
	document.querySelector('.weekday-greeting')
	.innerHTML = 'Tuesday, Tuesday, Tuesday.'
}

if (date.getDay() === 3) {
	document.querySelector('.weekday-greeting')
	.innerHTML = 'Today is Wednesday. According to the Thai solar calendar, the colour associated with Wednesday is green.'
}

if (date.getDay() === 4) {
	document.querySelector('.weekday-greeting')
	.innerHTML = 'It\'s Thursday! Did you know that the day was named after the Norse god of Thunder, Thor?'
}

if (date.getDay() === 5) {
	document.querySelector('.weekday-greeting')
	.innerHTML = 'It\'s Friday today – hooray!'
}

if (date.getDay() === 6) {
	document.querySelector('.weekday-greeting')
	.innerHTML = 'Hey, It\'s Saturday today. The Romans named Saturday Sāturni diēs (\"Saturn\'s Day\")'
}

// Prod console.log for the curious :) 
console.log("Hey there! I'm thrilled that I've spiked your interest enough for you to look under the hood. If you want to know more about something don't hesitate to drop me a line!")








