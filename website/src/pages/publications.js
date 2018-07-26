import React from 'react'
import Publication from "../components/Content/Publication/Publication"

class PublicationPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const refereedjournalsdata = this.props.data.allPublicationsRefereedJournals.edges
    const refereedconferencesdata = this.props.data.allPublicationsRefereedConferences.edges
    const nonrefereedjournalsdata = this.props.data.allPublicationsNonrefereedJournals.edges
    const publicationspatentsdata = this.props.data.allPublicationsPatents.edges
    return (
      <div>
        <h2>Refereed Publications</h2>
        <h3>Journals</h3>
        {refereedjournalsdata.map((row,i) => (
          <Publication key={i}
            number={i+1}
            title={row.node.title}
            authors={row.node.authors}
            journal={row.node.journal}
          />
        ))}
        <h3>Conference Proceedings</h3>
        {refereedconferencesdata.map((row,i) => (
          <Publication key={i}
            number={i+1}
            title={row.node.title}
            authors={row.node.authors}
            journal={row.node.journal}
          />
        ))}
        <h2>Non-Refereed Publications</h2>
        <h3>Journals</h3>
        {nonrefereedjournalsdata.map((row,i) => (
          <Publication key={i}
            number={i+1}
            title={row.node.title}
            authors={row.node.authors}
            journal={row.node.journal}
          />
        ))}
        <h2>Books</h2>
        <p>1. MRI: Physics, Image Reconstruction, and Analysis, Edited by A. Majumdar and R. K. Ward, CRC Press, 2015.
        </p>
        <p>2. Mentoring for Engineering Academia II, Edited by R. M. Gray, Sh. Hemami, E. Riskin, R. K. Ward, S. Brainard, P. Cosman, N.n Fortenberry, J. Rutledge, and T. Whitney, 2008.
        </p>
        <h2>Chapters in Books</h2>
        <p>1. Faradj, F., Ward, R., and Birch, G., <strong>Using Autoregressive Models of Wavelet Bases in the Design of Mental Task-Based BCIs</strong>, in Brain-Coputer Interface Systems - Recent Progress and Future Prospects, ed. Reza Fazel-Rezai, InTech, ISBN 978-953-51-1134-4, 270 pages, June 2013.</p>
        <p>2. Angshul Majumdar and Rabab Ward, <strong>Multicoil Parallel MRI</strong>, in  Medical Imaging: Technology and Applications,EDITED BY TROY FARNCOMBE AND KRIS INIEWSKI,  Pages 485-528, CRC Press, 2013. </p>
        <p>3. Nezhadarya, E.,  Wang, Z. J.  and Ward, R. K., <strong>Image Watermarking in Higher-Order Gradient Domain</strong>, in Advances in Wavelet Theory and Their Applications in Engineering, Physics and Technology, Intech, ISBN 978-953-51-0494-0.</p>
        <p>4. Majumdar, A., Ward, R. K., and Nasiopoulos, P., <strong>Distributed Face Recognition</strong>, in Face Recognition: Methods, Applications and Technology, Nova Publishers, NY. </p>
        <p>5. Fatourechi, M., Lv, X., Malek Esmaeili, M., Wang, J. Z., and Ward, R. K., <strong>Image and video detection using content-based fingerprinting</strong>, Multimedia Image and Video Processing, 2nd Edition (editors: L. Guan, Y. He and S.Y. Kung), CRC Press, pp. 460 - 485, Feb 2012.  </p>
        <p>6. Majumdar, A., and Ward, R. K., <strong>Compressive Classification for Face Recognition</strong> in Face Recognition, State of the Art in Cognitive and Computational Processes, in Face Recognition, Intech Publishers, Milos Oravec ed. pp. 47-64, 2010.</p>
        <p>7. Majumdar, A., and Ward, R. K., <strong>Multiresolution Methods in Face Recognition</strong>, in Face Recognition, State of the Art in Cognitive and Computational Processes, Eds. M. S. Bartlett, K. Delac and M. Grgic, InTech Education and Publishing, Vienna, Austria , pp. 79-96, 2009.</p>
        <p>8. Nasiopoulos, P., Ward, R.K., and Morse, D., <strong>Adaptive Compression Coding</strong>, in Image Data Compression, B.V. Dasaralthy, editor, published by the IEEE Computer Society Press, 1995, pp. 164‑173.</p>
        <p>9. Ward, R.K. and Saleh, B.E., <strong>Deblurring Random Blur</strong>, in Selected Papers in Digital Image Restoration, SPIE Milestone Series, ed. M.I. Sezan, Vol. MS‑47, 1992, a reprint book of outstanding optical engineering papers selected from the world literature.</p>
        <p>10. Poon, S.S., Ward, R.K., and Palcic, B., <strong>Detection and Segmentation of Nucleated Cells in Blood Smears</strong>, Advances in Analytical Cellular Pathology, G. Burger, M. Oberholzer and G.P. Vooijs, Ed., pp. 231‑232. Excerpt MEDICA, Int. Congress Series 911, 1990, Elsevier Science Publishers.</p>
        <p>11. Kreidieh, R., <strong>Method of Estimation: Acreage Response Functions</strong> in Foreign Trade Regimes and Economic Development: Egypt, by Bent Hansen and K. Nashashibi. National Bureau of Economics Research, New York. Distributed by Columbia University Press, Conf. Series on Foreign Trade and Economic Development, Vol. IV, 1975, pp. 331‑341, in Appendix A.</p>
        <p>12. Hansen, B. and Kreidieh, R., <strong>An Afghanistan‑type Model for Simulating Fiscal, Monetary and Foreign Exchange Policy</strong>, Published by the Dept. Of Economics, University of California, Berkeley, California, Paper No. 25, April 1972, 144 pp.</p>
        <p>13. Kreidieh, R. and Tourk, K., <strong>Agricultural Supply Elasticities</strong>, in An Appraisal of Economic Development in Afghanistan, 1960‑1970, by Bent Hansen, Inst. of Intl. Studies, University of California, Berkeley, CA, Appendix 2, 1971, pp. 1‑4.</p>
        <h2>Patents</h2>
        {publicationspatentsdata.map((row,i) => (
          <Publication key={i}
            number={i+1}
            title={row.node.title}
            authors={row.node.authors}
            journal={row.node.journal}
          />
        ))}
        <h2>Technical Reports</h2>
        <p>1. A total of 3 progress reports on our findings regarding our project on “Facial Image Compression” were submitted to Sierra Consulting Ltd., & BC ASI. The dates these reports were submitted are Jan. 1995, April 1995 and Aug. 1995.</p>
        <p>2. A total of 25 reports on our findings regarding our projects, “Automatic Monitoring of the Quality of the Cable Television Picture,” “Noise Reduction in TV Pictures” and “Video Compression,” have been written for the Canadian Cable Labs Fund of the Rogers Cable Television Company. The dates these reports were submitted are Oct. 1990, Jan. 1991, April 1991, July 1991, Oct. 1991, Jan. 1992, April 1992, July 1992, Oct. 1992, Jan. 1993, April 1993, July 1993, Oct. 1993, Jan. 1994, April 1994, July 1994, Oct. 1994, Jan. 1995, April 1995, July 1995, Oct. 1995, April 1996, July 1996, Nov. 1996, Jan. 1997, March 1997, June 1997, Dec. 1997, March 1998 and July 1998.</p>
        <p>3. “An Econometric Model to Forecast Electricity Demand for Zimbabwe, An Update,” July 1982. No. of pages: 28. Invited research study organized by the University of Zimbabwe and co‑sponsored by CIDA. Organized by the International Development Office of the AUCC.</p>
        <p>4. “Land Reform Model,” report to the Whitsun Foundation, June 1980. No. of pages: 8. This report was subsequently published.</p>
        <p>5. “Energy for Development,” report to the “Development Studies Committee” University of Zimbabwe, June 1979. No. of pages: 4. This was part of the “Development for Independence” summary report which was written by eight authors (including myself) each reporting on one of the following topics: water, agriculture, energy, education and employment, housing, transportation, public health and pollution.</p>
        <p>6. “Five Years Plan, Transportation,” wrote part (approx. 40 pages) of the confidential report which was submitted by Arab Projects and Development to the Iraqi Ministry of Planning in February 1976.</p>
      </div>
    )
  }
}


export default PublicationPage


export const query = graphql
`
  query PublicationsQuery {
    allPublicationsRefereedJournals: allPublicationsRefereedJournalsCsv {
      edges {
        node {
          title
          authors
          journal
        }
      }
    }
    allPublicationsRefereedConferences: allPublicationsRefereedConferencesCsv {
      edges {
        node {
          title
          authors
          journal
        }
      }
    }
    allPublicationsNonrefereedJournals: allPublicationsNonrefereedJournalsCsv {
      edges {
        node {
          title
          authors
          journal
        }
      }
    }
    allPublicationsPatents: allPublicationsPatentsCsv {
      edges {
        node {
          title
          authors
          journal
        }
      }
    }
  }
`;
