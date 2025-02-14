let b = document.getElementById("btn");
let can = document.getElementById("can");
let c = document.getElementsByClassName("listitem");
let ul = document.getElementsByClassName("ul");
let windowwidth = window.innerWidth;
/*
b.addEventListener('click', () => {
  b.style.display = "none";
  can.style.display = "block";
  for (let i = 0; i < c.length; i++) {
    c[i].classList.add("displayflex");
  }

  ul[0].classList.add("flexcolumn");

  if (ul[0].classList.contains("flexcolumn"))
    ul[0].style.height = "15rem";
  else
    ul[0].style.height = "2.7rem";
});
can.addEventListener('click', () => {
  cls();
});
function cls() {
  if (windowwidth < 710) {
    b.style.display = "block";
  }
  can.style.display = "none";
  for (let i = 0; i < c.length; i++) {
    c[i].classList.remove("displayflex");
  }

  ul[0].classList.remove("flexcolumn");
  if (ul[0].classList.contains("flexcolumn"))
    ul[0].style.height = "15rem";
  else
    ul[0].style.height = "4rem";
}

let rm=document.getElementById("readmoreinfo");
let rmbtn=document.getElementById("rmbtn");

  rmbtn.addEventListener("click",()=>{
    rm.classList.toggle("readmoreinfo");
  }); */

document.getElementById("menuIcon").addEventListener("click", openmenu);


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  console.log("Opening menu...");
  sidemenu.classList.add("open");
  sidemenu.style.right= "150px";
}

function closemenu(){
  console.log("Closing menu...");
  sidemenu.classList.remove("open");
  sidemenu.style.right= "-200px";
}


  function switchTab(onclick, skills,experience,education) {
    // Deactivate all tabs and contents
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-contents');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Activate the clicked tab and corresponding content
    onclick.target.classList.add('active');
    document.getElementById(skills).classList.add('active');
    document.getElementById(experience).classList.add('active');
    document.getElementById(education).classList.add('active');
  }

  
