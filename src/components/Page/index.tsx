import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { s } from "@/components/Page/style";
import { Feather } from "@expo/vector-icons";

type PageProps = {
  title: string;
};

export function Page({ title }: PageProps) {
  return (
    <View style={s.container}>
      <Feather name="chevron-right" size={20} color={colors.gray[300]} />
      <Feather name="file-text" size={20} color={colors.gray[300]} />

      <Text style={s.title}>{title}</Text>

      <TouchableOpacity>
        <Feather name="plus" size={20} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  );
}
