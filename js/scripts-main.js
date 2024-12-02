// * THEMES LOGIC *  

function setPeach() {
	
	// Set button to active
	handleThemeClicks(themePeachButton)
	
	// Clear other styles
	resetTheme();

	// Set the vars
	document.documentElement.style.setProperty('--c-high', '#FEBC9D');
	document.documentElement.style.setProperty('--c-diff', '#F06565');

	plausible('Action: Theme Peach')

}

function setPurple() {
	
	// Set button to active
	handleThemeClicks(themePurpleButton)
	
	// Clear other styles
	resetTheme();

	// Set the vars
	document.documentElement.style.setProperty('--c-high', '#A68EFC');
	document.documentElement.style.setProperty('--c-diff', '#626FE3');

	plausible('Action: Theme Purple')
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
	
	plausible('Action: Theme Mono')

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

	plausible('Action: Theme Dark Mono')
	
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

// Case study utils

// Zooming on click
const zoomable = document.querySelectorAll('.zoomable')

zoomable.forEach((element) => {
	element.addEventListener('click', function() {
		element.classList.toggle('image-zoomed')
	}, false)
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
	.innerHTML = 'It looks like it\'s Monday today.'
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








