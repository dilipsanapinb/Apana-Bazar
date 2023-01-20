import {navbar,footer} from "../components/navbar.js"
 let nav_div=document.querySelector(".navbar");
 nav_div.innerHTML=navbar();
 
 let footer_div=document.getElementById("footer_div");
 footer_div.innerHTML=footer()

let logBtn=document.querySelector("#login_btn");
logBtn.addEventListener('click',logfunct);

async function logfunct(event){
    try {
        event.preventDefault()
        let email=document.getElementById("email").value;
        let pass=document.getElementById("pass").value;
        let logobj={
            email,
            pass
        };
        console.log(logobj)
            let res=await fetch("http://localhost:3500/user/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(logobj)
        })
        if(res.ok){
            let data=await res.json();
            let token=data.token
            localStorage.setItem("token",token)
            alert("Log in Successfull");
            window.location.href="products.html"
        }else{
            alert("User is Not Found")
        }
    } catch (error) {
        console.log(error);
    }
}

// connect_link
let connect_link=document.getElementById("join_us_btn");
connect_link.onclick=()=>{
    window.location.href="signup.html"
}