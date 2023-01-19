import {navbar,footer} from "../components/navbar.js"
 let nav_div=document.querySelector(".navbar");
 nav_div.innerHTML=navbar();
 
 let footer_div=document.getElementById("footer_div");
 footer_div.innerHTML=footer()

//  Register

const Register_btn=document.querySelector("#register form");

Register_btn.addEventListener('submit',registerFunct);

async function registerFunct(event){
  try {
    event.preventDefault();
      let firstname=document.getElementById("firstname").value
      let lastname=document.getElementById("lastname").value
      let email=document.getElementById("email").value
      let pass=document.getElementById("password").value
      let gender=document.getElementById("gender").value

    let userObj={
      firstname,
      lastname,
      email,
      pass,
      gender
    };
   
    let res=await fetch("http://localhost:3500/user/register",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj)
    })
    if(res.ok){
      alert("Sign up is successfull");
      window.location.href="signin.html"
    let data=await res.json();
    console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}


// connect_link
let connect_link=document.getElementById("join_us_btn");
connect_link.onclick=()=>{
    window.location.href="signin.html"
}



