import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";

import { SignUpContext } from "context/sign-up-context";

// Custom Hooks
import { useHttpClient } from "../shared/hooks/http-hook";

function Home() {
  const signup = useContext(SignUpContext);
  const [isInput, setIsInput] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isFNameError, setIsFNameError] = useState(false);
  const [isLNameError, setIsLNameError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const navigate = useNavigate();

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setIsValidEmail(true);
      setIsEmailError(false);
    } else {
      setIsValidEmail(false);
      setIsEmailError(true);
    }
  };

  const validateFName = (e) => {
    var fName = e.target.value;
    if (validator.isEmpty(fName)) {
      setIsFNameError(true);
    } else {
      setIsFNameError(false);
    }
  };

  const validateLName = (e) => {
    var lName = e.target.value;
    if (validator.isEmpty(lName)) {
      setIsLNameError(true);
    } else {
      setIsLNameError(false);
    }
  };

  const changeInput = () => {
    setIsInput(!isInput);
  };

  const signUpSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/audience/signup",
        "POST",
        JSON.stringify({
          email: e.target.elements.email.value,
          fName: e.target.elements.fName.value,
          lName: e.target.elements.lName.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      signup.signUp(responseData.email, responseData.fName, responseData.lName);
      navigate("/Check-Email");
    } catch (err) {}
  };

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
          Honey
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
          Sign up to our email list to be notified when honey is back in stock.
        </MKTypography>

        {isInput && (
          <Stack direction="row" spacing={1} mt={3}>
            <form onSubmit={signUpSubmitHandler}>
              <MKInput
                element="input"
                name="fName"
                id="fName"
                type="text"
                variant="standard"
                label="first name"
                onChange={(e) => validateFName(e)}
              />
              {isFNameError && (
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <br />
                  'First name cannot be blank!'
                </span>
              )}
              <br />
              <MKInput
                element="input"
                name="lName"
                id="lName"
                type="text"
                variant="standard"
                label="last name"
                onChange={(e) => validateLName(e)}
              />
              {isLNameError && (
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <br />
                  'Last name cannot be blank!'
                </span>
              )}
              <br />

              <MKInput
                element="input"
                name="email"
                id="email"
                type="email"
                variant="standard"
                label="email"
                onChange={(e) => validateEmail(e)}
              />
              {isEmailError && (
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <br />
                  'Enter a valid email!'
                </span>
              )}
              <br />
              <br />
              <MKButton
                disabled={!isValidEmail || isFNameError || isLNameError}
                type="submit"
                color="white"
              >
                Sign Up
              </MKButton>
              <MKButton onClick={changeInput} variant="text" color="white">
                Cancel
              </MKButton>
              <br />
            </form>
          </Stack>
        )}
        {!isInput && (
          <Stack direction="row" spacing={1} mt={3}>
            <MKButton onClick={changeInput} color="white">
              Sign Up
            </MKButton>
          </Stack>
        )}
      </Grid>
    </Container>
  );
}

export default Home;
