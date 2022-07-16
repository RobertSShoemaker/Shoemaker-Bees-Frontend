import { createContext } from "react";

export const SignUpContext = createContext({
  email: null,
  fName: null,
  lName: null,
  signUp: () => {},
});
