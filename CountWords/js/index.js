function onPageShow(){
	var words = document.body.textContent || document.body.innerText,
    matches = words.match(/(\b[^\s]+\b)/gmi);

	alert(matches.length);
};

// OnPageShow event, this will execute a function when the event is fired
document.addEventListener("pageshow", onPageShow()); 