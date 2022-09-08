import React from "react";
function Header()
{
    return(
        <div className="header">
            <div className="logo">
                TravelGo
            </div>
            <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Packages</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Destinations</a></li>
            </ul>
            <div className="Cartlogo">
                
                <i class="fa-solid fa-cart-shopping"></i>
                <span> </span>
            </div>
            </nav>
        </div>
    );
}
export default Header;