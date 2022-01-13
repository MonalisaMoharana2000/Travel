import React from 'react'

import "./About.css"
import logo from "./mona/munu.jpg"
import mona from "./mona/mona.jpg";
import raja from   "./mona/raja.jpg"


import styled from "styled-components";
import Footer from './Footer';
const Container = styled.div`
  
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1639222564901-a95fefa63311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60")
      center;
  background-size: cover;
  
`;

function About() {
    return (
        <Container >
            <div className='full-desc'>
            <div className="abttitle"><h2>About Our TRVL </h2></div>

<div className="desc">
         
         


            <p>“Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Organization Name’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.</p>
           <p> We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.</p>
           <p>Through our exceptionally curated occasion bundles, we need to take you on an adventure where you personally enjoy the stunning magnificence of America and far-off terrains. We need you to observe sensational scenes that are a long way past your creative ability.</p>
            <p>The powerful inclination of American voyagers to travel more nowadays is something that keeps us inspired to satisfy our vacation necessities. Our vision to give you a consistent occasion encounter makes us one of the main visit administrators in the regularly extending travel industry.</p>
            <p>To guarantee that you have a satisfying occasion and healthy encounters, all our vacation administrations are available to your no matter what. On your universal occasion, we guarantee that you are very much outfitted with outside trade (Forex Cards, Currency Notes), visa, and travel protection.</p>
           <p> We are the pioneers of outside trade in America and booking forex online is basic and advantageous with us.</p>

<p>Our online visa administrations are exceptional and make the bulky procedure of booking visas a cake stroll for clients. We likewise give exceptional visa, forex, and travel protection and outside settlement administrations for understudies voyaging abroad for study.</p>
<p>Regardless of whether it’s reserving flights or inns for your movement, COmpany Name offers everything under one umbrella. We likewise have journey occasions for individuals who are searching for solace and reasonable extravagance.</p>

<p>We offer the best limits on our top-rated visit bundles to clients who pick our viable administrations over and over. How about we remind you indeed that we don’t expect to be your visit and travel specialists; we endeavor to be your vacation accomplices until the end of time.</p>

</div>
          
          
          <div className="row">
            <div className="team"><h2>Our Team Member</h2></div>
            <div className="col-md-4">
<div className="card" style={{
    backgroundColor:"black",
 

top:'50%',
left:'50%',
transform:'translate(-50%,-50%)',
width:'300px',
minHeight:'400px' ,}}>
            <div className="box">
            <div className="img">
            <img src={logo} title="Dhanes" />
            </div>
            <h2>Dhaneswar Seth<br/><span>UI Designer</span></h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et.</p>
          
            <div class="share">
               <a href="https://www.facebook.com/dhanes.munu.96" class="fab fa-facebook-f"></a>
               <a href="https://twitter.com/setha_dhaneswar" class="fab fa-twitter"></a>
               <a href="https://www.instagram.com/dhanesmunu/" class="fab fa-instagram"></a>
               <a href="https://www.linkedin.com/in/dhaneswar-setha-737279224/" class="fab fa-linkedin"></a>
           </div>
           
            </div>
            </div>
            </div>


            <div className="col-md-4">
            <div className="card" style={{
                 backgroundColor:"black",
               

top:'50%',
left:'50%',
transform:'translate(-50%,-50%)',
width:'300px',
minHeight:'400px' ,}}>
            <div className="box">
            <div className="img">
            <img src={mona} title="Mona" />
            </div>
            <h2>Monalisa Moharana<br/><span>ReactJS Developer</span></h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et.</p>
            <div class="share">
               <a href="#" class="fab fa-facebook-f"></a>
               <a href="#" class="fab fa-twitter"></a>
               <a href="#" class="fab fa-instagram"></a>
               <a href="#" class="fab fa-linkedin"></a>
           </div>
            </div>
            </div>
            </div>

            <div className="col-md-4">
            <div className="card" style={{
             backgroundColor:"black",

top:'50%',
left:'50%',
transform:'translate(-50%,-50%)',
width:'300px',
minHeight:'400px' ,}}>
            <div className="box">
            <div className="img">
            <img src={raja}itle="Raja" />
            </div>
            <h2>Raja Sahoo<br/><span>Project Manager</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et.</p>
            <div class="share">
               <a href="#" class="fab fa-facebook-f"></a>
               <a href="#" class="fab fa-twitter"></a>
               <a href="#" class="fab fa-instagram"></a>
               <a href="#" class="fab fa-linkedin"></a>
           </div>
           
            </div>
            </div>
            </div>

            </div>
            </div>
            <Footer/>
            </Container>

    )
}

export default About
