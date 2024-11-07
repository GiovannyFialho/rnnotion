import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 16
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 16
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[100]
  },
  noPage: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[400]
  },
  collapseItem: {
    overflow: "hidden",
    marginLeft: 45
  },
  collapseItemPage: {
    flex: 1,
    paddingTop: 10
  }
});
