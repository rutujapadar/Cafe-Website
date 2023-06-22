import React from "react";
import im1 from './img/cappu.JPG';
import im2 from './img/taco.JPG';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Testimonials(){
    return(

	<div>
    <h3 style={{marginTop:'21%',marginLeft:'6%',fontSize:'23px',fontFamily:'kanit',color:'#033539'}}>Our Reviews</h3>
     <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div className="testcon">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not be
                distracted by a social media element on the same site
              </p>
            </div>
          </div>
          <div><h1 style={{color:'white'}}>hh</h1></div>
          <div>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          <div className="myCarousel">
            <h3>Shirley Feultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        </div>

        <div className="testcon">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not be
                distracted by a social media element on the same site
              </p>
            </div>
          </div>
          <div><h1 style={{color:'white'}}>hh</h1></div>
          <div>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          <div className="myCarousel">
            <h3>Shirley Feultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        </div>

        <div className="testcon">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not be
                distracted by a social media element on the same site
              </p>
            </div>
          </div>
          <div><h1 style={{color:'white'}}>hh</h1></div>
          <div>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          <div className="myCarousel">
            <h3>Shirley Feultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        </div>
      </Carousel>
  </div>
  

    );
}
export default Testimonials;
