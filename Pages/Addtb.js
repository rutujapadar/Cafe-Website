import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Header3 from "./Header3";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import im1 from './img/cappu.JPG'
import { useNavigate, useParams } from "react-router-dom";
import {useSelector} from "react-redux"
import{ DLT }from "../redux/actions/action"
import{ REMOVE }from "../redux/actions/action"
import {useDispatch} from "react-redux"
import{ ADD }from "../redux/actions/action"

function Addtb() {
  const [data,setData]=useState([]);
    
const history= useNavigate()

  //  useEffect(()=>{
  //   //fetch("https://jsonplaceholder.typicode.com/users/1")
  //   fetch("/getOrder")
  //   .then((result)=>result.json())
  //   .then((data)=>setUser(data));
  //       },[] 
  //  )
  // "proxy": "http://localhost:8005",

  // useEffect(()=>{
  //   fetch("/getUser")
  //   .then((res)=>res.json())
  //   .then((data)=>setUser(data.data))
  // },[])

  // const qtyInc = async()=>{
  //  alert(data.quantity)
  // }

  const {id} = useParams()
  const dispatch = useDispatch()
  const getData= useSelector((state)=>state.cartreducer.carts)

  const compare = () => {
let comparedata = getData.filter((e) => {
return e.id == id
});
setData(comparedata);

}

useEffect (() => { compare();
}, [id])

const dlt = (id) => {
dispatch (DLT (id));
history("/");
}

const remove = (item) => {
dispatch(REMOVE(item))
}

const send=(e)=>{

  dispatch(ADD(e));
}

  return (
    <div >
        <Header/>
        <Header3/>
        <h3 style={{fontFamily:'kanit',marginLeft:'70px',textDecoration:'underline'}}>
      Order Details
        </h3>
        <div className='cartTitle'>
          <h4>Item</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
          <h4>Total</h4>
        </div>
        <div>
          {data.map((dataObj,index)=>{
            return (
              <Card sx={{ maxWidth:750,display:'flex',height:"100px",margin:"35px 60px"}}>
              
              <CardMedia
                sx={{ width:100,height:"80px",margin:"10px"}}
                image={dataObj.img} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography gutterBottom variant="h6" component="div">
                   {dataObj.name}
                  </Typography>
                  <Typography variant="body3" color="text.secondary" >
                   {dataObj.desc}
                  </Typography>
                  
                </CardContent>
              </Box>
              <CardActions>
              
                <Button size="small">-
                </Button>
                <Typography variant="body1" color="text.primary">
                 {dataObj.qty}
                  </Typography>
                <Button size="small">+</Button>
                
              </CardActions>
              <CardContent sx={{marginTop:'20px'}}>
              <Typography variant="body1" color="text.secondary">
                  ₹{dataObj.price}
                  </Typography>
             
              </CardContent>
              <CardContent sx={{marginTop:'20px',marginLeft:'50px'}}>
              <Typography variant="body1" color="text.primary">
                  ₹{dataObj.price*dataObj.qty}
                  </Typography>
             
              </CardContent>
            </Card>
             )
          })}
       
        </div>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         
        <Footer/>
    </div>
  );
}

export default Addtb;
