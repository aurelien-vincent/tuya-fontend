import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { store, persistor } from "./src/store/store";

import RootNavigator from "./src/navigation/RootNavigator";

import { colors } from "./src/theme/colors";

function LoadingScreen() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator
        size="large"
        color={colors.primary}
      />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingScreen />}
        persistor={persistor}
      >
        <SafeAreaProvider>
          <StatusBar barStyle="dark-content" />

          <RootNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});