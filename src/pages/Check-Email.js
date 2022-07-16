import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

function CheckEmail() {
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
          Verify your email
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
          We've sent a confirmation email to verify your email address.
        </MKTypography>
      </Grid>
    </Container>
  );
}

export default CheckEmail;
