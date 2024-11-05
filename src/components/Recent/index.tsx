import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { s } from "@/components/Recent/style";

type RecentProps = {
  data: {
    title: string;
    cover?: string;
  };
};

export function Recent({ data }: RecentProps) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.7}>
      <Image style={s.cover} source={{ uri: data.cover }} />

      <View style={s.content}>
        <Feather
          name="file-text"
          size={32}
          color={colors.gray[300]}
          style={s.icon}
        />

        <Text style={s.title} numberOfLines={2}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
