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

	if (window.scrollY > helloArea.start && window.scrollY < helloArea.end) {

		if (!helloLink.classList.contains("nav-link-active")) {
			helloLink.classList.add("nav-link-active")
			workLink.classList.remove("nav-link-active")
			contactLink.classList.remove("nav-link-active")
		}
	}

	if (window.scrollY >= workArea.start && window.scrollY < workArea.end) {
		if (!workLink.classList.contains("nav-link-active")) {
			helloLink.classList.remove("nav-link-active")
			workLink.classList.add("nav-link-active")
			contactLink.classList.remove("nav-link-active")
		}

	}

	if (window.scrollY >= contactArea.start && window.scrollY < contactArea.end) {
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
	plausible('Action: Used Nav', {props: {item: 'Hello'}})
})

workLink.addEventListener("click", function() {
	window.scrollTo({top: workSection.offsetTop - 120, behavior: 'smooth'})
	plausible('Action: Used Nav', {props: {item: 'Work'}})
})

contactLink.addEventListener("click", function() {
	window.scrollTo({top: contactSection.offsetTop - 160, behavior: 'smooth'})
	plausible('Action: Used Nav', {props: {item: 'Contact'}})
})

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

	plausible('Action: Read a bit more or less')

})


// Handle illustration clicks

const illustrations = document.querySelectorAll('.visual')

illustrations.forEach((element) => {
	element.addEventListener('click', function() {
		plausible('Action: Clicked Visual', {props: {visual: element.classList.value}})
	}, false)
})










