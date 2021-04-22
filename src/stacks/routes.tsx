import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../styles/colors";
import { Welcome } from "../screens/Welcome";
import { Confirmation } from "../screens/Confirmation";
import { CheckName } from "../screens/CheckName";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen name="CheckName" component={CheckName} />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
