import React from "react";
import styles from './AboutI3f.module.css'
import Navbar from "../header/navbar"
import Footer from "../footer2/footer"
function Abti3f(){
    return(
        <div>

            <Navbar />
            <div className={styles.democontent}>
                {/* <div className="header"> */}
                <h1 className={styles.h1}>ABOUT I3F</h1>
                {/* </div> */}
        <p className={styles.intro}>
        Ideation Innovation & Incubation (I-3) Foundation (I3F), a section 8 company is an umbrella organization at IIT (BHU), Varanasi for fostering an entrepreneurial ecosystem and nurturing start-ups. It provide ‘Start to Scale’ support for entrepreneurship and facilitates research activities to convert into commercial ventures.</p><br></br>
        <h2 className={styles.header}>Our Mission:</h2><br></br>
        <p className={styles.content}>Identifying, exploring, and developing regional competitiveness, enhancing links between universities and research institutions, and contributing to the growth and success of emerging technology businesses.</p><br></br>
        <h2 className={styles.header}>Our Vision:</h2><br></br>
        <p className={styles.content}>Contributing to raising the GDP of our National Economy through Entrepreneurship, – initiating start-ups and supporting SMEs in the East UP region.</p><br></br>
        <h2 className={styles.header}>Our Objectives:</h2><br></br>
        <p className={styles.content}>I3F has been established with the following objectives-</p><br></br>
        <div  className={styles.points}>
        <li>
        a. To promote entrepreneurship among students and society in the region
        </li>
        <li>b. To create a support system for Innovation-based enterprises/start-ups</li>
        <li>c. To encourage technology transfer and commercialization.</li>
        <li>d. To sustain job creation and support the “Make in India” Model</li>
        <li>e. To provide R & D support to SMEs of the region and business incubators</li>
        <li>f. To forge a close linkage between new business & academia R & D</li>
        </div>
        <br></br>
        <h2 className={styles.header}>Our Services:</h2>
        <br></br>
        <div  className={styles.points}>
        <li>a. Technical due-diligence</li>
        <li>b. Training Programs</li>
        <li>c. Mentoring</li>
        <li>d. Legal advice</li>
        <li>e. IP Creation & Protection</li>
        <li>f. Funding Support</li>
        <li>g. Networking support</li>
        </div>
        </div>

        <Footer />
        </div>
        
    )
}

export default Abti3f;