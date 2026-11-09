import { Pressable, StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "../theme/colors";

type Props = BottomTabBarProps & {
  onAddPress: () => void;
};

export default function BottomBar({
  state,
  navigation,
  onAddPress,
}: Props) {
  const insets = useSafeAreaInsets();

  const activeRoute = state.routes[state.index].name;

  function goTo(routeName: "PageUne" | "PageDeux") {
    const route = state.routes.find(
      (item) => item.name === routeName
    );

    if (!route) return;

    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (
      activeRoute !== routeName &&
      !event.defaultPrevented
    ) {
      navigation.navigate(routeName);
    }
  }

  return (
    <View
      style={[
        styles.bar,
        {
          paddingBottom: Math.max(insets.bottom, 10),
        },
      ]}
    >
      <Pressable
        style={styles.tab}
        onPress={() => goTo("PageUne")}
        accessibilityRole="tab"
        accessibilityLabel="Ouvrir la page 1"
        accessibilityState={{
          selected: activeRoute === "PageUne",
        }}
      >
        <Ionicons
          name="grid-outline"
          size={24}
          color={
            activeRoute === "PageUne"
              ? colors.primary
              : colors.textMuted
          }
        />

        <Text
          style={[
            styles.tabText,
            activeRoute === "PageUne" && styles.activeText,
          ]}
        >
          Page 1
        </Text>
      </Pressable>

      <Pressable
        style={styles.addButton}
        onPress={onAddPress}
        accessibilityRole="button"
        accessibilityLabel="Ajouter un élément"
      >
        <Ionicons name="add" size={32} color="#FFFFFF" />
      </Pressable>

      <Pressable
        style={styles.tab}
        onPress={() => goTo("PageDeux")}
        accessibilityRole="tab"
        accessibilityLabel="Ouvrir la page 2"
        accessibilityState={{
          selected: activeRoute === "PageDeux",
        }}
      >
        <Ionicons
          name="settings-outline"
          size={24}
          color={
            activeRoute === "PageDeux"
              ? colors.primary
              : colors.textMuted
          }
        />

        <Text
          style={[
            styles.tabText,
            activeRoute === "PageDeux" && styles.activeText,
          ]}
        >
          Page 2
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    minHeight: 70,
    paddingTop: 10,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    gap: 4,
  },
  tabText: {
    fontSize: 12,
    color: colors.textMuted,
  },
  activeText: {
    color: colors.primary,
    fontWeight: "700",
  },
  addButton: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -28,
    marginHorizontal: 24,
    elevation: 6,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});