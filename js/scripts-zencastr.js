// MOUSE



window.onload = (event) => {
	const zenplayer = document.querySelector('.zencastr-player iframe');

	zenplayer.setAttribute("data-tilt", "");
	zenplayer.setAttribute("data-tilt-full-page-listening", "");
	zenplayer.setAttribute("data-tilt-reverse", "true");

	let scriptEle = document.createElement("script");
	scriptEle.setAttribute("src", "/js/vanilla-tilt.min.js");
	document.body.appendChild(scriptEle);


};

