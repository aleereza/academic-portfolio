import React from "react";
import styles from "./pages.module.css";

import youtube_icon from "../images/icons/youtube_icon_red.png";

const BiographyPage = () => (
  <div className={styles.pagecontainer}>
    <p>
      Dr. Rabab K. Ward is a Professor Emeritus in the Electrical and Computer
      Engineering Department at the University of British Columbia (UBC),
      Canada. She is Fellow of the Royal Society of Canada, the Institute of
      Electrical and Electronics Engineers, the Canadian Academy of Engineers,
      and the Engineering Institute of Canada. She has received many awards for
      her academic, research, service and leadership. Her research interests
      focus on the areas of signal, image, and video processing. Her
      contributions include signal detection; image encoding, compression,
      recognition, restoration, and enhancement; and their combined applications
      in cable TV, HDTV, medical imaging, infant cry signals, and brain computer
      interfaces. Dr. Ward has published upwards of 230 refereed journal papers,
      335 refereed conference articles, and holds eight patents related to
      picture monitoring, measurement, and noise reduction concerning cable
      television. Applications of her work have been transferred to U.S. and
      Canadian industries. She is the inventor of non-intrusive measurement
      methods for TV video impairments (licensed to Hewlett-Packard, 1995) and
      co-inventor of a non-interfering video system for measuring size and
      biomass of fish in cages and Tanks (licensed to J. B. Thompson and
      Associates, 1997).
    </p>
    <p>
      Dr. Ward has served as the 2016-2017 President of the IEEE Signal
      Procession Society, after formerly holding the position of Vice President
      (2003 – 2005), and Member of the Board of Governors (2003 – 2005; 2008 –
      2010). She was also the co-chair of the IEEE Signal Processing Society’s
      flagship conferences :ICASSP (2013) and ICIP (2000), as well as the vice
      chair of the IEEE International Symposium on Circuits & Systems (2004) and
      the chair of the IEEE ISSPIT (2006) and SPS MMSP( 2012)
    </p>
    <p>
      She was the Principal Investigator of the $24.2 million CFI/BCKDF award:
      an award which results in the construction of a new building at UBC to
      house the most modern equipment available in the study of all areas
      concerning human centered technologies.
    </p>

    <ul>
      <li>
        <strong className={styles.biostrong}>
          As a good will ambassador for women
        </strong>{" "}
        in STEM fields (focusing on engineering), Dr. Ward is one of the
        founders of the Society for Canadian Women in Science & Technology.
        Under the guidance of her and her peers, the society has successfully
        introduced programs to support high school girls with mathematics, as
        well as provide hands-on experience with science and technology. Dr.
        Ward has also presented countless times to elementary and high schools
        on the power of engineering.
      </li>
      <li>
        <strong className={styles.biostrong}>
          As a good will ambassador for engineering
        </strong>
        , she has taken an active role in raising the awareness and increasing
        the appreciation of engineering by the public. She has
        co-directed/co-produced digital material surrounding “signal processing”
        – her field of expertise in engineering. The following are six of Dr.
        Ward’s frequently used videos that have been extensively used to attract
        student to the filed:
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=EErkgr1MWw0">
              <img className={styles.youtube_icon} src={youtube_icon} /> What is
              Signal Processing?
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=MFsxuO8HC7k">
              <img className={styles.youtube_icon} src={youtube_icon} /> Signal
              Processing and Machine learning
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=Vcii84n7piw&t=2s">
              <img className={styles.youtube_icon} src={youtube_icon} /> Under
              the Radar
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=NRRzs0bB0a0">
              <img className={styles.youtube_icon} src={youtube_icon} />{" "}
              Multimedia Forensics
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=T0VPjHwrc-o&t=6s">
              <img className={styles.youtube_icon} src={youtube_icon} /> Signal
              Processing in Free Viewpoint Television
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=yKEkqqBvaIo">
              <img className={styles.youtube_icon} src={youtube_icon} /> The
              Benefits of Spoken Language Technologies
            </a>
          </li>
        </ul>
      </li>
    </ul>

    <h1>A Pioneering Woman in engineering</h1>
    <p>
      Dr. Ward was the first woman appointed as a professor in engineering in
      both British Columbia and Zimbabwe. She was also the first woman to become
      a member of the Lebanese Professional Engineering Society, and the second
      woman to get her PH.D. in Electrical Engineering at the University of
      California, Berkley.
    </p>
    <p>
      Dr. Ward is the only woman recipient of the IEEE SPS “Society Award” – the
      highest award possible – for outstanding technical contributions and
      leadership. She was also the first woman to win the RA Machlachlan Award:
      the highest award offered by the Association of Professional Engineers in
      BC, emphasizing significant technical contributions, and leadership, in
      engineering. Dr. Ward was also the first woman in Electrical Engineering
      to become a Fellow of the Royal Society of Canada (1999) – one of only
      three people selected from the engineering and applied science category.
    </p>

    <h1>Recognition by Popular Print and Broadcast Media</h1>
    <ul>
      <li>
        Much of Dr. Ward’s research has been showcased in various magazines,
        journals and newsletters.
        <ul>
          <li>
            Her work on facial image compression was featured in the ASI Journal
            (April 1995), and written about in the Vancouver Province newspaper
            (April 1995).
          </li>
          <li>
            Her work on video compression was featured in Future Vision (Spring
            1996).
          </li>
          <li>
            Her work on improving TV picture quality was featured in UBC PATSCAN
            News (Fall 1993), Future Vision (Autumn 1993), UBC FOCUS (Spring
            1994; Fall 1991), Cablecaster (2001) and Tele-com (Aug. 1996). The
            latter is a popular US electronics magazine.
          </li>
          <li>
            Articles about Dr. Ward’s research on baby crying signals were
            published in UBC Reports; Chatelaine; The Vancouver Sun; and Family
            Practices, a magazine commonly found in the waiting rooms of medical
            doctors’ offices.
          </li>
          <li>
            Dr. Ward was featured in two radio interviews in the popular CBC
            programs, Quirks and Quarks and Early Edition (1996).
          </li>
        </ul>
      </li>
      <li>
        Various other projects were highlighted in the following:
        <ul>
          <li>The Vancouver Sun (February 2007)</li>
          <li>Innovation Magazine (February 2007)</li>
          <li>Focus Newsletter (2006; 2007)</li>
          <li>UBC Reports (April 1996)</li>
          <li>A 30-minute TV feature by Al-Jazeera (2003)</li>
          <li>A 30-minute program on the Canadian CTV Channel (1999)</li>
          <li>
            A 30-minute TV program on the Canadian Multicultural Channel (2005)
          </li>
        </ul>
      </li>
    </ul>

    <h1>Other Work and Information</h1>
    <ul>
      <li>
        Dr. Ward was appointed as one among a 12 scientist committee to advise
        Her Highness Sheika Mozah – Head of the Qatar Foundation – on
        establishing and promoting scientific research in Qatar (2006 – 2008).
        She was a member of the UBC Committee that planned the Kuwait Institute
        for Business and Technology (2001 – 2004). She was also the UBC VPRI
        special advisor on collaboration with the Middle East. Dr. Ward has also
        led the IEEE Tab Committee on Africa and Education.
      </li>
      <li>
        She was the chief scientist of “Ward Laboratories Inc.”: a spin-off
        company bearing her name (1993 – 2006). The company signed an agreement
        with UBC to license patents and information, developed by Dr. Ward and
        her associates, relating to cable television picture-quality monitoring,
        measurement, and noise reduction.
        <ul>
          <li>
            Helwitt-Packard holds an exclusive license for her invention (See:
            Patent #6) for a non-intrusive method of testing of cable TV
            performance and allowing cable TV operators (for the first time) to
            measure picture quality of TV pictures without interrupting program
            transmission.
          </li>
        </ul>
      </li>
      <li>
        Dr. Ward’s work on reducing noise in television and video signals
        attracted leading, international companies to observe and appraise the
        prototypes the Doctor and her students had developed.
        <ul>
          <li>
            Vice-Presidents and engineers from companies Scientific Atlanta,
            Level I, Sanyo, Sony, Cannon, Daikin, RainMaker, Midnet, MDSI,
            Sierra Consulting Ltd., Rogers Cable TV, Shaw Cable TV, JB Thompson
            & Assoc. Ltd., Hewlett Packard, TCI, Equator, Mosaid, Pioneer and
            General Instruments visited her lab (1995 – 2005).
          </li>
          <li>
            Although several other industries and universities had been working
            on similar prototypes, the products developed by Dr. Ward exceeded
            all other prototypes, including those of Sony, Panasonic and
            Intelvideo in both quality and cost range.
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default BiographyPage;
