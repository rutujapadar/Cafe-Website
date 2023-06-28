import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import im1 from './component/img/tang.JPG';
import im2 from './component/img/cappu.JPG';
import im4 from './component/img/mocha.JPG';
import image1 from './component/img/Cold1.jpg';
import im5 from './component/img/americano.jpg';
import image3 from './component/img/java1.jpg';
import image4 from './component/img/white1.jpg';
import image5 from './component/img/cold2.jpg';
import image6 from './component/img/ChocolateMilkshake1.jpg';
import image7 from './component/img/rauch.jpg';
import image8 from './component/img/Greentea.jpg';
import image9 from './component/img/vanilla.jpg';
import image10 from './component/img/chilitoast.jpg';
import image11 from './component/img/nachos.jpg';
import image12 from './component/img/pohekabab.jpg';
import image13 from './component/img/japanesesandwiches.jpg';
import image14 from './component/img/sandwitch.jpg';
import image15 from './component/img/icecreamsand.jpg';
import image17 from './component/img/veggieparadise.webp';
import image18 from './component/img/mexicon.webp';
import image19 from './component/img/cheese_n_corn.webp';
import image20 from './component/img/twisted.jpg';
import image21 from './component/img/vegburger.jpg';
import image22 from './component/img/paneerroyalewrap.jpg';
import image23 from './component/img/applepie.jpg';
import image24 from './component/img/brownies.jpg';
import image25 from './component/img/pannacotta.webp';
import image26 from './component/img/c1.jpg';
import image27 from "./component/img/fruittart.jpg";
import image28 from "./component/img/chocolatechip.jpg";
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
        <img src={im1} alt='im1'></img>
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
        <img src={image1}></img>
        <div className="hehe">
           
            <h2>Cold Coffee</h2>
            <h6>Tall 354ml (354kcal)</h6>
            <h6>Our signature rich in flavour espresso blended with delicate vanilla flavour and milk to create a perfect cold coffee delight. An all time favourite. Allergen - Contains Milk</h6>
        </div>
        <div className="cart">
            <h4>₹362.25</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>
<div className="Cards">
    <div className="info">
<img src={im5}></img>
<div className="hehe">
           
           <h2>Caffe Americano</h2>
           <h6>SHORT(237 Ml) .0 kcal</h6>
           <h6>Café Americano is a popular that originated in the United States.To prepare a Café Americano, a shot or two of espresso is diluted with hot water, resulting in a larger volume of coffee.</h6>
       </div>
       <div className="cart">
           <h4>₹262.5</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={image3}></img>
    <div className="hehe">
           
           <h2>Java Chip Frappuccino</h2>
           <h6>TALL(354 ML) .392 kcal</h6>
           <h6>We blend mocha sauce and Frappuccino® chips with Frappuccino® roast coffee and milk and ice, then top with whipped cream and mocha drizzle to bring you endless java joy.</h6>
       </div>
       <div className="cart">
           <h4>₹ 367.50</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>

     <div className="Menu2">
<div className="Cards">
    <div className="info">
        <img src={image4}></img>
        <div className="hehe">
           
            <h2>White Chocolate Mocha</h2>
            <h6>HORT(237 ML) .252 kcal</h6>
            <h6>Our signature espresso meets white chocolate sauce and steamed milk, then is finished off with sweetened whipped cream in this white chocolate delight.</h6>
        </div>
        <div className="cart">
            <h4>₹ 330.75</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>
<div className="Cards">
    <div className="info">
<img src={image5}></img>
<div className="hehe">
           
           <h2>Cold Brew Black</h2>
           <h6>TALL(354 ML) .0 kcal</h6>
           <h6>Cold brew black is made by steeping coarsely ground coffee beans in cold or room temperature water for an extended period, typically 12 to 24 hours.</h6>
       </div>
       <div className="cart">
           <h4>₹357.00</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={image6}></img>
    <div className="hehe">
           
           <h2>Chocolate Milkshake</h2>
           <h6>TALL(354 ML) .PER SERVE (354 ml) - 632 Kcal</h6>
           <h6>A chocolate milkshake is a beverage made by blending chocolate ice cream or chocolate syrup with milk. It is a creamy and sweet drink that combines the flavors of chocolate and dairy. </h6>
       </div>
       <div className="cart">
           <h4>₹367.50</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>
     
     <div className="Menu4">
<div className="Cards">
    <div className="info">
        <img src={image7}></img>
        <div className="hehe">
           
            <h2>Rauch Blueberry Juice</h2>
            <h6>60kcal per 100ml</h6>
            <h6>Rauch Blueberry Juice is a beverage made from the juice of blueberries. It is a refreshing and flavorful drink that captures the natural sweetness and tartness of blueberries.</h6>
        </div>
        <div className="cart">
            <h4>₹ 280.00</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>

<div className="Cards">
    <div className="info">
<img src={image8}></img>
<div className="hehe">
           
           <h2>Green Tea Latte</h2>
           <h6>SHORT(237 ML) .171 kcal</h6>
           <h6>Green Tea Latte is a popular beverage made by combining green tea powder (matcha) with steamed milk. It originated in Japan and has gained worldwide popularity. </h6>
       </div>
       <div className="cart">
           <h4>₹299.25</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={image9}></img>
    <div className="hehe">
           
           <h2>Caramel Macchiato</h2>
           <h6>SHORT(237 ML) .162 kcal</h6>
           <h6>To create a Caramel Macchiato, the barista starts by adding a layer of caramel syrup to the bottom of a glass or cup. Then, they carefully pour freshly brewed espresso shots over the syrup.</h6>
       </div>
       <div className="cart">
           <h4>₹414.75</h4>
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
        <img src={image10}></img>
        <div className="hehe">
           
            <h2>Chilli Cheese Toast</h2>
            <h6>PER SERVE (140 g) - 471 Kcal</h6>
            <h6>Chili Cheese Toast is a popular and delicious snack or breakfast item that originated in India. It is made by topping a slice of bread with a flavorful mixture of grated cheese, chopped green chilies, and various spices.</h6>
        </div>
        <div className="cart">
            <h4>₹ 346.50</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>
<div className="Cards">
    <div className="info">
<img src={image11}></img>
<div className="hehe">
           
           <h2>Three Dip Nachos</h2>
           <h6>PER SERVE (180 g) - 513 Kcal</h6>
           <h6>Three Dip Nachos is a delicious appetizer or snack consisting of tortilla chips topped with three different dips. It includes melted cheese, salsa.The tortilla chips are arranged on a serving platter and generously covered with melted cheese.</h6>
       </div>
       <div className="cart">
           <h4>₹ 262.50</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={image12}></img>
    <div className="hehe">
           
           <h2>Poha Kebab</h2>
           <h6>Serving size (g/ml) - 116g/481kcal</h6>
           <h6>Pohe Kabab is made using The flattened rice is soaked in water to soften it and then mixed with mashed potatoes, finely chopped onions, green chilies, ginger, and an assortment of aromatic spices.</h6>
       </div>
       <div className="cart">
           <h4>₹ 199.50</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>

     <div className="Menu4">
<div className="Cards">
    <div className="info">
        <img src={image13}></img>
        <div className="hehe">
           
            <h2>Japanese Sandwiches</h2>
            <h6>PER SERVE (180 g) - 513 Kcal</h6>
            <h6>Japanese sandwiches, also known as "sandos," are a popular and unique culinary delight in Japan. They are made with soft, fluffy white bread called "shokupan" and come in various fillings.</h6>
        </div>
        <div className="cart">
            <h4>₹ 399.50</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>

<div className="Cards">
    <div className="info">
<img src={image14}></img>
<div className="hehe">
           
           <h2>Grilled Sandwitch</h2>
           <h6>Per Serve 120g (300kcal)</h6>
           <h6>Cheese sandwiches occupy the top line in the ranking of snacks. A great way to make them even better is to grill them in a frying pan so that the bread has a crispy crust and the cheese melts. </h6>
       </div>
       <div className="cart">
           <h4>₹ 299.50</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={image15}></img>
    <div className="hehe">
           
           <h2>Ice Cream Sandwich</h2>
           <h6>Per Serve 150g (200kcal)</h6>
           <h6>An ice cream sandwich is a delightful frozen treat made by placing a layer of ice cream between two cookies, wafers, or slices of cake. The ice cream is typically flavored, such as vanilla, chocolate. </h6>
       </div>
       <div className="cart">
           <h4>₹ 450.50</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>

     <div className="Menu4">
<div className="Cards">
    <div className="info">
        <img src={image17}></img>
        <div className="hehe">
           
            <h2>Veggie Paradise</h2>
            <h6>Veggie Paradise is a delightful dish that caters to vegetarian preferences. It typically consists of a medley of fresh and colorful vegetables, such as bell peppers, mushrooms, zucchini, broccoli, carrots, and more.</h6>
        </div>
        <div className="cart">
            <h4>₹459.00</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>

    <div className="Cards">
    <div className="info">
    <img src={image19}></img>
    <div className="hehe">
           
           <h2>Cheese n Corn</h2>
           <h6>Cheese n Corn is a popular combination that is loved by many food enthusiasts. It typically refers to a dish or snack that incorporates the flavors of cheese and sweet corn kernels. The dish often involves mixing cooked with  melted cheese.</h6>
       </div>
       <div className="cart">
           <h4>₹379.00</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

<div className="Cards">
    <div className="info">
<img src={image18}></img>
<div className="hehe">
           
           <h2>Mexican Green Wave</h2>
           <h6>Mexican Green Wave is a popular dish that captures the essence of Mexican cuisine. It is typically a vibrant and flavorful combination of ingredients such as avocados, jalapeños, cilantro, lime juice, and various other spices.</h6>
       </div>
       <div className="cart">
           <h4>₹459.00</h4>
           <button>Add</button>
       </div>
</div>
</div>


     </div>

     <div className="Menu4">
<div className="Cards">
    <div className="info">
        <img src={image20}></img>
        <div className="hehe">
           
            <h2>Twisted Whopper Veg</h2>
            <h6>The Twisted Whopper Veg features a flame-grilled vegetarian patty made from a blend of vegetables, grains, and spices. It is topped with fresh lettuce, tomatoes, onions, pickles, and a tangy sauce, all sandwiched  seed bun. </h6>
        </div>
        <div className="cart">
            <h4>₹219.00</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>

<div className="Cards">
    <div className="info">
<img src={image21}></img>
<div className="hehe">
           
           <h2>Cripsy Veg Burger</h2>
           <h6>The Crispy Veg Burger is a vegetarian burger that offers a delicious and crunchy experience. It typically features a breaded and fried vegetable patty made with a combination of vegetables such as potatoes, peas, carrots, and spices</h6>
       </div>
       <div className="cart">
           <h4>₹119.00</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={image22}></img>
    <div className="hehe">
           
           <h2>Panner Royale Wrap</h2>
           <h6>The Paneer Royale Wrap is a flavorful and satisfying vegetarian wrap option. It typically consists of succulent pieces of paneer that are marinated in a blend of aromatic spices, such as cumin, coriander, and turmeric. </h6>
       </div>
       <div className="cart">
           <h4>₹209.00</h4>
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
        <img src={image23}></img>
        <div className="hehe">
           
            <h2>Apple Pie</h2>
            <h6>Apple pie is a classic and popular dessert made with a sweet and flaky pastry crust filled with a mixture of sliced apples, sugar, and spices. It is typically baked until the crust is golden brown and the apples are tender.</h6>
        </div>
        <div className="cart">
            <h4>₹300.00</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>
<div className="Cards">
    <div className="info">
<img src={image24}></img>
<div className="hehe">
           
           <h2>Brownies</h2>
           <h6>Brownies are delicious and indulgent chocolate desserts loved by many. The main ingredients in brownies include chocolate or cocoa powder, butter, sugar, eggs, and flour. Brownies come in many variations, such as classic chocolate brownies.</h6>
       </div>
       <div className="cart">
           <h4>₹200.00</h4>
           <button>Add</button>
       </div>
</div>
</div>

<div className="Cards">
    <div className="info">
    <img src={image25}></img>
    <div className="hehe">
           
           <h2>Panna Cotta</h2>
           <h6>Panna cotta is a classic Italian dessert that is known for its smooth and creamy texture.The main ingredients in panna cotta include cream, sugar, and gelatin. Vanilla extract or other flavorings like citrus zest or coffee can be added for additional taste.</h6>
       </div>
       <div className="cart">
           <h4>₹309.00</h4>
           <button>Add</button>
       </div>
        </div>
        
    </div>

     </div>

     <div className="Menu4">
<div className="Cards">
    <div className="info">
        <img src={image26}></img>
        <div className="hehe">
           
            <h2>Cheesecake</h2>
            <h6>Cheesecake is a rich and creamy dessert that is loved for its smooth texture and delicious The filling is the star of the cheesecake and is made primarily from cream cheese, sugar, and eggs. Additional flavorings such as vanilla extract, lemon zest, or chocolate can be added for variety.</h6>
        </div>
        <div className="cart">
            <h4>₹169.00</h4>
            <button>Add</button>
        </div>
    </div>
    
    </div>

<div className="Cards">
    <div className="info">
<img src={image27}></img>
<div className="hehe">
           
           <h2>Fruit Tart</h2>
           <h6>A fruit tart is a delicious dessert made with a crisp pastry shell filled with a creamy custard or cream and topped with an assortment of fresh fruits.</h6>
       </div>
       <div className="cart">
           <h4>₹159.00</h4>
           <button>Add</button>
       </div>
</div>
</div>
<div className="Cards">
    <div className="info">
    <img src={image28}></img>
    <div className="hehe">
           
           <h2>Chocolate Chip Cookies</h2>
           <h6>Chocolate chip cookies are a classic and beloved treat enjoyed by people of all ages.Chocolate chip cookies are primarily made from ingredients such as flour, butter, sugar, eggs, vanilla extract, baking soda, and of course, chocolate chips.</h6>
       </div>
       <div className="cart">
           <h4>₹129.00</h4>
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
