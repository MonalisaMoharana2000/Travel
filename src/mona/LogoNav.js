import React from 'react';
import Footer from '../Footer';
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

const LogoNav = () => {
    return (
        <Container>
        
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner"  >
    <div class="carousel-item active" >
      <img src="https://source.unsplash.com/1400x500/?nature,sea" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/1400x500/?nature,scubadiving" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/1400x500/?nature,mountain" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<h1>Check out these EPIC Destinations</h1>
<div className = "container">
<div className="row">
    <div className="col">
        <div class="card" style={{width: "18rem"}}>
  <img src="https://images.unsplash.com/photo-1519830103773-4bdc5166a0db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVuZ2xlJTIwd2F0ZXJmYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Explore the hidden waterfall deep inside the jungle .</h5>
    <label>Adventure</label>
  </div>
</div> </div>

    <div className="col">
        <div class="card" style={{width: "18rem"}} >
  <img src="https://media.istockphoto.com/photos/young-woman-riding-bicycle-on-wooden-pier-in-the-maldives-picture-id1298306226?b=1&k=20&m=1298306226&s=170667a&w=0&h=pMdUiuUrYDwpLBq69acmj8YCLqTLtrcP3QO-kOyth0g=" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Travel through the Islands of Bali in a Private Cruise .</h5>
    <label>Adventure</label>
  </div>
</div></div>

    <div className="col">
        <div class="card" style={{width: "18rem"}}>
  <img src="https://media.istockphoto.com/photos/red-mars-like-landscape-in-wadi-rum-desert-jordan-this-location-was-picture-id1281287664?b=1&k=20&m=1281287664&s=170667a&w=0&h=JxOR3BtsiDiFwg96l1bVhhtFiMTIbiZ2fBOJut8PI-w=" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Ride through the Sahara desert on a guided camel Tour .</h5>
    <label>Adventure</label>
    
  </div>
</div></div>
   
    </div>


</div>
<Footer/>
        </Container>
    )
}

export default LogoNav
