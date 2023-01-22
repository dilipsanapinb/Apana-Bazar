import {navbar,footer} from "../components/navbar.js"
 let nav_div=document.querySelector(".navbar");
 nav_div.innerHTML=navbar();
 
 let footer_div=document.getElementById("footer_div");
 footer_div.innerHTML=footer();

let sub_btn=document.getElementById('sub_btn');
sub_btn.onclick=()=>{
    window.location.href="index.html"
}
 
// navbat total price
let nav_cart_total=document.getElementById("myCartPrice");
let total_price=localStorage.getItem("totalPrice")
nav_cart_total.innerText=`${total_price}`

// localstorage data length
let d_length=localStorage.getItem("dataLengtn");
let total_count=document.querySelector(".cart-quantity");
            total_count.innerHTML=d_length

//user name on navabar
let user_name=localStorage.getItem("username");
let regName=document.getElementById("admin_name");
regName.innerText=user_name