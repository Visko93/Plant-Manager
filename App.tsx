import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_300Light,
} from "@expo-google-fonts/jost";

//Components
import Routes from "./src/stacks";

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_300Light,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Routes />;
  }
}
