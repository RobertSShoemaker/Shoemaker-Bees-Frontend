import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import Map from "components/Map";

import "./MapModal.css";

function MapModal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <div>
      <MKButton color="white" onClick={toggleModal}>
        View On Map
      </MKButton>
      <Modal
        open={show}
        onClose={toggleModal}
        sx={{ display: "grid", placeItems: "center" }}
      >
        <Slide direction="down" in={show} timeout={500}>
          <MKBox
            position="relative"
            width="400px"
            display="flex"
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
          >
            <MKBox
              display="flex"
              alginItems="center"
              justifyContent="space-between"
              p={2}
            >
              <MKTypography variant="h5">
                5070 Highway 55, Wilsonville AL 35186
              </MKTypography>
              <CloseIcon
                fontSize="medium"
                sx={{ cursor: "pointer" }}
                onClick={toggleModal}
              />
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox p={2}>
              <div className="map-container">
                <Map/>
              </div>
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox display="flex" justifyContent="space-between" p={1.5}>
              <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                close
              </MKButton>
              <MKButton
                variant="gradient"
                color="dark"
                onClick={(e) => {
                  e.preventDefault();
                  // window.location.href =
                  //   "https://www.google.com/maps/dir/?api=1&destination=5070+Highway+55+Wilsonville+AL&travelmode=driving";
                  window.open(
                    "https://www.google.com/maps/dir/?api=1&destination=5070+Highway+55+Wilsonville+AL&travelmode=driving"
                  );
                }}
              >
                Get Directions
              </MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
    </div>
  );
}

export default MapModal;
