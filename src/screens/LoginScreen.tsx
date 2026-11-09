
import { useState } from "react";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useAppDispatch } from "../store/hooks";
import { loginDemo } from "../store/slices/authSlice";
import { colors } from "../theme/colors";

const DEMO_EMAIL = "demo@tuya.local";
const DEMO_PASSWORD = "Demo1234!";

export default function LoginScreen() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("demo@tuya.local");
  const [password, setPassword] = useState("Demo1234!");
  const [error, setError] = useState<string | null>(null);

  function handleLogin() {
    Keyboard.dismiss();
    setError(null);

    const normalizedEmail = email.trim().toLowerCase();

    if (
      normalizedEmail !== DEMO_EMAIL ||
      password !== DEMO_PASSWORD
    ) {
      setError("Identifiants de démonstration incorrects.");
      return;
    }

    // Ne jamais mettre le mot de passe dans Redux.
    setPassword("");

    // Simulation locale uniquement.
    dispatch(loginDemo());
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Text style={styles.title}>Connexion</Text>

            <Text style={styles.subtitle}>
              Bienvenue sur Tuya
            </Text>

            <Text style={styles.label}>
              Adresse e-mail
            </Text>

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Adresse e-mail"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              maxLength={254}
              accessibilityLabel="Adresse e-mail"

            />

            <Text style={styles.label}>
              Mot de passe
            </Text>

            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Mot de passe"
              placeholderTextColor={colors.textMuted}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="off"
              maxLength={128}
              accessibilityLabel="Mot de passe"
              onSubmitEditing={handleLogin}
              returnKeyType="done"
            />

            {error && (
              <Text
                style={styles.error}
                accessibilityRole="alert"
              >
                {error}
              </Text>
            )}

            <Pressable
              onPress={handleLogin}
              style={styles.button}
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>
                Se connecter
              </Text>
            </Pressable>

            <View style={styles.demoInfo}>
              <Text style={styles.demoTitle}>
                Accès temporaire de démonstration
              </Text>

              <Text style={styles.demoText}>
                E-mail : demo@tuya.local
              </Text>

              <Text style={styles.demoText}>
                Mot de passe : Demo1234!
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  card: {
    padding: 24,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: colors.text,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 30,
    color: colors.textMuted,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
    color: colors.text,
    backgroundColor: colors.surface,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  error: {
    color: colors.danger,
    marginBottom: 12,
    fontSize: 14,
  },
  demoInfo: {
    marginTop: 24,
    padding: 14,
    borderRadius: 10,
    backgroundColor: colors.background,
  },
  demoTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 6,
  },
  demoText: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 4,
  },
});
