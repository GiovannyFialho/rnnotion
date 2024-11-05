import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12
  },
  title: {
    color: colors.gray[300],
    fontSize: 16,
    marginLeft: 20
  },
  content: {
    gap: 12,
    paddingHorizontal: 20
  }
});
