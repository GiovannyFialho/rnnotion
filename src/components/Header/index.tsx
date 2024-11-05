import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import { s } from "@/components/Header/style";

export function Header() {
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{ uri: "https://github.com/GiovannyFialho.png" }}
      />

      <View style={s.user}>
        <Text style={s.name}>Giovanny Fialho</Text>
        <Text style={s.email}>giovannyf@outlook.com</Text>
      </View>

      <TouchableOpacity>
        <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
      </TouchableOpacity>
    </View>
  );
}
