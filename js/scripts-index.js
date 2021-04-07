// Commands and scripts only for the index page

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
