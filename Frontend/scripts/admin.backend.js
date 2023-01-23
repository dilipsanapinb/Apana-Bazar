
//add product

document.getElementById("add_pro").addEventListener("click", () => {
    let div1 = document.getElementById("main_2")
    div1.innerHTML = null;
    let h1 = cretel("h1");
    h1.innerText = "Add Product"
    //
    let brand = cretel("input")
    brand.type = "text"
    brand.placeholder = "Enter Product Brand"
    brand.setAttribute("id", "brand")
    //
    let title = cretel("input");
    title.type = "text";
    title.placeholder = "Enter Product Name"
    title.setAttribute("id", "title")
    //
    //
    let strikeP = cretel("input");
    strikeP.type = "text";
    strikeP.placeholder = "Strike Price"
    strikeP.setAttribute("id", "id_pro")
    //
    let price = cretel("input");
    price.type = "number"
    price.placeholder = "Enter Discounted Price "
    price.setAttribute("id", "price")
    //
    let amount = cretel("input");
    amount.type = "text"
    amount.placeholder = "Enter Discount %"
    amount.setAttribute("id", "amount")
    //
    let image = cretel("input");
    image.type = "text"
    image.placeholder = "Enter Image Url"
    image.setAttribute("id", "image")
    //
    let sub = cretel("button");
    sub.innerText = "Add Product"
    sub.addEventListener("click", () => {
        addPro()

    });



    div1.append(h1,brand, title,strikeP, amount,  price, image, sub)
});

let addPro = async () => {
    // let id1 = document.getElementById("id_pro")
    let obj = {
        brand: brand.value,
        name: title.value,
        strike_price:id_pro.value,
        discount: amount.value,
        price: +price.value,
        image_url: image.value,
    }
    let res = await fetch(`https://real-pink-pelican-boot.cyclic.app/product/add`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json",
            Authorization:`${localStorage.getItem("token")}`
        }
    })
    if(res.ok){
        let data=await res.json();
        console.log(data);
        alert("Product added successfully")
        
    window.location.href="Admin.backend.html"
    }

}










//update func

document.getElementById("updatpro").addEventListener("click", () => {
    let div1 = document.getElementById("main_2")
    div1.innerHTML = null;
    let h1 = cretel("h1");
    h1.innerText = "Update Product"


    let id1 = cretel("input");
    id1.type = "text";
    id1.placeholder = "Enter  ID";
    id1.setAttribute("id", "id_pro");

    let title = cretel("input");
    title.type = "text";
    title.placeholder = "Update Product Name";
    title.setAttribute("id", "title")

    let image = cretel("input");
    image.type = "text";
    image.placeholder = "Update Image Url";
    image.setAttribute("id", "image")

    let price = cretel("input");
    price.type = "text";
    price.placeholder = "Upadate Price ";
    price.setAttribute("id", "price")

    let sub = cretel("button");
    sub.innerText = "Update Product"
    sub.addEventListener("click", () => {
        updPro()
    });

    div1.append(h1, id1,title,image, price, sub)
});

let updPro = async () => {
    let id1 = document.getElementById("id_pro").value

    let obj = {
        
        price: price.value,
        name:title.value,
        price:price.value,
        image_url:image.value

    }
    let res = await fetch(`https://real-pink-pelican-boot.cyclic.app/product/update/${id1}`, {
        method: "PATCH",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json ",
            Authorization:`${localStorage.getItem("token")}`

        }
    })
    if(res.ok){
        let dat1 = await res.json();
        alert("Product Updated Successfully")
        window.location.href="Admin.html"
    }
    
}














//delete func


document.getElementById("delepro").addEventListener("click", () => {
    let div1 = document.getElementById("main_2")
    div1.innerHTML = null;
    let h1 = cretel("h1");
    h1.innerText = "Delete Product"


    let id1 = cretel("input");
    id1.type = "text";
    id1.placeholder = "Enter ID"
    id1.setAttribute("id", "id_pro");

    let sub = cretel("button");
    sub.innerText = "Delete Product"
    sub.addEventListener("click", () => {
        delePro()

    });
    id1.value = null
    div1.append(h1, id1, sub)
});



let delePro = async () => {
    let id1 = document.getElementById("id_pro").value
    let res = await fetch(`http://localhost:3500/product/delete/${id1}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json ",
            Authorization:`${localStorage.getItem("token")}`
        }
    })
    if(res.ok){
        let data = await res.json();
        console.log(data);
        alert("Product Deleted Successfully")
        window.location.href="Admin.backend.html"
    }else{
        alert("You are not Authorised")
    }
   

}



let cretel = (el) => {
    return document.createElement(el)
}

document.getElementById("redirect").addEventListener("click", () => {

    window.location.href = "products.html"
})

//navbar and footer

import {navbar,footer} from "../components/navbar.js"
 let nav_div=document.querySelector(".navbar");
 nav_div.innerHTML=navbar();
 
 let footer_div=document.getElementById("footer_div");
 footer_div.innerHTML=footer();
