import React from 'react'
import styles from "./student.module.css"

class Student extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.name}>{this.props.name}
        </div>
        <div className={styles.detailcontainer}>
          <div className={styles.subdetailcontainer}>
            <div className={styles.programdatecontainer}>
              <p>{this.props.program}
              </p>
              <p>Graduation date: {this.props.date}
              </p>
            </div>
            <div className={styles.supervisorcontainer}>
              <p>{this.props.supervisor}
              </p>
              <p>{this.props.cosupervisor}
              </p>
            </div>
          </div>
          <div className={styles.statuscontainer}>
            <p>{this.props.status}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Student
