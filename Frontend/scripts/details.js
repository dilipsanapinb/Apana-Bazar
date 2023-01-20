import {navbar,footer} from "../components/navbar.js"
 let nav_div=document.querySelector(".navbar");
 nav_div.innerHTML=navbar();
 
 let footer_div=document.getElementById("footer_div");
 footer_div.innerHTML=footer();

 let data=JSON.parse(localStorage.getItem("product"));
 console.log(data);
//  product image
 let product_img=document.getElementById("prod_img_centre");
 product_img.innerHTML=null;
 let img=document.createElement('img');
 img.src=data.image_url;
 product_img.append(img)


//  product details
let product_details=document.getElementById("products_details_1_centre");
product_details.innerHTML=null;
let brand=document.createElement("h2");
brand.innerText=data.brand;
console.log(brand)
let name=document.createElement('h3');
name.innerText=data.name;
let price=document.createElement('h4');
price.innerText=`Rs.${data.price}`;
let discount=document.createElement('h5');
discount.innerText=data.discount;
let strike_price=document.createElement('h5');
strike_price.innerText=data.strike_price;
product_details.append(brand,name,price,discount,strike_price)
