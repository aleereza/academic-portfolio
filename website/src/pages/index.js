import React from "react";
//import Link from 'gatsby-link'
import styles from "./pages.module.css";
import mainpic from "../images/mainpic.jpg";
import main1 from "../images/main1.jpg";
import Timeline from "../components/PageComponents/Timeline/Timeline";
import Button from "../components/PageComponents/Button/Button";
import CV from "../files/cvrababw.pdf";

const IndexPage = () => (
  <div>
    <div className={styles.container1}>
      <div className={styles.intro1}>
        <p>
          Dr. Rabab K. Ward is a Professor Emeritus in the Electrical and
          Computer Engineering Department at the University of British Columbia,
          Canada. She is the first woman appointed as professor in engineering
          in British Columbia. She has around 40 years of post-doctoral
          experience in education, research and leadership. Her research
          contributions are in broad areas of signal processing, including
          signal detection; image encoding, recognition, and restoration, and
          their applications in cable TV, HDTV, medical imaging, infant cry
          signals, and brain computer interfaces. Dr. Ward has published upwards
          of 230 refereed journal papers, 340 refereed conference articles, and
          holds eight patents related to monitoring, measurement, and noise
          reduction concerning cable television. Some of her work has been
          licensed to US and Canadian industry.
        </p>
        <p>
          She has supervised 47 Ph.D. and 50 Master students. She has served and
          provided leadership to IEEE and other professional societies. She was
          President of the IEEE Signal Processing Society (2016-2017) and IEEE
          Director Division 1X (2020-2021).
        </p>
        <p>
          <Button to={CV} filename="CV_Rabab_Ward.pdf">
            CV
          </Button>
        </p>
      </div>
    </div>
    <div className={styles.container2}>
      <div className={styles.intro2}>
        <p>
          Dr. Rabab K. Ward is a Professor Emeritus in the Electrical and
          Computer Engineering Department at the University of British Columbia,
          Canada. She is the first woman appointed as professor in engineering
          in British Columbia. She has around 40 years of post-doctoral
          experience in education, research and leadership. Her research
          contributions are in broad areas of signal processing, including
          signal detection; image encoding, recognition, and restoration, and
          their applications in cable TV, HDTV, medical imaging, infant cry
          signals, and brain computer interfaces. Dr. Ward has published upwards
          of 230 refereed journal papers, 340 refereed conference articles, and
          holds eight patents related to monitoring, measurement, and noise
          reduction concerning cable television. Some of her work has been
          licensed to US and Canadian industry.
        </p>
        <p>
          She has supervised 47 Ph.D. and 50 Master students. She has served and
          provided leadership to IEEE and other professional societies. She was
          President of the IEEE Signal Processing Society (2016-2017) and IEEE
          Director Division 1X (2020-2021).
        </p>
        <p>
          <Button to={CV}>CV</Button>
        </p>
      </div>
      <div className={styles.timelineheader}>
        <h3>Selected Honors</h3>
      </div>
      <div className={styles.timelinecontainer}>
        <Timeline />
      </div>
    </div>
  </div>
);

export default IndexPage;
