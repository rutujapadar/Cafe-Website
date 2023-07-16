import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import Header2 from './Header2'
import Header3 from './Header3'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Order from './Order'
import Axios from 'axios';

export default function Formm() {
  

  const navigate = useNavigate();

  const navigateToOrder = () => {
    navigate('/Order');
  };
  
  
  const [[name, setName], [email, setEmail], [contact, setContact],[status,setStatus]] = [
    useState('Byul'), useState("vaishchomu "), useState("0987823749"),useState("")];

  function getData(e) {
    let data1 = name;
    let data2 = email;
    let data3 = contact;
    e.preventDefault();

   // mongo post
   let info = JSON.stringify({
    name:data1,
    email:data2,
    contact:data3
  });
   const ops = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data:info ,
    url:"/putData"
    };
   Axios(ops)
   .then((res)=>{
    if(res.status==200){
      toast("Success!",{position: toast.POSITION.BOTTOM_CENTER})
    }
   })

    // mysql post
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name: data,email: data2, contact: data3 })
    // };
    // fetch('/addUser', requestOptions)
    // .then((response)=>{
    //  if(response.status==200){
    //   response.json();
    //   toast("Success!",{position: toast.POSITION.BOTTOM_CENTER})
    //  }
      
    // })


      // .then(response => response.json())
      // .then(data => this.setState({ status: data.status }));
      
      //   if (status == 200) {
      //     alert("IsertedSuccessfully");
      //   }
        
      
      
   
    //.then(data => this.setState({ postId: data.id }));
    // document.getElementById('name1').innerHTML = ;
    // document.getElementById('email1').innerHTML = ;
    // document.getElementById('contact1').innerHTML = data3;

    // var table = document.getElementById("tab");
    // var row = table.insertRow(1);
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // cell1.innerHTML = data;
    // cell2.innerHTML = data2;
    // cell3.innerHTML = data3;
  }
  return (
    <div className='formcon '>

      <Header />
      <Header3 />
      <div className='formbg'>
        <h3>Welcome To Bella Italia</h3>
        <form onSubmit={getData}>
          <h2>Register</h2>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(e) => setName(e.target.value)}
          required/>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email" placeholder="Email.." onChange={(e) => setEmail(e.target.value)
            }
          required/>
          <label htmlFor="contact">Contact</label>
          <input type='number' id="fname" name="firstname" maxLength="10" placeholder="contact.." onChange={(e) => setContact(e.target.value)}
            required/>
{/* onClick={navigateToOrder} */}
          <input type="submit" defaultValue="Submit" id='sub' />
          <ToastContainer />
        </form>
      </div>
     

      <Footer />
    </div>
  )
}
