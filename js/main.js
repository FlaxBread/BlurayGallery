// JavaScript Document

var imageCount = 1;
var totalAmount = 4;
var image = document.getElementById("mainSliderImage");
var timer = setInterval(slide,5000,1);

function slide(x) 
{
	imageCount = imageCount + x;
	if(imageCount > totalAmount){imageCount = 1;}
	if(imageCount < 1){imageCount = totalAmount;} //Keeps the 
	image.src = "images/CoverImage_"+ imageCount +".jpg";
	clearInterval(timer);
	timer;
}


window.setTimeout(slide,5000, 1);
window.addEventListener("load", init, false);
