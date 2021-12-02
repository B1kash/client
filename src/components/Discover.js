import React from 'react'
import kamakhya from '../Images/gykama.png';
import Headerpic2 from '../Images/rhino.jpg';
import gycity from '../Images/ghy.jpg';
import majuli from '../Images/majuli.png';
import sivsasagar from '../Images/sivsasagar.png';
import kakochang from '../Images/kako.jpg';


import '../App.css';


const Discover = () => {
    return (
   <>
        <div>
            <h1 class="dishead">Discover</h1>
        </div>
        <div class="container">
  <div class="row">
    <div class="col">
    <img src={kamakhya} class="w-100" alt=""></img>
    <div class="description">

    <h2>Kamakhya Temple</h2>
    <p>It is situated in the heart of the city Guwahati</p>
    <a href="https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/guwahati/kamakhya-temple.html"><button>Read More</button></a>
    </div>
    </div>
    <div class="col">
    <img src={Headerpic2} class="w-100" alt=""></img>
    <h2>Kaziranga National Park</h2>
    <p>The Assam Kaziranga National Park has the rare One Horned Rhino and the Orchids </p>
    <a href="https://www.incredibleindia.org/content/incredibleindia/en/destinations/kaziranga/kaziranga-national-park.html"><button>Read More</button></a>
    </div>
    <div class="col">
    <img src={gycity} class="w-100" alt=""></img>
    <h2>Guwahati</h2>
    <p>The beautiful city of Assam which act as the Gateway to the North East</p>
    <a href="https://www.incredibleindia.org/content/incredibleindia/en/destinations/guwahati.html"><button>Read More</button></a>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <img src={majuli} class="w-100" alt=""></img>
    <h2>Majuli</h2>
    <p>It is the world's largest river island and it attracts tourists from all over the world. </p>
    <a href="https://www.incredibleindia.org/content/incredibleindia/en/destinations/majuli.html"><button>Read More</button></a>
    </div>
    <div class="col">
    <img src={sivsasagar} class="w-100" alt=""></img>
    <h1>Sivsagar</h1>
    <p>Sibsagar is a historically important part of Assam, lying East of Jorhat.</p>
    <a href="https://www.incredibleindia.org/content/incredibleindia/en/destinations/sibsagar.html"><button>Read More</button></a>
    </div>
    <div class="col">
    <img src={kakochang} class="w-100" alt=""></img>
    <h2>Kakochang Waterfalls</h2>
    <p>The Kakochang Waterfall is located 13 km from Bokakhat in the Golaghat District of Assam.</p>
    <a href="https://www.incredibleindia.org/content/incredibleindia/en/destinations/kaziranga/kakochang-waterfalls.html"><button>Read More</button></a>
    </div>
    </div>
</div>

</>
    )
   
}

export default Discover