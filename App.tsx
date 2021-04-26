import React from "react";
import AppLoading from "expo-app-loading";
import * as Notifications from "expo-notifications";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_300Light,
} from "@expo-google-fonts/jost";

//Components
import Routes from "./src/stacks";
import { PlantProps } from "./src/util/storage";

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_300Light,
    Jost_600SemiBold,
  });

  React.useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    );

    return () => subscription.remove();

    // async function notifications() {
    //   //Get All
    //   // const data = await Notifications.getAllScheduledNotificationsAsync()
    //   // console.log(data);
    //   //Cancel All
    //   await Notifications.cancelAllScheduledNotificationsAsync()
    // }
    // notifications()
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Routes />;
  }
}
