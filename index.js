var txt = document.querySelector("#admin em");
var img = document.querySelectorAll("#admin div")[1];
var abutton = document.querySelector(".js-admin");

function admindetails(){
txt.innerHTML="<h2>Scholarship for brilliant students.</h2><br><h2>No Admission fee or any extra charges.</h2>" ;
img.classList.toggle("max-height");
img.classList.toggle("max-height1");
}

abutton.addEventListener("click",admindetails);
