import {navbar,footer} from "../components/navbar.js"
 let nav_div=document.querySelector(".navbar");
 nav_div.innerHTML=navbar();
 
 let footer_div=document.getElementById("footer_div");
 footer_div.innerHTML=footer();


//  Fetch The Data

const getData=async()=>{
    try {
        let res=await fetch("https://real-pink-pelican-boot.cyclic.app/cart",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:`${localStorage.getItem("token")}`
            }
        })
        if(res.ok){
            let data=await res.json();
            localStorage.setItem("dataLengtn",data.length)
            let total_count=document.querySelector(".cart-quantity");
            total_count.innerHTML=data.length
            let array=[]
            for(let i=0;i<data.length;i++){
                let abc=(data[i].price)
                array.push(abc)
            }
            let sum=0
            for(let i=0;i<array.length;i++){
                sum+=(+array[i])
            }

            // my cart total
            let nav_cart_total=document.getElementById("myCartPrice");
            nav_cart_total.innerText=sum
            let total_price=document.getElementById("tatal_products_price");
            total_price.innerText=`Total Price:${sum}`
            localStorage.setItem("totalPrice",sum);
            //
            let order_btn=document.getElementById("odr_btn");
            order_btn.innerText=`Place order of  ${sum}`
            // localStorage.setItem("totalPrice",array)
            renderData(data)
        }
    } catch (error) {
        console.log();({"err":"Not able to fetch data"});
        console.log(error);
    }
}
getData();


//render the data

let el=(tag)=>{
    return document.createElement(tag)
}

let card=({brand,name,image_url,discount,strike_price,price,_id})=>{
    let div=el('div');
    div.setAttribute('id','products_main_div')
    div.style.display=('flex')
    div.style.border=('1px solid grey');
    // div.style.height=('300px')
    div.style.justifyContent=('space-around')
    let image_div=el("div")
    image_div.setAttribute("id","product_img_pay");
    let img=el('img')
   
    img.src=image_url;
    img.setAttribute("id","product_img")
    image_div.append(img)
    let details_div_products=el('div');
    // details of products
    details_div_products.setAttribute('id','details_div_product')
    let b=el('h3')
    b.innerText=brand;
    b.setAttribute('id','brand_name')
    let about=el('h4')
    about.innerText=name;
    let Price=el('h3')
    Price.innerHTML=`Rs. ${price}`
    Price.setAttribute('id','price_tag')
    let off_price=el('p');
    off_price.innerText=discount
    let strike_Price=el('p');
    strike_Price.innerText=`Rs.${strike_price}`;
    strike_Price.setAttribute('id','strike');
    strike_Price.style.textDecoration=('line-through')
    let btn=el("button")
    btn.innerText="Remove"
    btn.setAttribute('id','button_cart');
    btn.addEventListener('click',function(){
        removeProduct(_id)
    })
    details_div_products.append(b,about,Price,strike_Price,off_price,btn)
    div.append(image_div,details_div_products);
    return div

}

 const renderData = (data) => {

    let append_div=document.getElementById('product_div');
    append_div.innerHTML=null;
    data.forEach(function(el,i){
       let product=card(el)
        append_div.append(product)
    });
};

const removeProduct=async(_id)=>{
try {
    let res=await fetch(`https://real-pink-pelican-boot.cyclic.app/cart/delete/${_id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
             Authorization:`${localStorage.getItem("token")}`
        }
    })
    if(res.ok){
        alert("product removed from cart");
        window.location.href="cart.html"
    }
} catch (error) {
    console.log(error);
}
}

//

let make_order=document.getElementById('odr_btn');
make_order.onclick=()=>{
    let name=document.getElementById("name").value ;
    let addLine1=document.getElementById("address_line1").value ;
    let addLine2=document.getElementById("address_line2").value ;
    let city=document.getElementById("city").value;
    let pin=document.getElementById("pin_code").value ;
    let state=document.getElementById("state").value ;
    let total_price=localStorage.getItem("totalPrice")
    let addObj={
        name,
        addLine1,
        addLine2,
        city,
        pin,
        state,
        total_price
    }
    localStorage.setItem("address",JSON.stringify(addObj));
    window.location.href="payment.html"
}

// continue shopping
let cont_btn=document.getElementById("cont_shop");
cont_btn.onclick=()=>{
    window.location.href="products.html"
}


// navbat total price
let nav_cart_total=document.getElementById("myCartPrice");
let total_price=localStorage.getItem("totalPrice")
nav_cart_total.innerText=`${total_price}`

// localstorage data length
let d_length=localStorage.getItem("dataLengtn");
let total_count=document.querySelector(".cart-quantity");
            total_count.innerHTML=d_length
