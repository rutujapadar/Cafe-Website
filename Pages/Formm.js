import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Header2 from './Header2'

export default function Formm() {
  return (
    <div>

        <Header/>
        <Header2/>
        <div className='formbg'>
          <h3>Welcome To Bella Italia</h3>
          <form>
            <h2>Register</h2>
            <label htmlFor="fname">Username</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label htmlFor="lname">Email</label>
            <input
              type="text"
              id="lname"
          
              placeholder="Email.."
            />
            <label htmlFor="fname">Password</label>
            <input type="text" id="fname" name="firstname" placeholder="Password.." />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
        <Footer/>
    </div>
  )
}
