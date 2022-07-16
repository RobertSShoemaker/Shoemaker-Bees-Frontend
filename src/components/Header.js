// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function Header() {
  return (
    <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
      <Container>
        <Grid container flexDirection="row" alignItems="center">
          <MKButton
            variant="outlined"
            color="white"
            sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
          >
            <MKBox component="i" color="white" className="fas fa-bars" />
          </MKButton>
          <MKBox
            component="ul"
            display={{ xs: "none", lg: "flex" }}
            p={0}
            my={0}
            mx="auto"
            sx={{ listStyle: "none" }}
          >
            <MKBox component="li">
              <MKTypography
                component={Link}
                href="/"
                variant="button"
                color="white"
                fontWeight="regular"
                p={1}
                // onClick={(e) => e.preventDefault()}
              >
                Home
              </MKTypography>
            </MKBox>
            <MKBox component="li">
              <MKTypography
                component={Link}
                href="/about"
                variant="button"
                color="white"
                fontWeight="regular"
                p={1}
                // onClick={(e) => e.preventDefault()}
              >
                About Us
              </MKTypography>
            </MKBox>
            <MKBox component="li">
              <MKTypography
                component={Link}
                href="/contact"
                variant="button"
                color="white"
                fontWeight="regular"
                p={1}
                // onClick={(e) => e.preventDefault()}
              >
                Contact Us
              </MKTypography>
            </MKBox>
          </MKBox>
          {/* <MKBox
            component="ul"
            display={{ xs: "none", lg: "flex" }}
            p={0}
            m={0}
            sx={{ listStyle: "none" }}
          >
          </MKBox> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Header;
