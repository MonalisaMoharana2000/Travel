import React,{useState} from 'react'
import Footer from './Footer';
import "./Things.css"
import styled from "styled-components";

const Container = styled.div`

  
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1640044262720-e198a086ac6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60")
      center;
  background-size: cover;
  
`;

    

const Things = () => {
    const[shows,setShow] = useState(false)
  const[display,setDisplay] = useState(false)
  
  const[exhibit,setExhibit] = useState(false)
  const[act,setAct] = useState(false)
  const[sample,setSample] = useState(false)
  const[front,setFront] = useState(false)
   const[expo,setExpo] = useState(false)
  const[shine,setShine] = useState(false)
  
  
    
    return (
        <Container>
            
                <div className="container">
                <h1>Our most Wanted Destinations !!!</h1>
              <center> <p>Visitors are spoiled for choice, with a range of attractions from<br /> museums and galleries, markets, sports, desert safaris by the spectacular<br /> Inland Sea or the UNESCO-listed Al Zubarah Fort. </p></center>
              </div>

              <section class="destination" id="destination">

    
    <div class="box-container">

        <div class="box" data-aos="fade-up" data-aos-delay="150">
            <div class="image">
                <img src="https://media.istockphoto.com/photos/young-woman-riding-bicycle-on-wooden-pier-in-the-maldives-picture-id1298306226?b=1&k=20&m=1298306226&s=170667a&w=0&h=pMdUiuUrYDwpLBq69acmj8YCLqTLtrcP3QO-kOyth0g=" alt=""/>
            </div>
            <div class="content">
                <h3>Tours & Travel</h3>
                {
                     shows?<p>We connect any brand with travelers and travel sellers all along the travel advertising ecosystem. Become the preferred choice for travel consumers when they are in an active state of mind; planning or enjoying their trip.</p>:null

                }

<p class = "para" onClick={()=>setShow(!shows)}>read more <i class="fas fa-angle-right"></i></p>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="300">
            <div class="image">
                <img src="https://media.istockphoto.com/photos/scenic-aerial-view-of-two-boats-on-sea-in-thailand-picture-id1136324597?b=1&k=20&m=1136324597&s=170667a&w=0&h=CCzSbAQX9oQh-04efEoP-hYnVjnBaVS0ZYV5398OPUs=" alt=""/>
            </div>
            <div class="content">
                <h3>Cruising</h3>
                {
                     display?<p>I’m on a boat 
                         We love big boats, and we can’t lie.

This is way more than a cruise.

This is more than a big boat.

Taste the delicious seafood with our cruise service.

The worlds’ most beautiful voyage.

The value of experience.

Experience the true form of luxury.</p>:null

                }
                <p class = "para" onClick={()=>setDisplay(!display)}>read more <i class="fas fa-angle-right"></i></p>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="450">
            <div class="image">
                <img src="https://media.istockphoto.com/photos/young-couple-in-snorkeling-mask-dive-underwater-in-tropical-sea-picture-id1282649181?b=1&k=20&m=1282649181&s=170667a&w=0&h=RPa9NWz3ONcwLG8_nJCUsMnvOrJrQHpgEqfyHyrOJPs=" alt=""/>
            </div>
            <div class="content">
                <h3>Scuba diving</h3>
               
                {
                     exhibit?<p>Dive in, the water is fine.
                     Stay calm and dive on.
                     You don't have to be crazy to scuba dive, but it helps!
                     Scuba diving is fun.
                     Get lost in the beauty of the underwater world. ...
                     Discover the magic underwater.
                     We change the world one dive at a time.
                     See how far you can go with scuba diving..</p>:null

                }
                <p class = "para" onClick={()=>setExhibit(!exhibit)}>read more <i class="fas fa-angle-right"></i></p>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="600">
            <div class="image">
                <img src="https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E=" alt=""/>
            </div>
            <div class="content">
                <h3>Sundown</h3>
               
                {
                     act?<p>Is there anything more peaceful then taking in the quiet beauty of the setting sun? As the sun descends below the horizon, creating romantic shades of red and orange across the sky, the world has a chance to breathe in and rejuvenate. While sunsets are a literal end to a day, they've also become symbols of peace, harmony, and the promise of renewal. </p>:null

                }
                <p class = "para" onClick={()=>setAct(!act)}>read more <i class="fas fa-angle-right"></i></p>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="750">
            <div class="image">
                <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbCUyMGlzbGFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            </div>
            <div class="content">
                <h3>Hiking</h3>
                
                {
                     sample?<p>The journey of a thousand miles begins with a single step.” – Lao Tzu.
                     “We don't stop hiking because we grow old, we grow old because we stop hiking.”
                     “When everything feels like an uphill struggle, think about the view from the top.”
                     “Without new experiences, something inside of us sleeps.</p>:null

                }
                <p class = "para" onClick={()=>setSample(!sample)} >read more <i class="fas fa-angle-right"></i></p>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="900">
            <div class="image">
                <img src="https://images.unsplash.com/photo-1523538290088-51e3e7d1c00d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbCUyMGlzbGFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            </div>
            <div class="content">
                <h3>Seaside</h3>
               
                {
                     front?<p>Come out! it’s beach time

                     It’s time to go for sunbath
                     
                     Be grateful for good mates, hot sun and clear water
                     
                     Relax! it’s beach time
                     
                     You would love that crazy sun of a beach
                     
                     Doesn’t matter, the beach is always love
                     
                     Memories made together on the beach lasts forever
                     
                     Life is for great vacations and beach
                     
                     Chill on the beach will make you happy
                     
                     Don’t worry! beach happy
                     
                     Love you to the beach and back.</p>:null

                }
                <p class = "para" onClick={()=>setFront(!front)}>read more <i class="fas fa-angle-right"></i></p>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="1150">
            <div class="image">
                <img src="https://images.unsplash.com/photo-1520483601560-389dff434fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbCUyMGlzbGFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            </div>
            <div class="content">
                <h3>The coast</h3>
                
                {
                     expo?<p>There's no place like the beach. It's the ultimate cure for whatever your heart is in need of: fun, relaxation, love or reflection. We can't quite explain it, but there's just something so magical about spending a summer day or night by the ocean.</p>:null

                }
                <p  class = "para" onClick={()=>setExpo(!expo)}>read more <i class="fas fa-angle-right"></i></p>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="1300">
            <div class="image">
                <img src="https://media.istockphoto.com/photos/friends-laughing-around-the-bonfire-on-the-beach-at-sunset-picture-id1181450953?b=1&k=20&m=1181450953&s=170667a&w=0&h=veqIAbau8H45nKz0kSNkGuL1PdR73PjG__KgWov1U1c=" alt=""/>
            </div>
            <div class="content">
                <h3>Outing</h3>
               
                {
                     shine?<p>Travelling is fun and it offer many unique experience. No matter even if you live in a vibrant city or have a very active social life, travelling can help you to be more satisfied. Visiting different places all around the world can help you see how people are living, what are their daily routines etc.</p>:null

                }
                <p class = "para" onClick={()=>setShine(!shine)}>read more <i class="fas fa-angle-right"></i></p>
            </div>
        </div>

    </div>

</section>
             

        <Footer/>    
              

        </Container>
      
  
      )
            
}

export default Things
