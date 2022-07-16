import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";


function About() {

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
          Shoemaker Bees
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
          Shoemaker Bees is a small family run apiary located between Chelsea,
          Westover, and Wilsonville in Shelby County, Alabama. We are a boutique
          honey seller offering small quantities of high quality honey. Our
          honey is pure, natural, and raw. We do not pasteurize or microfilter
          our honey.
        </MKTypography>
      </Grid>
    </Container>
  );
}

export default About;
