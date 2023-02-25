import React from "react";

import SignInNavigator from "./SignIn";
import SignedInNavigator from "./SignedIn";

const Routes: React.FC = () => {
  const isSignedIn = false;

  return isSignedIn ? <SignInNavigator /> : <SignedInNavigator />;
};

export default Routes;