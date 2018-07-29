import React from 'react'
import styles from "./pages.module.css"
import Student from "../components/PageComponents/Student/Student"

class StudentsPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const studentsdata = this.props.data.allStudents.edges


    return (
      <div className={styles.pagecontainer}>
        <h1>Teaching</h1>
        <p>I have taught a large number of courses on a variety of subjects in Electrical and Computer Engineering. These include digital signal processing, digital image processing, communication theory, coding, control theory, discrete structural design, optimization, operations research, numerical computations, electromagnetic theory, computer programming, electrical machines, and electronics.
        </p>
        <h1>Graduate Students Supervised</h1>
        <p>I have supervised 42 Ph.D. students and around 50 Research Master students. All these graduates are presently employed both in Canada and across the world. Thirteen of them hold faculty jobs in universities.
        </p>
        <p>The Ph.D. theses of 7 of my Ph.D. students were nominated by UBC for best doctoral thesis award.
        </p>
        {studentsdata.map((row,i) => (
          <Student key={i}
            name={row.node.name}
            program={row.node.program}
            date={row.node.date}
            supervisor={row.node.supervisor}
            cosupervisor={row.node.cosupervisor}
            status={row.node.status}
          />
        ))}
        <h1>Supervision of other highly qualified people</h1>
        <h2>Post Doctoral Fellows:</h2>
        <ul>
          <li>Shi, Pingnan, May 1991 ‑ April 1992</li>
          <li>Zhang, Qin, September 1990 ‑ June 1992</li>
          <li>Xie, Qiaobing, September 1993 ‑ August 1995</li>
          <li>Shi, Xiaotian, March 1995 ‑ May 1997</li>
          <li>Docef, Alen, September 1997 - June 1999</li>
          <li>Kharma, Nawwaf, January 1998 - July 1999</li>
          <li>Ma, Liying, August 2002 ‑ January 2003</li>
          <li>Wang, Qing, September 2005 - September 2006</li>
          <li>Ghazel, Mohsen, September 2004 - October 2006</li>
          <li>Fatourechi, Mehrdad, March 2008 –  December 31, 2011</li>
          <li>Coria, Lino, June 2009 – Dec. 31, 2010</li>
          <li>Joyce Chiang, October 2012 till December 2014</li>
          <li>Xin Yi Yong, November 2012 till Feb 2013</li>
          <li>Xun Chen, June 2014 till March 2015</li>
          <li>El-Gendi, Mohamed, June 2016 – Present</li>
        </ul>
        <h2>Research Engineers Employed:</h2>
        <ul>
          <li>Dr. Pingnan, Shi, 1992‑1995</li>
          <li>Dr. Zhang, Qin, 1992‑1995</li>
          <li>Dr. Qiling Qin, Visiting Scholar, 1994-1995</li>
          <li>Dr. Kossentini, Faouzi, July 1995‑December 1995</li>
          <li>Darwish, Mohammed, August 1995‑August 1996</li>
          <li>Xu, Mei, May 1996‑February 1997</li>
          <li>Ng, Andrew, September 1997‑February 1998</li>
          <li>Du, Julong, November 1992‑December 1998</li>
          <li>Barzykina, Ekaterina, May 1998‑August 1999</li>
          <li>Dr. Aghdasi, Farzin, August 2000- February 2001</li>
          <li>Li, Xiaoli, January 1995‑February 2002</li>
          <li>Dr. Shadaydeh, Maha, Maha, August 2007- January 2008</li>
          <li>Xiong, Victor, July 2007- February 2008</li>
        </ul>
        <p>I have also supervised and employed a large number of undergraduate Students (around 35) as Research Students in my lab.
        </p>
        <h2>External Ph.D. thesis examiner</h2>
        <ul>
          <li>External examiner of Kemal Ugur, Ph.D.  dissertation ,Tampere University of Technology, Finland, July 2010</li>
          <li>External Examine for Mr. Diego Sorrentino, Univ of Victoria, July 2009</li>
          <li>External examiner of Dr. Jun Cheng. Ph.D. dissertation, Nanyang Technological University, Singapore, 2007.</li>
          <li>External examiner of Dr. Naga Mudigonda - Ph.D. dissertation, University of Calgary, Nov., 2001.</li>
          <li>External examiner of Dr. Mahmoud El-Sakka, Ph.D. dissertation, University of Waterloo, April 1997.</li>
          <li>External examiner of Dr. Jianping Li - Ph.D. dissertation, University of Victoria, Sep. 1996.</li>
          <li>External examiner of Dr. Peter Jones - Ph.D. dissertation, Queen&#39;s University, Feb. 1993.</li>
          <li>External examiner of Dr. Aziz Qureshi - Ph.D. dissertation, Queen&#39;s University, Dec. 1991.</li>
          <li>External examiner of Dr. Salah G. Foda - Ph.D. dissertation, University of Victoria, July 1988.</li>
        </ul>
      </div>
    )
  }
}

export default StudentsPage

export const query = graphql
`
  query StudentsQuery {
    allStudents: allStudentsCsv {
      edges {
        node {
          name
          program
          date
          supervisor
          cosupervisor
          status
        }
      }
    }
  }
`;
