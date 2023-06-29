import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import Header2 from './Header2'
import Header3 from './Header3'
import { useState } from 'react'

export default function Formm() {

  const [[name, setName], [email, setEmail], [contact, setContact]] = [
    useState('Byul'), useState("vaisgheh"),useState("0987823749")];
  
    function getData(e){
      let data=name;
      let data2=email;
      let data3=contact;
      e.preventDefault();
      
      console.log(data,data2,data3);
    }
  return (
    <div>

        <Header/>
        <Header3/>
        <div className='formbg'>
          <h3>Welcome To Bella Italia</h3>
          <form  onSubmit={getData}>
            <h2>Register</h2>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."  onChange={(e) => setName(e.target.value)}
        />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"placeholder="Email.."  onChange={(e) => setEmail(e.target.value)
              }
              />
            <label htmlFor="contact">Contact</label>
            <input type='number' id="fname" name="firstname" maxlength="10" placeholder="contact.."  onChange={(e) => setContact(e.target.value)}
       />
 
            <input type="submit" defaultValue="Submit"/>
          </form>
        </div>
        <Footer/>
    </div>
  )
}
