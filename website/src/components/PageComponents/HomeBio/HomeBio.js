import React from "react";
import Button from "../Button/Button";
import CV from "../../../files/cvrababw.pdf";

const HomeBio = () => (
  <div>
    <p>
      Dr. Rabab K. Ward is a Professor Emeritus in the Electrical and Computer
      Engineering Department at the University of British Columbia, Canada. She
      is the first woman appointed as professor in engineering in British
      Columbia. She has around 45 years of post-doctoral experience in
      education, research and leadership. Her research contributions are in
      broad areas of signal processing, including signal detection; image
      encoding, recognition, and restoration, and their applications in cable
      TV, HDTV, medical imaging, infant cry signals, and brain computer
      interfaces. Dr. Ward has published upwards of 260 refereed journal papers,
      350 refereed conference articles, and holds eight patents related to
      monitoring, measurement, and noise reduction concerning cable television.
      Some of her work has been licensed to US and Canadian industry.
    </p>
    <p>
      She has supervised 50 Ph.D. and 50 Master students. She has served and
      provided leadership to IEEE and other professional societies. She was
      President of the IEEE Signal Processing Society (2016–2017), Director of
      IEEE Division IX (2020–2021 and 2023–2024), and IEEE Vice President for
      Educational Activities (2023–2024).
    </p>
    <p>
      <Button to={CV} filename="CV_Rabab_Ward.pdf">
        CV
      </Button>
    </p>
  </div>
);

export default HomeBio;
