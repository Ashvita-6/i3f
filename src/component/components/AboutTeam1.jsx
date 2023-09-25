import React from "react";
import styles from './AboutTeam1.module.css';
import pk from './assets/director_pkjain.webp';
import ch from './assets/Dr.-P.-Chanak-1.webp';
import sg from './assets/Dr.-Shishir-Gaur-1.webp';
import sk from './assets/Dr.-Shyam-Kamal.webp';
import rs from './assets/Prof.-R.-S.-Singh-1.webp';
import rt from './assets/rajnesh_tyagi.webp';
import Navbar from "../header/navbar";
import Footer from "../footer2/footer";
function Abtteam1(){
    return(
        <div className={styles.abtt}>
          <Navbar />
            <h1>Managing Commitee</h1>
            <div  className={styles.gridcontainer}>
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="image" src={pk} />
  </div>
  
  <div  className="card-bottom">
    <span  className="top-text">Prof. P. K. Jain</span><br />
   <span  className="bottom-text">Director, IIT (BHU) Varanasi</span>
    <br />
  </div>
</div>

  </div>
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="image" src={rt} />
  </div>
   
  <div  className="card-bottom">
    <span  className="top-text">Prof. Rajnesh Tyagi</span><br />
   <span  className="bottom-text">Director, I3F, IIT (BHU) Varanasi</span>
    <br />
  </div>
</div>
  </div>
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="image" src={rs} />
  </div>
   
  <div  className="card-bottom">
    <span  className="top-text">Prof. R. S. Singh</span><br />
   <span  className="bottom-text"><p>Member</p><p>Dept. of Chemical Engineering, IIT (BHU) Varanasi</p></span>
    <br />
  </div>
</div></div>  
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="image" src={sg} />
  </div>
   
  <div  className="card-bottom">
    <span  className="top-text">Dr. Shishir Gaur</span><br />
   <span  className="bottom-text"><p>Member</p><p>Dept. of Civil Engineering, IIT (BHU) Varanasi</p></span>
    <br />
  </div>
</div>
  </div>
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="image" src={sk} />
  </div>
   
  <div  className="card-bottom">
    <span  className="top-text">Dr. Shyam Kamal</span><br />
   <span  className="bottom-text"><p>Member</p><p>Dept. of Electrical Engineering, IIT (BHU) Varanasi</p></span>
    <br />
  </div>
</div>
  </div>
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="image" src={ch} />
  </div>
   
  <div  className="card-bottom">
    <span  className="top-text">Dr. Prasenjit Chanak</span><br />
   <span  className="bottom-text"><p>Member</p><p>Dept. of Computer Science & Engineering, IIT (BHU) Varanasi</p></span>
    <br />
  </div>
</div></div>  
  
</div>
         <Footer />
        </div>



    )
}
    
export default Abtteam1;