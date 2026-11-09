
import { useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomBar from "../components/BottomBar";
import AddModal from "../components/AddModal";

import HomeScreen from "../screens/HomeScreen";
import PageOneScreen from "../screens/PageOneScreen";
import PageTwoScreen from "../screens/PageTwoScreen";

import type { MainTabParamList } from "./navigationTypes";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabs() {
  const [addVisible, setAddVisible] = useState(false);

  return (
    <>
      <Tab.Navigator
        initialRouteName="Accueil"
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => (
          <BottomBar
            {...props}
            onAddPress={() => setAddVisible(true)}
          />
        )}
      >
        <Tab.Screen
          name="Accueil"
          component={HomeScreen}
        />

        <Tab.Screen
          name="PageUne"
          component={PageOneScreen}
        />

        <Tab.Screen
          name="PageDeux"
          component={PageTwoScreen}
        />
      </Tab.Navigator>

      <AddModal
        visible={addVisible}
        onClose={() => setAddVisible(false)}
      />
    </>
  );
}
