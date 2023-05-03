import React from 'react';
import '../styles/TopHeader.css'

function TopHeader() {
    return (

      <nav className="firstnav">
        <a href="https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_3bysgj3dbc_e&adgrpid=59248868592&hvpone=&hvptwo=&hvadid=486399289420&hvpos=&hvnetw=g&hvrand=8627087004008315900&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007741&hvtargid=kwd-317924426332&hydadcr=5622_2175700&gclid=CjwKCAiAoL6eBhA3EiwAXDom5j_LB56hZtL9FrQpa3KP3Y2OTQSFhp92oGgiscvleg73nonMZitvDhoCNi8QAvD_BwE"><img src="./1622736066_amazon-logo_story.jpg" alt="" width="80px" /></a>
        <a href="#">
          <div id="iconAndDelivery">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true" />
            </div>
            &nbsp;
            &nbsp;
            <div className="deliverToIndia">
              <div id="g">Greetings!</div>
              <div id="c">Choose your address</div>
            </div>
          </div>
        </a>
        <div className="search-box">
          <select>
            <option selected="selected">All </option>
            <option>Alexa Skills</option>
            <option>Amazon Devices</option>
            <option>Amazon Fashion</option>
            <option>Amazon Pharmacy</option>
            <option>Appliances</option>
            <option>Apps &amp; Games</option>
            <option>Baby</option>
            <option>Beauty</option>
            <option>Books</option>
            <option>Car &amp; Motorbike</option>
            <option>Clothing &amp; Accessories</option>
            <option>Collectibles</option>
            <option>Computers &amp; Accessories</option>
            <option>Deals</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Garden &amp; Outdoors</option>
            <option>Gift Cards</option>
            <option>Grocery &amp; Gourmet Foods</option>
            <option>Health &amp; Personal Care</option>
            <option>Home &amp; Kitchen</option>
            <option>Industrial &amp; Scientific</option>
            <option>Jewellery</option>
            <option>Kindle Store</option>
            <option>Luggage &amp; Bags</option>
            <option>Luxury Beauty</option>
            <option>Movies &amp; TV Shows</option>
            <option>Music</option>
            <option>Musical Instruments</option>
            <option>Office Products</option>
            <option>Pet Supplies</option>
            <option>Prime Video</option>
            <option>Same-Day Delivery</option>
            <option>Shoes &amp; Handbags</option>
            <option>Software</option>
            <option>Sports, Fitness &amp; Outdoors</option>
            <option>Subscribe &amp; Save</option>
            <option>Tools &amp; Home Improvement</option>
            <option>Toys &amp; Games</option>
            <option>Under ₹500</option>
            <option>Video Games</option>
            <option>Watches</option>
          </select>
          <input placeholder="Search Amazon.in" type="text" />
          <a href="#" id="stupida">
            <i className="fa fa-search" />
          </a>
        </div>
        <div className="flagAndLanguage">
          <div className="flag">
            <img src="./flag.webp" alt="" width="30px" height="15px" srcSet />
          </div>
          <div>EN</div>
          <div className="language">
            <a href><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg></a>
          </div>
        </div>
        <div className="sigin">
          <a href="#">
            <div className="hello">Hello, sign in</div>
            <div className="account">
              <p>Accounts &amp; Lists<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg></p>
            </div>
          </a>
        </div>
        <a className="returns" href="#">
          <div>Returns &amp;</div>
          <div className="orders">Orders</div>
        </a>
        <i className="fa fa-shopping-cart" style={{fontSize: '22px'}} />
      </nav>
    );
  }

  export default TopHeader;