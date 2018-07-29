import React from 'react'
import styles from "./pages.module.css"
import TableRow4 from "../components/PageComponents/TableRow/TableRow4"
//import Link from 'gatsby-link'

class ActivitiesPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const confroletabledata = this.props.data.allActivitiesConfRoleTable.edges
    const membershiptabledata = this.props.data.allActivitiesMembershipTable.edges
    const otherservicestabledata = this.props.data.allActivitiesOtherServicesTable.edges

    return (
  <div className={styles.pagecontainer}>
    <h1>Videos to  Raise Awareness about Engineering</h1>
    <p>Dr. Ward noticed a lack of understanding and appreciation by the general public of engineering . So she set to produce videos to raise the awareness about  “signal processing’  ,her  field of expertise in engineering  . She co-directed and/or co-produced many videos which had thousands of hits on YouTube  and have been used extensively by professors to attract students to the field . Amongst these are the following 6 videos she has conceived and produced or directed
    </p>
    <ul>The following are six of Dr. Ward’s frequently used videos:
      <li><a href="https://www.youtube.com/watch?v=EErkgr1MWw0">What is Signal Processing?</a>
      </li>
      <li><a href="https://www.youtube.com/watch?v=MFsxuO8HC7k">Signal Processing and Machine learning</a>
      </li>
      <li><a href="https://www.youtube.com/watch?v=Vcii84n7piw&t=2s">Under the Radar</a>
      </li>
      <li><a href="https://www.youtube.com/watch?v=NRRzs0bB0a0">Multimedia Forensics</a>
      </li>
      <li><a href="https://www.youtube.com/watch?v=T0VPjHwrc-o&t=6s">Signal Processing in Free Viewpoint Television</a>
      </li>
      <li><a href="https://www.youtube.com/watch?v=yKEkqqBvaIo">The Benefits of Spoken Language Technologies</a>
      </li>
    </ul>
    <h3>IEEE  Accomplisemnets and Avtivities</h3>
    <h4>IEEE Committees/Boards:</h4>
    <ul>
      <li>Chair, TAB Ad-Hoc Committee on Africa and Education (2016-2017)</li>
      <li>Member At-Large, TAB Strategic Planning Committee (2017)</li>
      <li>TAB Management Committee (2018)</li>
      <li>IEEE WIE Voting Committee (2018)</li>
      <li>Senior Member Selection Committee(1992, 1996, 2000)</li>
    </ul>
    <h4>SOCIETY:</h4>
    <ul>
      <li>President, IEEE Signal Processing Society (SPS) (2016-2017)</li>
      <li>President-Elect ,SPS (2014-2015)</li>
      <li>V.P. Conferences, SPS (2003-2005)</li>
      <li>Member of SPS Board of Governors (2003-2005, 2008-2010, 2014-2017)</li>
      <li>Member of SPS Executive Board (2003-2005), (2014-2016)</li>
      <li>Fellow Reference Committee, SPS (2008-2010)</li>
      <li>Conference Board,SPS (2006-2007)</li>
      <li>Editorial Board of IEEE Signal Processing Magazine (2006-2009)</li>
    </ul>
    <h4>REGION 7:</h4>
    <ul>
      <li>Awards Committee (2013-2014, 2017)</li>
      <li>V.P. Western Canada (1990-1995), Canadian Society for Electrical and Computer Engineers (folded into IEEE)</li>
      <li>Co-founder, Vancouver SPS Chapter (2004)</li>
      <li>Chair, IEEE Vancouver Student Chapter (1985-1987)</li>
    </ul>
    <h3>Service to  Other Professional Assocations</h3>
    <h4>Women Organizations:</h4>
    <ul>
      <li>University Women Graduate Association, 1980.</li>
      <li>Co-Founder Society for Canadian Women in Science and Technology 1979 to present.</li>
      <li>Academic Women&#39;s Association, UBC, Executive Board , 1982 to 198</li>
    </ul>
    <h4>Advisory Boards:</h4>
    <ul>
      <li>Member of a 12 scientists committee to advise Her Highness Sheika Mozah (Qatar Foundation head) on how to establish and promote scientific research in Qatar (2006-2008).</li>
      <li>International Scientific Advisory Board of the BC Advanced Systems Institute 1996 to 2004</li>
      <li>The Pacific Institute of Mathematical Sciences,1988 to 2009</li>
      <li>Canadian Academy for the Advancement of Science,1997 to 2007</li>
      <li>National Research Council ( NRC) of Canada on Information Technology, 1999 to 2001</li>
    </ul>
    <h4>Royal Society of Canada:</h4>
    <ul>
      <li>Awards committee on Women  Students,  2003 to 2007</li>
      <li>Committee to select fellows of the Society (engineering category), 2012 to 2015</li>
    </ul>
    <h4>National Science Foundation (USA):</h4>
    <ul>
      <li>NSF IGERT program Adjudication Committee  2001</li>
      <li>NSF committee to review the Integrated Media Systems Center, University of Southern California, 2002</li>
    </ul>
    <h4>Others</h4>
    <ul>
      <li>Canadian Society for Electrical and Computer Engineering VP for Western Canada , 1990 to 1995</li>
      <li>BCIT : External review committee; new Bachelor of Engineering in Electrical Engineering, 2006 to 2007</li>
      <li>NSERC Grant Selection Committee, Communications, Computers and Components Engineering, 1997 to 2000</li>
      <li>Committee to review the ECE department of University of Victoria, 1998</li>
      <li>Academy of Science In the Developing World (Rome, Italy), to select the Trieste Science Prize winner, 2008 to 2009</li>
      <li>UBC Committee to plan the Kuwait Institute for Business and Technology 2001 to 2004</li>
      <li>Member of a UBC three-people delegation (VP Research & International, Dean of Applied Science and I) that visited Saudi Arabia in April/May, 2010 to discuss research collaboration between Saudi Universities and UBC.</li>
      <li>UBC VPRI rep to the Middle East, 2010 to 2014</li>
    </ul>
    <h4>Conference Participation (Organizer, Keynote Speaker, etc.)</h4>

    <table className={styles.table}>
      <tbody>
        <tr>
          <th width="40%">Conference or Event</th>
          <th width="20%">Role(s)</th>
          <th width="20%">Location</th>
          <th width="20%">Date(s)</th>
        </tr>
        {confroletabledata.map((row,i) => (
          <TableRow4 key={i}
            c1={row.node.event}
            c2={row.node.role}
            c3={row.node.location}
            c4={row.node.date}
          />
        ))}
      </tbody>
    </table>

    <h4>Editorships</h4>
    <ul>
      <li>Assoc. Editor, Jour. of Electronic Imaging (SPIE), 2001‑2006.</li>
      <li>Member of the Editorial Board of the IEEE Signal Processing Magazine, Jan 2006-2009</li>
    </ul>

    <h4>Consultant</h4>
    <ul>
      <li>MDA , Vancouver , 2013-2014</li>
      <li>AdvancedIO Systems Inc., 2007-2009</li>
      <li>WebTech Wireless,telematics, 1999-2005</li>
      <li>R.F.I.D., Passport photograph compression, November 1996‑1999.</li>
      <li>Hewlett-Packard (Santa Rosa, Calif.), Non-intrusive measurements of cable TV parameters.</li>
      <li>Vision Systems Inc. Building a computer vision system for grading lumber, 1989.</li>
      <li>The Whitsun Foundation of Rhodesia, building a computer model for Agrarian Reform, 1978.</li>
      <li>Arab Projects and Development on their project with the Iraqi Ministry of Planning "Five Year Plan for transportation development", June‑August 1974.</li>
      <li>Computer Modelling of Operations Decisions for the Okanagan Lakes System, January‑June 1973.</li>
    </ul>
    <h4>Service to the non technical community</h4>
    <ul>
      <li>Member of the RCMP Advisory Committee on deterring violence, 2005 – 2009.</li>
      <li>Speaker at the RCMP Conference on Community and Security, January 2002.</li>
      <li>Speaker at the BC Labour Federation, November 2001.</li>
      <li>Speaker at the Vancouver Peace rally, November 2001.</li>
      <li>Speaker at the rally for Canada’s unity on the steps of the Vancouver Art Gallery, October 1995.</li>
      <li>Organized a community dinner for the Committee for Racial Justice, attended by approximately 90 people belonging to over a dozen different governmental, religious and ethnic groups. During the dinner I gave a 30-minute (televised) speech about “stereotyping  of some ethnic religious groups,” March 1995.</li>
      <li>Member of the Vancouver Jewish–Arab group to promote mutual understanding, 2003-2004.</li>
      <li>As a graduate student in Berkeley, I participated in establishing a group of Arab and Israeli students to dialogue on “bridges to peace” in the Middle East. In 1992, I actively encouraged the establishment of the Palestinian-Jewish Women for Peace in Vancouver.</li>
      <li>Gave a talk about “Islam and Women,” one hour of which was televised and broadcasted on Vancouver Community Channel. The talk was attended by approximately 150 people at the Unitarian Church, March 1991.</li>
      <li>Gave a 20-minute speech at International Women’s Day on the steps of the Vancouver Art Gallery, 1991.</li>
      <li>Gave a public speech outside the Student Union Building at UBC after the Montreal Massacre of women engineers, 1989.</li>
      <li>Gave seminars in various studios, and taught Middle East Dancing from 1982‑1989. Contributed articles to “Sahda,” BC’s Middle East dance association newsletter, and to “Arabesque,” an international magazine for Middle East dancing, published in New York. I also organized a 2-day workshop in Vancouver given by Ibrahim Farah of New York. Mr. Farah is internationally renowned as a master of Middle East dance. It was attended by 69 local dancers, and the evening dinners and shows were 100% booked, June 1988.</li>
    </ul>
    <h3>SERVICE TO THE UNIVERSITY</h3>
    <h4>Memberships in committees, including offices held and dates</h4>

    <table className={styles.table}>
      <tbody>
        <tr>
          <th width="20%">Organizational Unit</th>
          <th width="40%">Committee Name</th>
          <th width="20%">Start</th>
          <th width="20%">End</th>
        </tr>
        {membershiptabledata.map((row,i) => (
          <TableRow4 key={i}
            c1={row.node.organization}
            c2={row.node.committee}
            c3={row.node.start}
            c4={row.node.end}
          />
        ))}
      </tbody>
    </table>

    <h4>Other service to University , including dates</h4>

    <table className={styles.table}>
      <tbody>
        <tr>
          <th width="20%">Organizational Unit</th>
          <th width="40%">Title/Nature of Duties</th>
          <th width="20%">Start</th>
          <th width="20%">End</th>
        </tr>
        {otherservicestabledata.map((row,i) => (
          <TableRow4 key={i}
            c1={row.node.organization}
            c2={row.node.title}
            c3={row.node.start}
            c4={row.node.end}
          />
        ))}
      </tbody>
    </table>

    <p> I served as internal Examiner at UBC: I have served on at least 400 (Masters, PhD qualifying, PhD dept. and PhD final) exams of students supervised by other faculty members in my department. The names are too many to include here. In the past 12 months I served on 8 such exams. I have also chaired many Univesrity Ph.D exams.
    </p>
    <p>Committee member or University examiner for over 25 UBC graduate students outside Electrical and Computer Engineering Department. The students were in Civil Eng., Mechnical Eng., Bioresource Eng., Computer Science, Mathematics, Commerce and Zoology.
    </p>
  </div>
)
  }
}

export default ActivitiesPage


export const query = graphql
`
  query ActivitiesQuery {
    allActivitiesConfRoleTable: allActivitiesConfRoleTableCsv {
      edges {
        node {
          event
          role
          location
          date
        }
      }
    }
    allActivitiesMembershipTable: allActivitiesMembershipTableCsv {
      edges {
        node {
          organization
          committee
          start
          end
        }
      }
    }
    allActivitiesOtherServicesTable: allActivitiesOtherServicesTableCsv {
      edges {
        node {
          organization
          title
          start
          end
        }
      }
    }
  }
`;

// <h4>Reviewer (journal, agency, etc. including dates)</h4>
// <ul>
//   <li>NSERC Disvovery Grants reviewer (Reviewd 1-4 applications yearly)</li>
//   <li>Biomedical Signal Processing & Control</li>
//   <li>Journal of Real-Time Processing</li>
//   <li>Computer Vision and Image Understanding</li>
//   <li>Journal of Neural Engineering</li>
//   <li>IEEE Trans. on Multimedia</li>
//   <li>IEEE Trans. on Automotive Control</li>
//   <li>IEEE Trans. on Communication</li>
//   <li>IEEE Trans. on Image Processing</li>
//   <li>IEEE Trans. on Pattern Analysis & Machine Intelligence</li>
//   <li>IEEE Trans. on Signal Processing (previously ASSP)</li>
//   <li>IEEE Trans. on Systems, Man and Cybernetics</li>
//   <li>Jour. of the Can. Soc. of Comp. & Electrical Engineers</li>
//   <li>Jour. of Visual Communication & Image Representation</li>
//   <li>Jour. of the Optical Society of America A Applied Optics</li>
//   <li>Optimal Control: Applications and Methods</li>
//   <li>IEE Proceedings on Vision, Image and Signal Processing</li>
//   <li>IEE Electronics Letters</li>
//   <li>The Computer Journal</li>
//   <li>Computational Intelligence and Neuroscience</li>
//   <li>Investigative Optholomogy and Visual Science</li>
//   <li>Elsevier Digital Signal Processing Journ.</li>
//   <li>EURASIP Jour. On Advances in Signal Processing</li>
//   <li>Banff  International Research Station workshops 3 to 5 proposal yearly</li>
//   <li>Book proposal reviewer: have reviewed few books, (in 2010 reveiwed Multilinear Subspace Learning: Dimensionality Reduction of Tensors, names of authots cannot be includede for confidentiaility)</li>
//   <li>Several Conferences (too many to state here)</li>
// </ul>
