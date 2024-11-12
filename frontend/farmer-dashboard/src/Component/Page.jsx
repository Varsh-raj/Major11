import React from "react";
import Header from "./Header";
import "./Page.css"; // Consolidated CSS file for all components

const Page = () => {
  return (
    <>
     
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to FarmFresh</h1>
            <p>Your one-stop platform for farmers to sell crops directly to the market, eliminating middlemen for better prices and transparency.</p>
            <div className="buttons">
              <button onClick={() => alert("Explore feature coming soon!")}>Explore</button>
              <button onClick={() => alert("Learn More feature coming soon!")}>Learn More</button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h3>Step 1: Register Your Farm</h3>
              <p>Easy sign-up process to get started.</p>
            </div>
            <div className="step">
              <h3>Step 2: List Your Products</h3>
              <p>Showcase your produce directly to buyers.</p>
            </div>
            <div className="step">
              <h3>Step 3: Negotiate with Buyers</h3>
              <p>Communicate and set fair prices.</p>
            </div>
            <div className="step">
              <h3>Step 4: Receive Payments</h3>
              <p>Secure and fast payment transfer.</p>
            </div>
          </div>
        </section>

        {/*Product Listing Section*/}
    <section id="product-listing">
        <h2>Available Products</h2>
        <div class="product-grid" id="productGrid">
            {/* Product Item*/}

            <div class="product-item" data-type="vegetables">
                <img src="tomato.jpg" alt="Tomato"/>
                <h3>Tomatoes</h3>
                <p>Quantity Available: 200 kg</p>
                <p>Fresh organic tomatoes from local farms.</p>
                <button class="btn-know-more">Add To Cart</button>
            </div>
            <div class="product-item" data-type="fruits">
                <img src="apple.jpg" alt="Apple"/>
                <h3>Apples</h3>
                <p>Quantity Available: 150 kg</p>
                <p>Juicy and fresh apples harvested from orchards.</p>
                <button class="btn-know-more">Add To Cart</button>
            </div>
            <div class="product-item" data-type="grains">
                <img src="rice.jpg" alt="Rice"/>
                <h3>Rice</h3>
                <p>Quantity Available: 500 kg</p>
                <p>High-quality grains of rice, perfect for your meals.</p>
                <button class="btn-know-more">Add To Cart</button>
            </div>
            <div class="product-item" data-type="fruits">
                <img src="tomato.jpg" alt="Tomato"/>
                <h3>Tomatoes</h3>
                <p>Quantity Available: 200 kg</p>
                <p>Fresh organic tomatoes from local farms.</p>
                <button class="btn-know-more">Add To Cart</button>
            </div>
            <div class="product-item" data-type="fruits">
                <img src="apple.jpg" alt="Apple"/>
                <h3>Apples</h3>
                <p>Quantity Available: 150 kg</p>
                <p>Juicy and fresh apples harvested from orchards.</p>
                <button class="btn-know-more">Add To Cart</button>
            </div>
           
            {/*} Add more product items below*/}
        </div>
    </section>

        {/* Footer */}
        <footer>
          <div className="foot-pannel-1">Back to Top</div>

          <div className="foot-pannel-2">
            <div>
              <p>Get to Know Us</p>
              <ul>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>

            <div>
              <p>Connect with Us</p>
              <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#instagram">Instagram</a></li>
              </ul>
            </div>

            <div>
              <p>Payment Products</p>
              <ul>
                <li><a href="#products">Products</a></li>
                <li><a href="#services">Services</a></li>
              </ul>
            </div>
          </div>

          <div className="foot-pannel-4">
            <div className="pages">
              <a href="#conditions">Condition of Use</a>
              <a href="#privacy">Privacy Notice</a>
            </div>
            <div className="copyright">
              © 1996-2024, FarmConnect.com, Inc. or its affiliates
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Page;

