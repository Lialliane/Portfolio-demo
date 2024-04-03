var index=0;
var images=["src/e-commerce-site.png","src/weather-app.png","src/portfolio-site.png"];

var topImage= document.getElementById("top-image");
var hiddenTopImage= document.querySelector(".app-image-hidden-top");
var middleImage= document.querySelector(".app-image-main");
var hiddenMiddleImage= document.querySelector(".app-image-hidden");
var bottomImage= document.getElementById("bottom-image");

var arrowTop= document.querySelector(".nav-arrow-up");
var arrowBottom= document.querySelector(".nav-arrow-down");

var animation= document.querySelector(".animation");
var animationReverse = false;


arrowTop.addEventListener("click",moveUp);

arrowBottom.addEventListener("click",moveDown);

hiddenTopImage.addEventListener("animationend",function(){
    middleImage.style.opacity="1";
    hiddenMiddleImage.style.display="none";


    if(!animationReverse){
        console.log("before shifting" + images);
        images.unshift(images[images.length-1]);
        images.pop();
        console.log(images);
        topImage.src=images[index];
        hiddenTopImage.src=images[index+2];
        middleImage.src=images[index+1];
        hiddenMiddleImage.src=images[index+1];
        bottomImage.src=images[index+2];
    }

    hiddenTopImage.classList.remove("app-image-hidden-top-animation");
    hiddenTopImage.classList.remove("app-image-hidden-top-animation-reverse");
    topImage.classList.remove("app-image-top-animation");
    topImage.classList.remove("app-image-top-animation-reverse");
    hiddenMiddleImage.classList.remove("app-image-middle-animation");
    hiddenMiddleImage.classList.remove("app-image-middle-animation-reverse");
    bottomImage.classList.remove("app-image-bottom-animation");
    bottomImage.classList.remove("app-image-bottom-animation-reverse");


});


function moveUp(){
    if(!animationReverse){
        animationReverse=true;
    }
    console.log(images);
    images.push(images[index]);
    images.shift();
    console.log(images);
    topImage.src=images[index];
    middleImage.src=images[index+1];
    hiddenMiddleImage.src=images[index+1];
    bottomImage.src=images[index+2];
    hiddenTopImage.src=images[index+2];

    middleImage.style.opacity="0";
    hiddenMiddleImage.style.display="block";
    topImage.classList.add("app-image-top-animation-reverse");
    hiddenTopImage.classList.add("app-image-hidden-top-animation-reverse");
    hiddenMiddleImage.classList.add("app-image-middle-animation-reverse");
    bottomImage.classList.add("app-image-bottom-animation-reverse");
}

function moveDown(){
    if(animationReverse){
        animationReverse=false;
    }
    hiddenTopImage.src=images[index+2];
    middleImage.style.opacity="0";
    hiddenMiddleImage.style.display="block";
    topImage.classList.add("app-image-top-animation");
    hiddenTopImage.classList.add("app-image-hidden-top-animation");
    hiddenMiddleImage.classList.add("app-image-middle-animation");
    bottomImage.classList.add("app-image-bottom-animation");
}