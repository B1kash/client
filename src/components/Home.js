import React from 'react'
import Headerpic1 from '../Images/Header.jpg';
import Headerpic2 from '../Images/rhino.jpg';
import Headerpic3 from '../Images/assam1.jpg';

import '../App.css';

const Home = () => {
    return (
        <>
            
            
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Headerpic1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Tea Plantations</h1>
        <p>India is the 2nd largest producer after China</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Headerpic2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>One Horned Rhino</h1>
        <p>The Pride of Assam is the one Horned Rhino.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Headerpic3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Rivers and Valleys</h1>
        <p>The State of Assam comprised of two valleys namely the Brahmaputra and Barak Valley.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}

export default Home