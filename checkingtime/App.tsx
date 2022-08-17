import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

import SNavigation from "./src/navigation";

import AddStaff from "./src/Screens/AddStaff/AddStaff";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import UpdateStaff from "./src/Screens/UpdateInfoStaff/UpdateStaff";
import UpdateInfoStaff_NV from "./src/Screens/UpdateInFoStaff_NV/UpdateInfoStaff_NV";
import ListStaff from "./src/Screens/ListStaff/ListStaff";
import Todo_Admin from "./src/Screens/TodoList/Todo_All";
import Todo_Staff from "./src/Screens/TodoList/Todo_Staff";
import Add_Todo from "./src/Screens/TodoList/Add_Todo";
import { NativeRouter, Router } from "react-router-native";


const App = () => {
  const [fontsLoaded] = useFonts({
    VanSansBold: require("./assets/fonts/VanSans-Bold.otf"),
    VanSansBlack: require("./assets/fonts/VanSans-Black.otf"),
    VanSansBlackItalic: require("./assets/fonts/VanSans-BlackItalic.otf"),
    VanSansBoldItalic: require("./assets/fonts/VanSans-BoldItalic.otf"),
    VanSansExtraBold: require("./assets/fonts/VanSans-ExtraBold.otf"),
    VanSansExtraBoldItalic: require("./assets/fonts/VanSans-ExtraBoldItalic.otf"),
    VanSansLight: require("./assets/fonts/VanSans-Light.otf"),
    VanSansLightItalic: require("./assets/fonts/VanSans-LightItalic.otf"),
    VanSansMedium: require("./assets/fonts/VanSans-Medium.otf"),
    VanSansMediumItalic: require("./assets/fonts/VanSans-MediumItalic.otf"),
    VanSansRegular: require("./assets/fonts/VanSans-Regular.otf"),
    VanSansRegularItalic: require("./assets/fonts/VanSans-RegularItalic.otf"),
    VanSansSemiBold: require("./assets/fonts/VanSans-SemiBold.otf"),
    VanSansSemiBoldItalic: require("./assets/fonts/VanSans-SemiBoldItalic.otf"),
    VanSansThin: require("./assets/fonts/VanSans-Thin.otf"),
    VanSansThinItalic: require("./assets/fonts/VanSans-ThinItalic.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    // <NativeRouter>
    <Provider store={store}>

    <SafeAreaView style={styles.root}>
       <SNavigation /> 
       {/* <NavigationContainer>
        <Add_Todo/>
       </NavigationContainer> */}
      </SafeAreaView>
    </Provider>
    // </NativeRouter>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default App;
