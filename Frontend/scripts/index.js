import {navbar,footer} from "../components/navbar.js"
 let nav_div=document.querySelector(".navbar");
 nav_div.innerHTML=navbar();
 
 let footer_div=document.getElementById("footer_div");
 footer_div.innerHTML=footer()

let hmb_div=document.getElementById("hamberger_div");
hmb_div.onclick=()=>{
  myhambFunction()
}

function myhambFunction() {
    var x = document.getElementById("cat_links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  //login page functionality

  let login_btn=document.getElementById("login_page");
  login_btn.onclick=()=>{
    window.location.href="signup.html"
  }