import React from 'react'
import styles from "./student.module.css"

class Student extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    var graduation;
    var supervisor;
    var cosupervisor;

    if (this.props.date == "ongoing") {
      graduation =
      <p>Ongoing</p>
    }
    else{
      graduation =
      <p><strong>Graduation date:</strong> {this.props.date}
      </p>
    }

    if (this.props.supervisor == "") {
      supervisor = <p></p>
    }
    else{
      supervisor = <p><strong>Principal Supervisor:</strong> {this.props.supervisor}</p>
    }

    if (this.props.cosupervisor == "") {
      cosupervisor = <p></p>
    }
    else{
      cosupervisor = <p><strong>Co-Supervisor:</strong> {this.props.cosupervisor}</p>
    }





    return (
      <div className={styles.container}>
        <div className={styles.name}>{this.props.name}
        </div>
        <div className={styles.detailcontainer}>
          <div className={styles.subdetailcontainer}>
            <div className={styles.programdatecontainer}>
              <p><strong>{this.props.program}</strong>
              </p>
              {graduation}
            </div>
            <div className={styles.supervisorcontainer}>
              {supervisor} {cosupervisor}
            </div>
          </div>
          <div className={styles.statuscontainer}>
            <p><strong>Current Position:</strong> {this.props.status}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Student
