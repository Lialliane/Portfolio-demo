var index=0;
var images=["src/e-commerce-site.png","src/weather-app.png","src/portfolio-site.png"];
var links = ['https://www.shecodes.io/cohorts/shecodes-basics-0ecb1ade-6170-40b2-9236-4676ab7260c5/projects/1968163?_gl=1*1igqam1*_gcl_au*NTU5MjEzOTAyLjE3MTEzNzk0MjM.','https://l-weather-app.netlify.app','https://lujain-portfolio.netlify.app'];
var headings = ["E-commerce site","Weather app","Portfolio site"];


var projectPageArrowLeft= document.querySelector(".arrow-left-project-page");
var projectPageArrowRight= document.querySelector(".arrow-right-project-page");
var projectPageImage= document.querySelector("#project-page-image");
var projectPageOpenProjectLink= document.querySelector(".open-project-button");
var projectPageHeading= document.querySelector(".project-page-heading");

projectPageArrowLeft.addEventListener("click", fadeOutLeft);

projectPageArrowRight.addEventListener("click", fadeOutRight);

projectPageImage.addEventListener("animationend", function(){

    projectPageImage.src=images[index];
    projectPageOpenProjectLink.href=links[index];
    projectPageHeading.innerText=headings[index];

    setTimeout(function(){
        projectPageImage.classList.add("project-page-image-animation-reverse");
        projectPageImage.classList.remove("project-page-image-animation");
        projectPageImage.classList.remove("project-page-image-animation-reverse");
    }, 100);


})

function fadeOutLeft(){
    projectPageImage.classList.add("project-page-image-animation");

    images.push(images[index]);
    images.shift();
    links.push(links[index]);
    links.shift();
    headings.push(headings[index]);
    headings.shift();

}
function fadeOutRight(){
    projectPageImage.classList.add("project-page-image-animation");

    images.unshift(images[images.length-1]);
    images.pop();
    links.unshift(links[links.length-1]);
    links.pop();
    headings.unshift(headings[headings.length-1]);
    headings.pop();

}
