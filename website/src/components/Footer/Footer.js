import React from "react"
import styles from "./footer.module.css"

import FooterElement from "./FooterElement/FooterElement"
import email_icon from "../../images/icons/email.svg"
import phone_icon from "../../images/icons/phone.svg"
import location_icon from "../../images/icons/location.svg"

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.footerdiv}>
          <div className={styles.row}>
            <div className={styles.col}>
              <FooterElement icon={email_icon}>
                rababw at ece dot ubc dot ca
              </FooterElement>
              <FooterElement icon={phone_icon}>
                (604) 266-4261
              </FooterElement>
            </div>
            <div className={styles.col}>
              <FooterElement icon={location_icon}>
                University of British Columbia, The Fred Kaiser Building, 5500-2332 Main Mall, Vancouver, BC, Canada, V6T 1Z4
              </FooterElement>
            </div>
        </div>



        </div>
      </div>
    )
  }
}


export default Footer
