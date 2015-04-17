
window.onload = function(){
	var display = document.getElementById("note");
	display.style.height = window.innerHeight - 230 +"px";

	var ds = document.getElementById("display");
	ds.style.height = (window.innerHeight - 230 - 75)+"px";

	var write = document.getElementById("write");
	write.style.left = (window.innerWidth - 900)/2 + "px";
};

window.onresize = function(){
	var display = document.getElementById("note");
	display.style.height = window.innerHeight - 230 +"px";

	var ds = document.getElementById("display");
	ds.style.height = (window.innerHeight - 230 - 75)+"px";

	var write = document.getElementById("write");
	write.style.left = (window.innerWidth - 900)/2 + "px";
};
