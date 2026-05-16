import React from "react";
import styles from "./pages.module.css";
import Timeline from "../components/PageComponents/Timeline/Timeline";
import HomeBio from "../components/PageComponents/HomeBio/HomeBio";

const IndexPage = () => (
  <div>
    <div className={styles.container1}>
      <div className={styles.intro1}>
        <HomeBio />
      </div>
    </div>
    <div className={styles.container2}>
      <div className={styles.intro2}>
        <HomeBio />
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
