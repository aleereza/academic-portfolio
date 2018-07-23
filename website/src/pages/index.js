import React from 'react'
//import Link from 'gatsby-link'
import styles from "./pages.module.css"
import mainpic from "../images/mainpic.jpg"

const IndexPage = () => (
  <div>
    <div className={styles.mainpicdiv}>
      <img className={styles.mainpic} src={mainpic}/>
    </div>
    <div className={styles.intro}>
      <p>
        Dr. Rabab K. Ward is a Professor Emeritus in the Electrical and Computer Engineering Department at the University of British Columbia (UBC), Canada. A Fellow of the Royal Society of Canada, among her more recent accolades she counts the UBC Applied Science Dean’s Medal of Distinction (2016) and the Killam Award for Excellence in Mentoring (2013). Dr. Ward’s research interests focus on the areas of signal, image, and video processing. Her contributions include signal detection; image encoding, compression, recognition, restoration, and enhancement; and their combined applications in cable TV, HDTV, medical imaging, infant cry signals, and brain computer interfaces. Dr. Ward has published upwards of 195 refereed journal papers, 335 refereed conference articles, and holds eight patents related to picture monitoring, measurement, and noise reduction concerning cable television. Dr. Ward has served as the 2016-2017 President of the IEEE Signal Procession Society, after formerly holding the position of Vice President (2003 – 2005), and Member of the Board of Governors (2003 – 2005; 2008 – 2010).
      </p>
    </div>
  </div>
)

export default IndexPage
