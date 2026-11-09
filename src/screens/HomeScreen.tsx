
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import type { MainTabParamList } from "../navigation/navigationTypes";

import { useAppDispatch } from "../store/hooks";
import { logoutDemo } from "../store/slices/authSlice";
import { persistor } from "../store/store";

import { colors } from "../theme/colors";

type HomeNavigation = BottomTabNavigationProp<
  MainTabParamList,
  "Accueil"
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigation>();
  const dispatch = useAppDispatch();

  async function handleLogout() {
    dispatch(logoutDemo());

    // Force l'écriture du nouvel état local.
    try {
      await persistor.flush();
    } catch {
      // Le prochain démarrage doit rester considéré
      // comme non fiable tant qu'une vraie auth
      // serveur n'est pas en place.
    }
  }

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "left", "right"]}
    >
      <ScrollView
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Accueil
          </Text>

          <Pressable
            onPress={() => {
              void handleLogout();
            }}
            accessibilityRole="button"
            accessibilityLabel="Se déconnecter"
            style={styles.logoutButton}
          >
            <Text style={styles.logoutText}>
              Déconnexion
            </Text>
          </Pressable>
        </View>

        <Text style={styles.title}>
          Bienvenue sur Tuya
        </Text>

        <Text style={styles.subtitle}>
          Votre application est prête à être développée.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Tableau de bord
          </Text>

          <Text style={styles.cardText}>
            Vous êtes actuellement connecté au mode
            de démonstration.
          </Text>
        </View>

        <Pressable
          style={styles.linkCard}
          onPress={() => navigation.navigate("PageUne")}
          accessibilityRole="button"
        >
          <Text style={styles.linkTitle}>
            Ouvrir Page 1
          </Text>
          <Text style={styles.linkDescription}>
            Premier espace de navigation
          </Text>
        </Pressable>

        <Pressable
          style={styles.linkCard}
          onPress={() => navigation.navigate("PageDeux")}
          accessibilityRole="button"
        >
          <Text style={styles.linkTitle}>
            Ouvrir Page 2
          </Text>
          <Text style={styles.linkDescription}>
            Deuxième espace de navigation
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },
  logoutButton: {
    padding: 8,
  },
  logoutText: {
    color: colors.danger,
    fontWeight: "600",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textMuted,
    marginBottom: 28,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 10,
  },
  cardText: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
  },
  linkCard: {
    backgroundColor: colors.surface,
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 6,
  },
  linkDescription: {
    fontSize: 13,
    color: colors.textMuted,
  },
});
