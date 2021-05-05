// alert("aloha");
let burgerBtn = document.querySelector(".burgerButton");
let collapseBar = document.querySelector(".collapseBar");

burgerBtn.addEventListener("click", toggleBurger);
function toggleBurger(){
    burgerBtn.classList.toggle("open");
    if(collapseBar.style.maxHeight){
        collapseBar.style.maxHeight = null;
    }else{
        collapseBar.style.maxHeight = collapseBar.scrollHeight + "px";
    }
}

let mailImage = document.querySelector("#mailImage");
mailImage.addEventListener("click", () => {
    window.open('mailto:oliveralautaro99@gmail.com');
    console.log("sending email!");
});

let container = document.querySelector(".container");
let head = document.querySelector("#head");

// scripts
let skillsScript = document.createElement("script");
skillsScript.type = "text/javascript";

// about
loadSkills();
let aboutBtns = document.querySelectorAll(".aboutButton");
aboutBtns.forEach(element => element.addEventListener("click",loadAbout));
function loadAbout(){
    let file = "html/about.html";
    fetch (file)
        .then(response => response.text())
        .then(data => container.innerHTML = data);
    console.log("about.html");
    
}

// skills
let skillBtns = document.querySelectorAll(".skillsButton");
skillBtns.forEach(element => element.addEventListener("click",loadSkills));
function loadSkills() {
    let file = "html/skills.html";
    fetch (file)
        .then(response => response.text())
        .then(data => container.innerHTML = data);
    console.log("skills.html");
    skillsScript.src = "js/skills.js";
    head.appendChild(skillsScript);
    console.log("skills.js appended");
}