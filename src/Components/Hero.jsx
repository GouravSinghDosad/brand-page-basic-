const HeroSection = () =>{
    return(
      <main className="hero container">
          <div className="hero-content">
             <h1>YOUR FEET DESERVES THE BEST</h1>
             <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Dolores porro totam 
                laudantium ab quae, commodi voluptas 
                architecto, temporibus dolor enim 
                necessitatibus explicabo, officia qui 
                earum soluta vero fugiat ut delectus?</p>

              <div className="hero-btn">
              <button>Shop Now</button>  
              <button className="sceond-btn">Category</button>
              </div>

              <div className="shopping">
                <p>available on</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="amazon-flipkart" />
                </div>
              </div>  
          </div>


          <div className="hero-image">
            <img src="/images/shoe_image.png" alt="show-img" />
          </div>
      </main>
    );
}

export default HeroSection;