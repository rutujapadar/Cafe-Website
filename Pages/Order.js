import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import im1 from './img/tang.JPG';
import im2 from './img/cappu.JPG';
import im3 from './img/taco.JPG';
import im4 from './img/mocha.JPG';
import im5 from './img/americano.jpg';
import im6 from './img/bananan.jpg';
import im7 from './img/blueshake.jpeg';
import im8 from './img/cheesecake.JPG';
import im9 from './img/chocoshake.jpeg';
import im10 from './img/croissant.JPG';
import im11 from './img/donut.jpeg';
import im12 from './img/frappe.jpg';
import im13 from './img/fries.jpeg';
import im14 from './img/garlicbread.jpeg';
import im15 from './img/icedtea.jpeg';
import im16 from './img/italian.jpeg';
import im17 from './img/latte.webp';
import im18 from './img/loafcake.jpg';
import im19 from './img/mac.jpg';
import im20 from './img/macaroi.jpeg';
import im21 from './img/marghe.jpeg';
import im22 from './img/muffins.jpeg';
import im23 from './img/pesto.jpg';
import im24 from './img/pancake.jpeg';
import im25 from './img/redvelvet.jpeg';
import im27 from './img/toast.JPG';
import im28 from './img/aloopuff.jpg';
import im29 from './img/classic.jpg';
import im30 from './img/pasta.jpeg';
import im31 from './img/mojito.jpeg' 
import Header2 from "./Header2";

// import { Card } from 'react-card-component';
function Order(){
    return(

    <div className="MenuCon">
        <Header/>
        <Header2/>
        <div className="types">
<h3>-------Beverages-------</h3>
</div>
     <div className="Menu">
<div className="Cards">
    <div className="info">
        <img src={im1}></img>
        <div className="hehe">
           
            <h2>Peach Iced Tea</h2>
            <h6>250ml (400kcal)</h6>
            <h6>Incredibly simple 4-ingredient peach iced tea infused with real peaches and peach simple syrup. The perfect summer drink to sip by the pool.</h6>
        </div>
        <div className="cart">
            <h4>₹150</h4>
          
            <button>Add</button>
   
  
        </div>
    </div>
    
    </div>
    {/* <Card><div>HelloWorld</div></Card> */}
<div className="Cards">
    <div className="info">
<img src={im2}></img>
<div className="hehe">
           
           <h2>Cappucino</h2>
           <h6>250ml (400kcal)</h6>
           <h6>A cappuccino is an Italian coffee drink that is traditionally prepared with equal parts double espresso, steamed milk, and steamed milk foam on top. </h6>
       </div>
       <div className="cart">
           <h4>₹109</h4>
           <button>Add</button>
       </div>
</div>
</div>

<div className="Cards">
    <div className="info">
    <img src={im4}></img>
    <div className="hehe">
           
           <h2>Mocha</h2>
           <h6>200ml (400kcal)</h6>
           <h6> caffè mocha is based on espresso and hot milk but with added chocolate flavouring and sweetener, typically in the form of cocoa powder and sugar. </h6>
       </div>
       <div className="cart">
           <h4>₹129</h4>
           <button>Add</button>
       </div>
        </div>
        
     </div>

     </div>

     <div className="Menu2">
<div className="Cards">
    <div className="info">
        <img src={im5}></img>
        <div className="hehe">
           
            <h2>Citrus ale</h2>
            <h6>250ml (400kcal)</h6>
            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
        </div>
        <div className="cart">
            <h4>$200</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>
<div className="Cards">
    <div className="info">
<img src={im6}></img>
<div className="hehe">
           
           <h2>Cappucino</h2>
           <h6>Per Serve 160g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$150</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={im7}></img>
    <div className="hehe">
           
           <h2>Mexican Tacos</h2>
           <h6>Per Serve 200g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$20</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>

     <div className="Menu2">
<div className="Cards">
    <div className="info">
        <img src={im9}></img>
        <div className="hehe">
           
            <h2>Citrus ale</h2>
            <h6>250ml (400kcal)</h6>
            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
        </div>
        <div className="cart">
            <h4>$200</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>
<div className="Cards">
    <div className="info">
<img src={im12}></img>
<div className="hehe">
           
           <h2>Cappucino</h2>
           <h6>Per Serve 160g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$150</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={im15}></img>
    <div className="hehe">
           
           <h2>Mexican Tacos</h2>
           <h6>Per Serve 200g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$20</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>
     
     <div className="Menu4">
<div className="Cards">
    <div className="info">
        <img src={im17}></img>
        <div className="hehe">
           
            <h2>Citrus ale</h2>
            <h6>250ml (400kcal)</h6>
            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
        </div>
        <div className="cart">
            <h4>$200</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>

<div className="Cards">
    <div className="info">
<img src={im25}></img>
<div className="hehe">
           
           <h2>Cappucino</h2>
           <h6>Per Serve 160g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$150</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={im31}></img>
    <div className="hehe">
           
           <h2>Mexican Tacos</h2>
           <h6>Per Serve 200g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$20</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>

<div className="types1">
<h3>-------Food-------</h3>
</div>


     <div className="Menu3">

<div className="Cards">
    <div className="info">
        <img src={im13}></img>
        <div className="hehe">
           
            <h2>Citrus ale</h2>
            <h6>250ml (400kcal)</h6>
            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
        </div>
        <div className="cart">
            <h4>$200</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>
<div className="Cards">
    <div className="info">
<img src={im14}></img>
<div className="hehe">
           
           <h2>Cappucino</h2>
           <h6>Per Serve 160g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$150</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={im16}></img>
    <div className="hehe">
           
           <h2>Mexican Tacos</h2>
           <h6>Per Serve 200g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$20</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>

     <div className="Menu4">
<div className="Cards">
    <div className="info">
        <img src={im3}></img>
        <div className="hehe">
           
            <h2>Citrus ale</h2>
            <h6>250ml (400kcal)</h6>
            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
        </div>
        <div className="cart">
            <h4>$200</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>

<div className="Cards">
    <div className="info">
<img src={im20}></img>
<div className="hehe">
           
           <h2>Cappucino</h2>
           <h6>Per Serve 160g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$150</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={im21}></img>
    <div className="hehe">
           
           <h2>Mexican Tacos</h2>
           <h6>Per Serve 200g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$20</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>

     <div className="Menu4">
<div className="Cards">
    <div className="info">
        <img src={im23}></img>
        <div className="hehe">
           
            <h2>Citrus ale</h2>
            <h6>250ml (400kcal)</h6>
            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
        </div>
        <div className="cart">
            <h4>$200</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>

<div className="Cards">
    <div className="info">
<img src={im19}></img>
<div className="hehe">
           
           <h2>Cappucino</h2>
           <h6>Per Serve 160g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$150</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={im27}></img>
    <div className="hehe">
           
           <h2>Mexican Tacos</h2>
           <h6>Per Serve 200g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$20</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>

     <div className="Menu4">
<div className="Cards">
    <div className="info">
        <img src={im28}></img>
        <div className="hehe">
           
            <h2>Citrus ale</h2>
            <h6>250ml (400kcal)</h6>
            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
        </div>
        <div className="cart">
            <h4>$200</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>

<div className="Cards">
    <div className="info">
<img src={im29}></img>
<div className="hehe">
           
           <h2>Cappucino</h2>
           <h6>Per Serve 160g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$150</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={im30}></img>
    <div className="hehe">
           
           <h2>Mexican Tacos</h2>
           <h6>Per Serve 200g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$20</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>     


     <div className="types1">
<h3>-------Desserts-------</h3>
</div>

<div className="Menu3">

<div className="Cards">
    <div className="info">
        <img src={im8}></img>
        <div className="hehe">
           
            <h2>Citrus ale</h2>
            <h6>250ml (400kcal)</h6>
            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
        </div>
        <div className="cart">
            <h4>$200</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>
<div className="Cards">
    <div className="info">
<img src={im10}></img>
<div className="hehe">
           
           <h2>Cappucino</h2>
           <h6>Per Serve 160g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$150</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={im11}></img>
    <div className="hehe">
           
           <h2>Mexican Tacos</h2>
           <h6>Per Serve 200g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$20</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>

     <div className="Menu4">
<div className="Cards">
    <div className="info">
        <img src={im22}></img>
        <div className="hehe">
           
            <h2>Citrus ale</h2>
            <h6>250ml (400kcal)</h6>
            <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
        </div>
        <div className="cart">
            <h4>$200</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>

<div className="Cards">
    <div className="info">
<img src={im24}></img>
<div className="hehe">
           
           <h2>Cappucino</h2>
           <h6>Per Serve 160g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$150</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={im18}></img>
    <div className="hehe">
           
           <h2>Mexican Tacos</h2>
           <h6>Per Serve 200g (400kcal)</h6>
           <h6>amazing drink made up of dk something pls get it ok.i am sure you would love it ok pls huh i dont trust you but whatever</h6>
       </div>
       <div className="cart">
           <h4>$20</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>

    
           <Footer/>
    </div>
    );
}
export default Order;
