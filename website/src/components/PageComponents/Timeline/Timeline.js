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
            year="2022"
            content="Recipient of the IEEE Fourier Award for Signal Processing."
          />
          <TimelineBox
            year="2020"
            content="Elected as a Foreign Fellow of the USA National Academy of Engineering."
          />
          <TimelineBox
            year="2016"
            content="Recipient of the (Centennial) UBC Faculty of Applied Science Dean’s Medal of Distinction."
          />
          <TimelineBox
            year="2013"
            content="The Killam Awards for Excellence in Mentoring recognize outstanding mentorship of numerous graduate students over many years."
          />
          <TimelineBox
            year="2008"
            content="The highest award of IEEE Signal Processing Society, the &#34;Society Award&#34;. It honors outstanding technical contributions and outstanding leadership in the signal processing field."
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
