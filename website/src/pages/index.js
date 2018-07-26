import React from 'react'
//import Link from 'gatsby-link'
import styles from "./pages.module.css"
import mainpic from "../images/mainpic.jpg"
import Timeline from "../components/PageComponents/Timeline/Timeline"
import Button from "../components/PageComponents/Button/Button"
import CV from "../files/cvrababw.pdf"

const IndexPage = () => (
  <div>
    <div className={styles.mainpicdiv}>
      <img className={styles.mainpic} src={mainpic}/>
    </div>
    <div className={styles.intro}>
      <p>Dr. Rabab K. Ward. Is Professor Emeritus in the Electrical and Computer Engineering Department at the University of British Columbia, Canada. She is the first woman appointed as professor in engineering in British Columbia. She has around 40 years of post-doctoral experience in education, research and leadership. Her research contributions  are in broad areas of signal processing, including signal detection; image encoding, recognition, and restoration, and their applications in cable TV, HDTV, medical imaging, infant cry signals, and brain computer interfaces. Dr. Ward has published upwards of 195 refereed journal papers, 335 refereed conference articles, and holds eight patents related to monitoring, measurement, and noise reduction concerning cable television. Some of her work has been licensed to US and Canadian industry. She has supervised 43 Ph.D. and 50 Master students. She has served and provided leadership to IEEE and other professional societies .She was the 2016-2017 President of the IEEE Signal Processing Society,  and Member of its Board of Governors (2003 – 2005; 2008 – 2010).
      </p>
      <Button to={CV}>My CV</Button>
    </div>
    <div className={styles.timelineheader}>
      <h2>Selected Honors</h2>
    </div>
    <div className={styles.timelinecontainer}>
      <Timeline/>
    </div>
  </div>
)

export default IndexPage
