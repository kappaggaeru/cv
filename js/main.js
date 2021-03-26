// alert("aloha");
let burgerBtn = document.querySelector(".burgerButton");
let collapseBar = document.querySelector(".collapseBar");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open");
    if(collapseBar.style.maxHeight){
        collapseBar.style.maxHeight = null;
    }else{
        collapseBar.style.maxHeight = collapseBar.scrollHeight + "px";
    }
});

let mailImage = document.querySelector("#mailImage");
mailImage.addEventListener("click", () => {
    window.open('mailto:oliveralautaro99@gmail.com');
    console.log("sending email!");
});