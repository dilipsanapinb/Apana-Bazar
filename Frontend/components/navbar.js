const navbar=()=>{
    return `<div id="navbar">
    <div id="logo_nav">
        <img id="logo_img" src="https://www.linkpicture.com/q/Apana-Bazar-Logo.jpg" alt="">
    </div>
    <div id="search_nav">
        <div id="hamberger_div">
            <div id="cat_links">
                <ul> <a href="grocery.html"><button>Grocery</button></a></ul>
                <ul> <a href=""><button>Home Decore</button></a></ul>
                <ul> <a href=""><button>Jwellery</button></a></ul>
                <ul><a href=""><button>Furniture & Elecronics</button></a></ul>
                <ul> <a href=""><button>Entertainment</button></a></ul>
                <ul><a href=""><button>Beauty & Health</button></a></ul>
                <ul><a href=""><button>Travel & Hollidays</button></a></ul>
            </div>
            <!-- <a href="javascript:void(0)" class="icon" "><i class="fa-solid fa-bars"> Shop By Category</i></a> -->
            <i class="fa-solid fa-bars" onclick="myhambFunction()"> Shop By Category</i>
        </div>
        <div id="search_inp">
            <div id="inp">
                <input type="text" name="" id="inp_search_inp" placeholder="Search For Products Brand & Category">
            </div>
            <div id="search_icon">
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div id="order_div">
            <div id="myorders">
                <button id="orders_btn"><i class="fa-sharp fa-solid fa-bag-shopping fa-2x"><span></span></i>  My Orders</button>
            </div>
            <div id="cart_value">
                <button id="my_cart_btn"><i class="fa-sharp fa-solid fa-bag-shopping fa-2x"></i> MY CART </button><span id="myCartPrice"><p>&#8377 0.00</p></span>
            </div>
            <div id="sign_login">
                <div id="btn3_div">
                    <button id="btn3"><p id="admin_name">My Account</p></button>
                    <div class="dropdown-content">
                    <button id="login_page">Login</button>
                    <button id="admin_login">Admin Login</button>
                    <button id="admin_logout">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
}

const footer=()=>{
    return `<div id="footer">
    <div id="footer_nav">
        <div id="btn_t_ft">
            <button>About Us</button>
            <button>Parter with us</button>
            <button>Terms & Conditions</button>
            <button>Blog</button>
            <button>Media</button>
            <button>24x7 Help</button>
            <button>Grievance polcy</button>
            <button>Bug bounty</button>
            <button>Return/Cancelation policy</button>
        </div>
        <div id="icons_t_ft">
            <div id="real_btns">
                <i class="fa-sharp fa-solid fa-apple-whole fa-lg"></i>
            <i class="fa-sharp fa-solid fa-pipe fa-lg"></i>
            <i class="fa-sharp fa-solid fa-mobile-screen fa-lg"></i>
            <i class="fa-sharp fa-solid fa-pipe"></i>
            <i class="fa-sharp fa-solid fa-laptop fa-lg"></i>
            <i class="fa-brands fa-square-twitter fa-lg"></i>
            <i class="fa-brands fa-square-facebook fa-lg"></i>
            <i class="fa-brands fa-square-google-plus fa-lg"></i>
            <i class="fa-sharp fa-solid fa-image fa-lg"></i>
            </div>
            
        </div>
    </div>
    <div id="cards_nav">
                <div id="payment_logo">
                    <img src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" alt="">
                </div>
                <div id="ftr_admn">
                    <div id="ftr_seller"><p>Become Seller</p></div>
                    <div id="ftr_wallet"><p>Payment Services</p></div>
                </div>
    </div>
    <div id="footer_btns">
        <div id="p_div">
            <h5>From Electronics, Fashion to Cars: Buy Everything Online from the Convenience of Your Home from Paytm Mall</h5>
        </div>
        <div id="btns_ft_div">
            <div id="abc">
                <div><button>Electronics <i class="fa-sharp fa-solid fa-sort-down fa-lg"></i></button></div>
                <div><button>Men's Fashion <i class="fa-sharp fa-solid fa-sort-down fa-lg"></i></button></div>
                <div><button>Stationaery <i class="fa-sharp fa-solid fa-sort-down fa-lg"></i></button></div>
            </div>
            <div id="abc">
                <div><button>Mobiles <i class="fa-sharp fa-solid fa-sort-down fa-lg"></i></button></div>
                <div><button>Home & Kitchen <i class="fa-sharp fa-solid fa-sort-down fa-lg"></i></button></div>
                <div><button>Travel Cards <i class="fa-sharp fa-solid fa-sort-down fa-lg"></i></button></div>
            </div>
            <div id="abc">
                <div><button>Car & Bike <i class="fa-sharp fa-solid fa-sort-down fa-lg"></i></button></div>
                <div><button>Baby,Kids &Toys <i class="fa-sharp fa-solid fa-sort-down fa-lg"></i></button>
                </div>
                <div></div>
            </div>
            <div id="abc">
                <div><button>Super Market <i class="fa-sharp fa-solid fa-sort-down fa-lg"></i></button></div>
                <div><button>Car & Bike Accessories <i class="fa-sharp fa-solid fa-sort-down fa-lg"></i></button></div>
                <div></div>
            </div>
        </div>
    </div>
</div>`
}

export{navbar,footer}