import React from "react";
import Research from "../components/PageComponents/Research/Research";
import styles from "./pages.module.css";

class ResearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.pagecontainer}>
        <h1>Areas of special interest and accomplishments</h1>
        <p>
          My research has mainly focused on the field of Signal Processing,
          dealing with the analysis, interpretation, and manipulation of signals
          that represent observable quantities. An unexhaustive list of these
          signals include audio, video, speech, image, geophysical, sonar,
          radar, medical, musical and communication. My research involves
          solving real-life issues using signal processing theories and
          techniques.
        </p>
        <h1>My Research Areas Include</h1>
        <h2>1. Processing of Images</h2>
        <Research
          title="Image restoration and enhancement"
          content="Amongst my work involving the restoration of noisy images blurred by different types of blur, my major contributions addressed random, time-varying blur and the restoration of stellar image"
        />
        <Research
          title="Measuring the biomass and swimming speed of fish such as salmon:"
          content="By processing underwater video and images taken from fish hatcheries, we ameliorated the need to destroy the fish when measuring their mass."
        />
        <Research
          title="Automated Face recognition:"
          content="Face Recognition that draws from a vast pool of stored faces and images, extracting a profile that most resembles a new facial image – these images usually varies in pose and illumination."
        />
        <h2>2. Medical Image Processing</h2>
        <Research
          title="Mammography (breast X-ray images):"
          content="Assisting radiologists in detecting cancer as early as possible."
        />
        <Research
          title="Blood Cells:"
          content="Using microscopy to accurately measure red and white blood-cell count."
        />
        <Research
          title="Measuring the Length of Every Telomere in Every Chromosome:"
          content="Using fluorescent microscopy to identify the lengths of telomeres (and determine individual longevity)."
        />
        <Research
          title="MRI Imaging:"
          content="Reducing the time a patient has to endure during MRI imaging."
        />
        <Research
          title="CT Scans:"
          content="Reducing the (X-ray) radiation dose a patient is exposed to during image data capture."
        />
        <h2>3. Processing of Video Signals</h2>
        <Research
          title="Automatic monitoring, measurement and testing of cable television:"
          content="Allows cable operators to test and measure viewers’ picture quality without having to interrupt program transmissions."
        />
        <Research
          title="Digital video compression and encoding for transmission and storage purposes:"
          content="Involve removing picture “blockiness” and other compression artifacts; enhancing video pictures to be more appealing to viewers; enlarging  and resizing images; and enabling viewers to interact with live TV programs (interactive TV)."
        />
        <Research
          title="Information Management and Security in Internet Media-Sharing Social Networks:"
          content="Concerns the protection of multimedia intellectual property rights and enhancing security; managing digital media objects and supporting automated network-service monitoring."
        />
        <h2>4. Processing of 1-dimensional Signals:</h2>
        <Research
          title="Brain–Computer Interface Systems:"
          content="To enable people to carry a simple task such as moving a wheel chair forward or backward by using their bran signals only ( i.e. by thinking only)."
        />
        <Research
          title="Automatic Detection and Prediction of seizures suffered by patients with epilepsy by using their brain EEG signals:"
          content="1- Using photoplethysmogram (PPG) signals, to determine the stage of hypertension (high blood pressure): normotensive, prehypertensive, and hypertensive. 2- Developing foundational technology for understanding spoken language, Web search, information retrieval for Internet search engine."
        />
        <Research
          title="A system that estimates the level a baby’s level of distress from cry signals alone:"
          content="Deaf parents typically alternate sleeping/watching infants at night. This system measures the distress in a baby’s cries and awakens parents if the distress surpasses a specified threshold, and differentiates between crying and cooing."
        />
        <Research
          title="Estimating the glottal waves and the vocal-tract area functions:"
          content="These estimates are needed in natural speech synthesis, pathology, recognition; and in language training."
        />
        <p>
          Early on, I worked on Modelling and Estimation of Systems and applied
          them to building an Econometric Model to forecast the electricity
          demand in Zimbabwe. My resulting program was adopted by the Zimbabwe
          Electricity Supply Commission.
        </p>
        <h1>Sample Projects</h1>
        <Research
          title="Computed tomography (CT):"
          content="developing sparsity-based algorithms for image reconstruction from a small number of noisy projection measurements. (i.e. by  using smaller X-Ray radiation exposure). Several algorithms that exploited the sparsity, self-similarity, and smoothness of the CT projections were developed. They effectively suppress noise without blurring the true measurements and remove streak artifacts from CT images. These artifacts are prevalent in CT images and can harm their diagnostic value."
        />
        <Research
          title="Developing   Deep Learning methods"
          content="for 1) Sentence modelling for web search & information retrieval to improve search engines, 2) Reconstruction methods for distributed compressive sensing and 3) Speech recognition."
        />
        <Research
          title="Developing asynchronous Brain Computer Interface systems:"
          content="The ultimate aim is to use the EEG as a direct communication channel to the real world from the brain of a person with severe motor disabilities. This is achieved by analyzing a person's EEG signal to detect whether or not it contains an activity relating to the person's intention to control his/her environment or a device."
        />
        <Research
          title="Fast Magnetic Resonance Imaging:"
          content="Magnetic Resonance Imaging (MRI) is a versatile medical imaging modality. It can produce very high-quality images without biological side-effects. This is, however, a slow imaging modality. There has been physics (hardware) based and signal processing (software) based acceleration techniques to speed-up MR acquisition times. Our research is driven by recent advances in Compressed Sensing. By collecting less data (than required by traditional MRI techniques) and reconstructing the images using smart Compressed Sensing algorithms, we cut-down on data acquisition times. We focus on the following areas on MR Imaging in particular:"
        >
          <ul>
            <li>
              Single slice MR imaging from single and multiple K-space scans
            </li>
            <li>Quantitative MR imaging</li>
            <li>
              Combining signal processing and physics-based techniques for
              parallel MRI
            </li>
            <li>Dynamic MRI</li>
          </ul>
        </Research>
        <Research
          title="Content based multimedia fingerprinting:"
          content="This project addresses copy detection and copyright protection in multimedia sharing websites. The aim is to develop algorithms that can identify whether a query video has been copied from an existing video within a larger video database. This approach is called “fingerprinting”. The approach extracts unique, compact signatures from a video that should help identify the video and any number of permutations from the original. We have identified two major challenges with this approach in relation to the necessary algorithms: the design of the fingerprinting algorithm, and the accompanying search algorithm, both of which must work in tandem to, correctly and efficiently, identify unique fingerprints from a larger fingerprint database."
        />
        <Research
          title="Information hiding and quality monitoring using watermarking"
          content="Data hiding is commonplace in secret communications between two parties. To achieve this, a secret, binary message is inserted, imperceptibly, into the content. This message, for example, could be the identification number of the content owner. The receiving side needs to extract this hidden information as accurately as possible. We have adopted watermarking as a technique to provide a blind measure of quality of service (QoS) in multimedia communications. The watermarks are embedded into the original image on the transmitter side. The image quality is estimated at the receiver side by extracting the watermark from the received image and comparing it with the original watermark."
        />
        <Research
          title="Human activity recognition in real videos: "
          content="This project aims at recognizing human action under occlusion, scale, and viewpoint changes. The task has proved challenging as we work with videos collected from YouTube, movies, and TV broadcasts, among others."
        />
        <Research
          title="Digital image interpolation:"
          content="Digital Image Interpolation, also know as image enlargement/reduction, has found a wide variety of applications: the advertising industry, digital cameras, and video compression, among others. Content-adaptive and Wavelet-based Image Interpolation are also developed. Our efforts have been directed to finding efficient methods for edge enhancement, removing edge zig-zagging, and solving contrast loss after image enlargement."
        />
        <Research
          title="Image-based face recognition invariant to pose, illumination, and facial expression variations:"
          content="The approaches are based on wavelet transform and principal component analysis to normalize illumination variation and extract more salient features to facilitate the face recognition task."
        />
        <Research
          title="Reversible integer-to-integer wavelet/sub and transforms in the context of JPEG-2000 standardization effort."
          content=""
        />
        <h1>Invited Lectures </h1>
        <ul>
          <li>
            Speaker at the PROGRESS (Promoting Diversity in Signal Processing
            workshop) In AbuDhabi November 2020, and Toronto, June 2021.
          </li>
          <li>
            Speaker about Women in engineering at the IEEE Board of Governors
            meeting, February 2019.
          </li>
          <li>
            Invited Lecture “Multimedia, Brain-Computer Interfaces and Medical
            Instrumentation: Dispatches of a Pioneer Woman in Engineering Across
            Continents” UBC Senior Scholars Lecture Series, December 2017.
          </li>
          <li>
            Keynote speaker: The Fifth International Conference on Electronic
            Devices, Systems and Applications, RAK, United Arab Emirates, Dec
            6-8, 2016
          </li>
          <li>
            Invited Speaker: Emerging topics in Signal Processing, IEEE Section
            in Muscat, Oman, Dec. 2016
          </li>
          <li>
            Invited Speaker: Deep Learning and applications, IEEE Buenos Aires
            Section, Argentina and in IEEE Santiago, Chile, January 2016.
          </li>
          <li>
            Keynote Speaker: Emerging Applications in Signal Processing in the
            “Visual Signal Analysis and Processing” workshop, Abu Dhabi,
            November 9-10, 2015.
          </li>
          <li>
            Invited Speaker: IEEE Chengdu Section, IEEE Beijing Section,
            Tsinghua University.
          </li>
          <li>
            Keynote Speaker: Future of Broadcasting at the Emerging Technology
            Workshop, the Communication University of China, July 2015.
          </li>
          <li>
            Keynote speaker: Skills for women success in Engineering, Women in
            Engineering Luncheon, ICASSP 2015, Brisbane, Australia, April 2015.
          </li>
          <li>
            Invited Speaker, Graduate School Information Night for Undergraduate
            Students in Engineering and Science, April 2010, Undergraduate
            Engineering Student Association.
          </li>
          <li>
            Keynote speaker, Inspirational Speaker Night, Women in Engineering
            Society in collaboration with Society of Women in Science and
            Technology, April 26, 2009.
          </li>
          <li>
            Keynote speaker of the California Lebanese Ladies Society’s Gala,
            Los Angeles, May 2004.
          </li>
          <li>
            Guest speaker at the Research Mentoring Dinner, organized by the UBC
            VP Research office and St. John’s College, entitled “Research
            Topics, Students, Publishing and Multi-disciplinarity”, November 20,
            2002.
          </li>
          <li>
            Gave a lecture entitled “In Praise of Engineering” at a Public
            Science Forum organized by the Canadian Academy for the Advancement
            of Science at Mulgrave High School, West Vancouver, November 18,
            2002.
          </li>
          <li>
            Keynote Speaker, UBC Applied Sciences Seminar on Engineering for
            Women, May 2000.
          </li>
          <li>
            Invited talk at the University of Waterloo on " Automatic Monitoring
            of cable TV Picture Performance ", 1999
          </li>
          <li>
            Gave a speech entitled, “Information Revolution and Societal Change”
            at a Public Science Forum of the Canadian Academy for the
            Advancement of Science, March 28, 1998, Robson Square Conference
            Centre, Vancouver.
          </li>
          <li>
            Invited Talk on “Video Noise Reduction”, April 11, 1997, University
            of Waterloo.{" "}
          </li>
          <li>
            Gave a seminar entitled “Emerging Trends in Multimedia” at the UBC
            Applied Science Speaker Series, UBC, Feb. 1997
          </li>
          <li>
            Gave a one-hour interview to Lebanese television, September 1996, on
            women and engineering.{" "}
          </li>
          <li>
            One of three panelists on challenges facing women grad students in
            engineering (March 1996).
          </li>
          <li>
            Speaker for UBC, CICSR Distinguished Lecturer Series, Home Base
            Seminar, Feb. 21, 1995.
          </li>
          <li>
            Presented our work to the President of Sanyo, California, US, who
            visited our lab for discussions about relevant work, July 16, 1994.
          </li>
          <li>
            Invited by Rogers Inc. to present my work on cable TV to selected
            engineers in the National Cable Television Association, San
            Francisco, June 6-9, 1993. As a result, I was invited to address the
            technical committee of the National Cable TV Association, June
            30-July 1, 1993, Washington, D.C.
          </li>
          <li>
            Invited by Techtronix (Portland, Oregon), as a distinguished guest,
            met with the vice-president of engineering and senior engineers,
            gave a two-hour seminar attended by over 100 of their engineers, and
            conducted many discussions with their engineers about common work,
            January 1993.
          </li>
          <li>
            I address, on a regular basis, the Faculty of Applied Science
            Conference for Women&#39;s senior secondary school students. The aim
            of this one-day long conference is to encourage high school girls to
            consider engineering as a career. Many of our current female
            engineering students have noted their intentions to join the
            engineering school only after having heard my speeches and shared
            discussions.
          </li>
          <li>
            Guest lecturer, Shad Valley Program, June 1991 & July 1994 hosted
            the whole group, August 1999
          </li>
          <li>
            I gave various newspaper and radio interviews about engineering and
            women, e.g. in 1990-91, I appeared twice on CBC TV News, the first
            time was regarding the Montreal massacre and the second time was
            about the attitude of engineering students towards women and
            minorities.
          </li>
          <li>
            I have given public talks on a continuous basis, and for many years,
            to various women's groups and high school female students about
            Women in Engineering. Last year I addressed the Vancouver Female
            Careers Day in Killarney School, and was one of the three panel
            speakers for the York House students' presentation organized by the
            UBC School and College Liaison Office.
          </li>
          <li>
            One of three panelists, "A Day in Science", organized by UBC School
            and College Liaison Office for high school women students, May 1990.
          </li>
          <li>
            Main speaker, UBC Applied Science Women in Engineering Conference,
            April 1990, April 1991, April 1992, April 1993.
          </li>
          <li>
            Speaker at the annual meeting of the cable TV lab, April 1990, May
            1992, April 1993, April 1994, April 1995, May 1996, and May 1997.
          </li>
          <li>
            "Electricity Demand for Zimbabwe", February 1982. Organized by the
            UBC Simulation and Modelling Seminar.
          </li>
          <li>
            Gave two public lectures and a condensed course on “Digital Image
            Processing” to practicing professional engineers in Zimbabwe. July,
            1989.
          </li>
          <li>
            Invited to give a seminar on “Estimation of Signals Distorted by
            Systems of Random Impulse-Response“ and engaged in discussions with
            members of the Water Research Center, University of Western
            Australia. February 1989
          </li>
          <li>
            Gave a two public lectures on image processing and condensed course
            on “Optimization and Non-linear Control”, to practicing professional
            engineers in Zimbabwe, August 1987.
          </li>
          <li>
            "Women in the Scientific Community: Techniques for Survival and
            Success" February 25, 1982, Organized by the AMS Women&#39;s
            Committee.{" "}
          </li>
          <li>
            "Women, Science and Technology", November 1981, the Society of
            Canadian Women in Science and Technology.{" "}
          </li>
          <li>
            "Women in Engineering", the University Women Graduates Assoc., May
            1979.{" "}
          </li>
          <li>
            "Energy" in the "Development for Independence" programme by the
            Development Studies Committee of the University of Rhodesia,
            February 1979.{" "}
          </li>
          <li>
            "Operations Research Applications for Rhodesia", the Rhodesian
            Institution of Engineers, January 1978.
          </li>
          <li>
            Invited to give two condensed courses on "Data Structures" and
            "Numerical Methods" in Al-Hazen Research Centre, Baghdad, Iraq,
            October‑November 1975.
          </li>
          <li>
            Invited to update a working model and a computer program (which I
            developed in 1977-1979) to forecast electricity needs for Zimbabwe.
            Work was sponsored by the Canadian International Development Agency
            (CIDA), April-June 1982.
          </li>
        </ul>
        <h1>Demos/Presentations to Industry</h1>
        <ul>
          <li>
            Presented and demonstrated a prototype on video noise reduction,
            enhancement, and resizing to Equator Inc. and Hewlett-Packard in
            August 2005; and to Enuclia Semiconductor in October, 2005.
          </li>
          <li>
            Presented and demonstrated our prototype on video picture
            enlargement to Rogers Cable TV and to Equator Inc., 2003.
          </li>
          <li>
            Presented and demonstrated our prototype on “video compression
            improvement” at the Western Cable TV show, December 2000.
          </li>
          <li>
            Presented and demonstrated our prototype on video noise reduction at
            the Western Cable TV show, December 1997, 1998, and 1999.
          </li>
          <li>
            Presented and demonstrated our prototype on video noise reduction at
            the U.S. Cable Labs Winter meeting, San Diego, CA, February 1997.
          </li>
          <li>
            Presented and demonstrated our prototype on video noise reduction in
            Cablenet, LA, CA, December 1996.
          </li>
          <li>
            Presented our work to a group of Hewlett Packard (Santa Rosa,
            Calif.) engineers who visited our lab and had discussions about our
            work, June 1992, January 1995.
          </li>
          <li>
            Presented our work to the Vice President and members of TCI (largest
            US cable company then ), Denver, Colorado, August, 1991,1996)
          </li>
        </ul>
        <h1>Other Relevant Information:</h1>
        <p>
          The model I developed for forecasting electricity demand for Zimbabwe
          was adopted by the Zimbabwe Electricity Supply Commission in 1982 and
          used for several years.
        </p>
        <p>
          Our Paper “Comparing Different Classifiers in Sensory Motor Brain
          Computer Interfaces” in 2015 is among the top 10% most cited Plos One
          papers in 2015.
        </p>
        <p>
          Our paper on the design of a brain-computer interface with a low false
          positive rate was nominated for the “Highlights of 2008” in the
          Journal of Neural Engineering. The selection was based on the number
          of citations and full text downloads the article has garnered, as well
          as the outstanding praise received from the journal’s referees.
        </p>
        <p>
          Our paper on surveying artifact processing algorithms in
          brain-computer interface systems was placed amongst the “Top 25
          Hottest Articles in Clinical Neurophysiology” three times (in 2007 and
          2008).
        </p>
        <p>
          Our paper on surveying signal processing algorithms in brain computer
          interface systems received a place in the “Highlights of 2007” in the
          Journal of Neural Engineering.
        </p>
        <p>
          Our collaboration from 2008 – 2011 with Vancouver multimedia company
          BBTV resulted in algorithms that protect the rights of multimedia
          owners (concerning audio, songs, images, and video assets) from
          illegal copying and content piracy. BBTV is now developing this
          technology for commercialization.
        </p>
        <p>
          My work with Steven Poon has resulted in a Fluorescence
          microscope-based system which can, for the first time, measure the
          length of every telomere in every chromosome. This work is now used in
          research centres worldwide, including the BC Cancer Research Agency
          and John Hopkins, as well as in Spain, Holland, Germany, and Hong
          Kong.
        </p>
        <p>
          My work with Prof. Petrell on a video imagery system for the
          aquaculture industry, in areas such as salmon farming, was
          commercialized by Canadian company JB Thompson & Assoc. (1998). The
          instrument measures in a non-interfering and non-destructive fashion
          the size, biomass, and swimming speed of fish in cages and tanks.
        </p>
        <p>
          My work with Dr. Kossentini on video compression has resulted in an
          algorithm for motion vector estimation which has officially been
          adopted in the ITU-T H-263+ Standard TMN8 model for video encoding.
        </p>
      </div>
    );
  }
}

export default ResearchPage;
