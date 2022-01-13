import React from 'react'
import "./Footer.css"



const Footer = () => {
    return (
        <div>
           <footer className="footer">
               <div className="container">
                   <div className="row">
<div className="footer-col">
<a href="#"  className="logo ft-1"> <i class="fas fa-paper-plane"></i> TRVL</a>
                       <p style={{color:"white" }}>"Planning to travel anytime soon? Subscribe to my email list for exclusive travel tips, hacks, and other resources to save time and money! "</p>
                          
                   <div class="box" data-aos="fade-up" data-aos-delay="150">
           
            
           <div class="share">
               <a href="#" class="fab fa-facebook-f"></a>
               <a href="#" class="fab fa-twitter"></a>
               <a href="#" class="fab fa-instagram"></a>
               <a href="#" class="fab fa-linkedin"></a>
           </div>
       </div>   
                       
</div>
                       
                       <div className="footer-col">
                       <h4>Quick Links</h4>
                       <ul>
                           <li><a href = "/">Home</a></li>
                           <li><a href = "/about">About</a></li>
                           <li><a href = "/things">Destinations</a></li>
                           <li><a href = "/event">Gallery</a></li>
                         <li><a href = "/contact">Contact</a></li>
                           <li><a href = "/term">Term&amp;Condition</a></li>
                           
                       </ul>
                       </div>

                   <div className="footer-col">
                       <h4>Our Address</h4>
               <ul>
                           <li><a href = "#"><i class="fas fa-map-marker-alt"></i> Bhubaneswar,Odisha-75101</a></li>
                           <li><a href = "#"><i class="fas fa-phone-alt"></i> 7683939162</a></li>
                            <li> <a href = "#"><i class="fas fa-envelope"></i> monalisamoharana99@gmail.com</a></li>
                           <li><a href = "#"><i class="fas fa-clock"></i> 7.00am-10.00pm</a></li>
                       </ul>
                   </div>

                   <div className="footer-col">
                       <h4>Newsletter</h4>
                       <p>subscribe for latest updates</p>
            <form action="">
                <input type="email" name="" placeholder="Enter your mail" class="email" id=""/>
                
                <button  class="btn btn-outline-danger" style={{ color:"blueviolet"}}>Subscribe</button>
            </form>
                   </div>
             

                   </div>
               </div>
           </footer>

<div class="credit">created by <span>Monalisa Moharana</span> | all rights reserved!</div>
        </div>
    )
}

export default Footer
