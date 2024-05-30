import React from "react";
import styles from "./timeline.module.css";
import TimelineBox from "./TimelineBox/TimelineBox";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.timeline}>
          <TimelineBox
            year="2024"
            content="Member of the European Academy of Sciences and Arts"
          />
          <TimelineBox
            year="2023"
            content="The IEEE Fourier Award for Signal Processing"
          />
          <TimelineBox
            year="2020"
            content="International member of the (USA) National Academy of Engineering"
          />
          <TimelineBox
            year="2016"
            content="The (Centennial) UBC Faculty of Applied Science Dean's Medal of Distinction"
          />
          <TimelineBox
            year="2013"
            content="UBC Killam Award for Excellence in Mentoring recognizing outstanding mentorship of numerous graduate students over many years"
          />
          <TimelineBox
            year="2008"
            content="The highest award of IEEE Signal Processing Society, the &#34;Norbert Wiener Society Award&#34;. It honors outstanding technical contributions and outstanding leadership in the signal processing field"
          />
          <TimelineBox
            year="2007"
            content="The R.A. Machlachlan Award, the highest award of the Association of Professional Engineers in BC, emphasizing significant technical contributions and leadership to engineering &#34;that characterize the profession at its best&#34;"
          />
          <TimelineBox
            year="1999"
            content="The first woman in Electrical Engineering to become a Fellow of the Royal Society of Canada"
          />
        </div>
      </div>
    );
  }
}

export default Timeline;
