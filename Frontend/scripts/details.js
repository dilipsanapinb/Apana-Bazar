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
 img.style.borderRadius="10px"
 img.src=data.image_url;
 product_img.append(img)


//  product details
//let product_details=document.getElementById("products_details_1_centre");
//product_details.innerHTML=null;
//brand div
let brand=document.createElement("h2");
brand.innerText=data.brand;
let b_div=document.getElementById("title_1");
b_div.append(brand);
//name div
let name=document.createElement('h3');
name.innerText=data.name;
let n_div=document.getElementById("title_2");
n_div.append(name)
//price div
let price=document.createElement('h4');
price.innerText=`Rs.${data.price}`;
let price_div=document.getElementById("price_div");
price_div.append(price)
//discount_div
let discount=document.createElement('h5');
discount.innerText=data.discount;
let disc_div=document.getElementById("discount_div");
disc_div.append(discount)
//strike div
let strike_price=document.createElement('h5');
strike_price.innerText=`MRP${data.strike_price}`;
let strike_div=document.getElementById('strike_price_div');
strike_div.append(strike_price)
//product_details.append(brand,name,price,discount,strike_price)
//let para=document.getElementById('details_para');
//para.append(product_details)

let order_btn=document.getElementById("order_btn");
order_btn.innerHTML=`Buy Now Rs.${data.price}  ${data.discount}`
