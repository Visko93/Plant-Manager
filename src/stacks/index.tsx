import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackRouter from "./routes";

const Routes = () => (
  <NavigationContainer>
    <StackRouter />
  </NavigationContainer>
);

export default Routes;
