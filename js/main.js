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
}

function autoSlide(){
	imageCount ++;
	if(imageCount > totalAmount){
		imageCount = 1;
	}
	image.src = "images/CoverImage_"+ imageCount +".jpg";
}

setInterval(autoSlide,5000);

window.addEventListener("load", init, false);
