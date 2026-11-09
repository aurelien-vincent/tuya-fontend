import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import type { MainTabParamList } from "../navigation/navigationTypes";

import { colors } from "../theme/colors";

interface ContentPageProps {
  title: string;
  description: string;
}

type Navigation = BottomTabNavigationProp<MainTabParamList>;

export default function ContentPage({
  title,
  description,
}: ContentPageProps) {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "left", "right"]}
    >
      <View style={styles.content}>
        <Pressable
          onPress={() => navigation.navigate("Accueil")}
          accessibilityRole="button"
          style={styles.backButton}
        >
          <Text style={styles.backText}>
            ← Retour à l'accueil
          </Text>
        </Pressable>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  backButton: {
    marginBottom: 32,
    paddingVertical: 10,
  },
  backText: {
    color: colors.primary,
    fontWeight: "600",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textMuted,
  },
});