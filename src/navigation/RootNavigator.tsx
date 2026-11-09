import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAppSelector } from "../store/hooks";

import LoginScreen from "../screens/LoginScreen";
import MainTabs from "./MainTabs";

import type { RootStackParamList } from "./navigationTypes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const isDemoLoggedIn = useAppSelector(
    (state) => state.auth.isDemoLoggedIn
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isDemoLoggedIn ? (
          <Stack.Screen
            name="Main"
            component={MainTabs}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}