import {navbar,footer} from "../components/navbar.js"
 let nav_div=document.querySelector(".navbar");
 nav_div.innerHTML=navbar();
 
 let footer_div=document.getElementById("footer_div");
 footer_div.innerHTML=footer();


//  caraousel

 let top_car_container=document.getElementById('top_carausel_div');
 let images=["https://c4.wallpaperflare.com/wallpaper/1011/374/434/group-of-people-men-men-outdoors-fashion-photography-wallpaper-preview.jpg",
"https://media.istockphoto.com/id/588394678/photo/mens-accessories.jpg?s=612x612&w=0&k=20&c=qFI0j2QcFDYpQRbCBdUS3ZbErwQcIGNN_3V1jwtm9AA=",
"https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOLANCER-BLUE-FASH9707037E5679B/1564604449295_1..jpg?imwidth=282&impolicy=hq",
"https://assets.vogue.com/photos/60bd6c440823a36e56e2a172/master/w_1600,c_limit/07-london-streetstyle-ss20-day-3-phil-oh.jpeg",
"https://assets.vogue.com/photos/60bd6c44381c96d4bb9efce4/master/w_1600,c_limit/05-nyfw-ss-fw19-phil-oh-day-8.jpeg"]
 let id;
 let i=0;
 let caraousel=()=>{
    id=setInterval(()=>{
        if(i===images.length){
            i=0
        }
        let img=document.createElement('img');
        img.src=images[i];
        top_car_container.innerHTML=null;
        top_car_container.append(img);
        i++
    },2000)
 }
 caraousel();




//  Fetch Data from Api

const getData=async()=>{
    try {
        let res=await fetch("https://real-pink-pelican-boot.cyclic.app/product",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:`${localStorage.getItem("token")}`
            }
        })
        if(res.ok){
            let data=await res.json();
            console.log((data));
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

let card=({brand,name,image_url,discount,strike_price,price})=>{
    let div=el('div');
    div.setAttribute('id','products_main_div')
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
    Price.innerText=price
    Price.setAttribute('id','price_tag')
    let off_price=el('p');
    off_price.innerText=discount
    let strike_Price=el('p');
    strike_Price.innerText=strike_price;
    strike_Price.setAttribute('id','strike')
    // rating=el('img');
    // rating.src=el.rating;
    // rating.setAttribute('id','rating')
    // let ratingNumber=el('p')
    // ratingNumber.innerText=el.ratingNumber;
    // ratingNumber.setAttribute('id','setAtrr')
    let btn=el("button")
    btn.innerText="Quick View"
    btn.setAttribute('id','button_cart');
    btn.addEventListener('click',function(){
    buyProduct(el);
    
    });
    details_div_products.append(b,about,Price,strike_Price,off_price,btn)
    div.append(image_div,details_div_products);
    return div

}

 const renderData = (data) => {
    let loader_div=document.getElementById("loader_div")
    loader_div.style.display='none'
    let append_div=document.getElementById('append_div');
    append_div.innerHTML=null;
    data.forEach(function(el,i){
       let product=card(el)
        append_div.append(product)
    });
};


// Activeware linking
let activ_btn=document.getElementById("butt2");
activ_btn.onclick=()=>{
    window.location.href="activeware.html"
}


// navbat total price
let nav_cart_total=document.getElementById("myCartPrice");
let total_price=localStorage.getItem("totalPrice")
nav_cart_total.innerText=`${total_price}`

// localstorage data length
let d_length=localStorage.getItem("dataLengtn");
let total_count=document.querySelector(".cart-quantity");
            total_count.innerHTML=d_length