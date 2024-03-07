import React from "react";
import styles from "./Home.module.css"

const Home = ()=>{
    return (
        <div style={{backgroundColor: "black", padding: "3rem 0"}}>
        <div className={styles.container}> 
            <div className={styles.leftContainer}>
                <h2 style={{textAlign: "center"}}>International Conference on Application of Science, Engineering and Application</h2>
                <p style={{margin: "2px 0"}}>Organized by: Computer Technology and Computer Science and Engineering</p>
                <p>Yeshwantrao Chavan College of Engineering, Hingna, Nagpur, Maharashtra, India</p>
            </div>
            <div className={`${styles.leftContainer} ${styles.scrollable}`}>
            
            </div>
        </div>
        </div>
    )
}
export default Home