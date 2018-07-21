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
        Dr. Rabab K. Ward is a Professor Emeritus in the Electrical and Computer Engineering Department at the University of British Columbia (UBC), Canada. She is Fellow of the Royal Society of Canada, the Institute of Electrical and Electronics Engineers, the Canadian Academy of Engineers and the Engineering Institute of Canada. She has received the UBC Applied Science Dean’s Medal of Distinction (2016), Killam Award for Excellence in Mentoring (2013), Career Achievement Award of CUFA, BC, the organization representing all professors and academic staff at BC's doctoral universities (2011), UBC Engineering Co-op Faculty Member of the Year Award (2010), the IEEE Signal Processing Society top award "The Society Award" (2008), the YWCA Woman of Distinction Award (2008), British Columbia's top engineering award "The RA McLachlan Memorial Award" (2006) and UBC Killam Research Prize (1998).
      </p>
    </div>
  </div>
)

export default IndexPage
