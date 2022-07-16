import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

import MapModal from "components/MapModal";

function Contact() {
  return (
    <Container>
      <Grid
        container
        item
        xs={12}
        md={7}
        lg={6}
        flexDirection="column"
        justifyContent="center"
      >
        <MKTypography
          variant="h1"
          color="white"
          mb={3}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          Contact Us
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
          ShoemakerBees@gmail.com
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
          205-670-0373
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
          5070 Highway 55
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
          Wilsonville, AL 35186
        </MKTypography>
        <br />
        <MapModal />
      </Grid>
    </Container>
  );
}

export default Contact;
