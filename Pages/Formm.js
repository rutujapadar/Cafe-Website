import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import Header2 from './Header2'
import Header3 from './Header3'
import { useState } from 'react'

export default function Formm() {

  const [[name, setName], [email, setEmail], [contact, setContact]] = [
    useState('Byul'), useState("vaishchomu "),useState("0987823749")];
  
    function getData(e){
      let data=name;
      let data2=email;
      let data3=contact;
      e.preventDefault();
      
      // document.getElementById('name1').innerHTML = ;
      // document.getElementById('email1').innerHTML = ;
      // document.getElementById('contact1').innerHTML = data3;

      var table = document.getElementById("tab");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML =data;
      cell2.innerHTML = data2;
      cell3.innerHTML = data3;
    }
  return (
    <div className='formcon '>

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
              <div className='tab'>
              <table style={{marginLeft:'4%',marginTop:'4%',marginBottom:'4%'}} id='tab'>
          <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
          </tr>
         
        </table>
        </div>

        <Footer/>
    </div>
  )
}
