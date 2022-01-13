import React from 'react';
import "./App.css";
import styled from "styled-components";
const Container = styled.div`
  
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1640011654969-5cebce51da09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60")
      center;
  background-size: cover;
  
`;

const Home = () => {
    return (
        <Container>
         <div className='hero-container'>
    <h1 >ADVENTURE AWAITS</h1>
     <p style = {{color:"black",fontSize:"35px"}}>ONE LIFE.</p>
    <p style = {{color:"black",fontSize:"35px"}}>ONE WORLD.</p>
    <p style = {{color:"black",fontSize:"35px"}}>EXPLORE It.</p> 
   <p style = {{color:"SteelBlue",fontSize:"80px" }} >  <i class="fas fa-paper-plane">TRVL</i></p>
      <button className='btn' style = {{backgroundColor:"cyan",marginTop:"-5px",paddingLeft:"20px"}}><a href = "/logonav" >GET STARTED</a></button>

</div> 


    
    
   
    
  </Container>
  

 
  


    )
}

export default Home
