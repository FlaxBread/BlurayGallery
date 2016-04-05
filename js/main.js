// JavaScript Document

var imageCount = 1;
var totalAmount = 4;
var image = document.getElementById("mainSliderImage");

function slide(x) 
{
	imageCount = imageCount + x;
	if(imageCount > totalAmount){imageCount = 1;}
	if(imageCount < 1){imageCount = totalAmount;} //Keeps the 
	image.src = "images/CoverImage_"+ imageCount +".jpg";
	var timer = setInterval(slide, 5000, 1);
	clearInterval(timer);
	console.log("Timer reset");
	timer;
	console.log("Timer started");
}


window.setTimeout(slide,5000, 1);
window.addEventListener("load", init, false);
