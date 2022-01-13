import React from 'react'
import Footer from './Footer';
import "./Event.css"
import styled from "styled-components";
const Container = styled.div`
  
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1639929472244-788ff1e70caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60")
      center;
  background-size: cover;
  
`;

const Event = () => {
    return (
        <Container >
            <h1>Our Gallery</h1>
            <section class="gallery" id="gallery">

    <div class="heading">
        
        <h1>we record memories</h1>
    </div>
    
    <div class="box-container">

        <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
            <img src="https://media.istockphoto.com/photos/mature-couple-relax-on-sailboat-moving-through-lake-lugano-picture-id1291612564?b=1&k=20&m=1291612564&s=170667a&w=0&h=U4C64eA0a0PEhSrcVIJVU0_7S7axUg5hM5GBb9qJ1pM=" alt=""/>
            <span>travel spot</span>
            <h3>Iceland</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
            <img src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
            <span>travel spot</span>
            <h3>Greenland</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
            <img src="https://media.istockphoto.com/photos/luxury-cruise-travel-on-the-yacht-romantic-honeymoon-vacation-for-picture-id1291033397?b=1&k=20&m=1291033397&s=170667a&w=0&h=FoPQ-RlOjFNmrrjaKCgypLxB0G6-HRClWLeCZbkIy6k=" alt=""/>
            <span>travel spot</span>
            <h3>Alaska</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
            <img src="https://media.istockphoto.com/photos/no-better-adventure-buddy-picture-id1265024528?b=1&k=20&m=1265024528&s=170667a&w=0&h=dkMNYEClHGiirlYaunBhW_bkc8GWtQ-zQf9piL-6nA4=" alt=""/>
            <span>travel spot</span>
            <h3>Thailand</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
            <img src="https://media.istockphoto.com/photos/winter-day-by-fireplace-picture-id1281269245?b=1&k=20&m=1281269245&s=170667a&w=0&h=X_7fS1l4caC0Rahv3A-Hqc4XeuPH2ykHKAHQ1GSumnc=" alt=""/>
            <span>travel spot</span>
            <h3>Brazil</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
            <img src="https://images.unsplash.com/photo-1550399504-8953e1a6ac87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            <span>travel spot</span>
            <h3>Maldive</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
            <img src="https://images.unsplash.com/photo-1566371486490-560ded23b5e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmFjYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            <span>travel spot</span>
            <h3>Iceland</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
            <img src="https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmFjYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            <span>travel spot</span>
            <h3>Alaska</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
            <img src="https://images.unsplash.com/photo-1613425653628-23fd58c3c2b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
            <span>travel spot</span>
            <h3>Maldive</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwZ2F0aGVyaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
            <span>travel spot</span>
            <h3>GOA</h3>
        </div>

        
    </div>

</section>
<Footer/>
</Container >
    )
}

export default Event
