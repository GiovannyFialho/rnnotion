import { FlatList, Text, View } from "react-native";

import { Recent } from "@/components/Recent";

import { s } from "@/components/RecentList/style";

type RecentListProps = {
  data: {
    id: string;
    title: string;
    cover?: string;
  }[];
};

export function RecentList({ data }: RecentListProps) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Recentes</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Recent data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.content}
      />
    </View>
  );
}
