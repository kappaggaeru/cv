console.log("skillls.js");
let links = [];
links.push("html/java.html");
links.push("front.html");
links.push("spring.html");
links.push("sql.html");
links.push("mongo.html");

let skillsDivs = document.querySelectorAll(".skillLink");
for (let i = 0; i < skillsDivs.length; i++) {
    skillsDivs[i].addEventListener("click", () => {
        getSkillDetails(i);
    });
}

function getSkillDetails(n){
    fetch (links[n])
        .then(response => response.text())
        .then(data => container.innerHTML = data);
}