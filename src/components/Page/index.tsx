import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Collapsible } from "react-native-fast-collapsible";

import { type PageListProps } from "@/components/PageList";

import { colors } from "@/styles/colors";

import { s } from "@/components/Page/style";

type PageProps = {
  data: PageListProps["data"][0];
};

export function Page({ data }: PageProps) {
  const [isVisible, setVisibility] = useState(false);

  const toggleCollpase = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <View style={s.container}>
      <View style={s.content}>
        <TouchableOpacity onPress={toggleCollpase}>
          <Feather
            name={!isVisible ? "chevron-right" : "chevron-down"}
            size={20}
            color={colors.gray[300]}
          />
        </TouchableOpacity>
        <Feather name="file-text" size={20} color={colors.gray[300]} />

        <Text style={s.title}>{data.title}</Text>

        <TouchableOpacity>
          <Feather name="plus" size={20} color={colors.gray[300]} />
        </TouchableOpacity>
      </View>

      <Collapsible isVisible={isVisible} duration={200}>
        <View style={s.collapseItem}>
          {data?.pages?.map((page) => (
            <View style={s.collapseItemPage} key={page.id}>
              <Text style={s.title}>{page.title}</Text>
            </View>
          )) || (
            <View style={s.collapseItemPage}>
              <Text style={s.noPage}>Não há páginas internas</Text>
            </View>
          )}
        </View>
      </Collapsible>
    </View>
  );
}
