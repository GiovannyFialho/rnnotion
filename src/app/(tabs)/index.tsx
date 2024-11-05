import { ScrollView, View } from "react-native";

import { Header } from "@/components/Header";
import { PageList } from "@/components/PageList";
import { RecentList } from "@/components/RecentList";

import { DATA } from "@/utils/data";

export default function Index() {
  return (
    <View style={{ flex: 1, paddingTop: 32 }}>
      <Header />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 100
        }}
      >
        <RecentList data={DATA.RECENT} />
        <PageList data={DATA.PAGES} />
      </ScrollView>
    </View>
  );
}
