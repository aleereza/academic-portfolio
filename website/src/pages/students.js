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
      <div>
        <h3>Teaching:</h3>
        <p>I have taught a large number of courses on a variety of subjects in Electrical and Computer Engineering. These include digital signal processing, digital image processing, communication theory, coding, control theory, discrete structural design, optimization, operations research, numerical computations, electromagnetic theory, computer programming, electrical machines, and electronics.
        </p>
        <h3>Graduate Students Supervised</h3>
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
