// JavaScript Document

var imageCount = 1;
var totalAmount = 4;

function slide(x) 
{
	var image = document.getElementById("mainSliderImage");
	imageCount = imageCount + x;
	if(imageCount > totalAmount){imageCount = 1;}
	if(imageCount < 1){imageCount = totalAmount;} //Keeps the 
	image.src = "images/CoverImage_"+ imageCount +".jpg";
}

//setInterval(slide(),5000,1);

window.addEventListener("load", init, false);
