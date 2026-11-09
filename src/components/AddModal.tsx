import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors } from "../theme/colors";

interface AddModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AddModal({
  visible,
  onClose,
}: AddModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>
            Ajouter un élément
          </Text>

          <Text style={styles.description}>
            Cet espace accueillera le formulaire de création.
            Aucune donnée n'est encore enregistrée.
          </Text>

          <Pressable
            style={styles.closeButton}
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Fermer"
          >
            <Text style={styles.closeText}>
              Fermer
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "rgba(15, 23, 42, 0.6)",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: colors.surface,
    padding: 24,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    color: colors.text,
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    color: colors.textMuted,
    marginBottom: 24,
  },
  closeButton: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  closeText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});