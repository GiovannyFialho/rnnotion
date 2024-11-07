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
  const [isParentCollapsed, setIsParentCollapsed] = useState(false);
  const [childrenCollapsedStates, setChildrenCollapsedStates] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleParentCollapse = () => {
    const newParentCollapsed = !isParentCollapsed;

    setIsParentCollapsed(newParentCollapsed);

    if (!newParentCollapsed) {
      setChildrenCollapsedStates({});
    }
  };

  const toggleChildCollapse = (id: string) => {
    setChildrenCollapsedStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <View style={s.container}>
      <View style={s.content}>
        <TouchableOpacity onPress={toggleParentCollapse}>
          <Feather
            name={!isParentCollapsed ? "chevron-right" : "chevron-down"}
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

      <Collapsible isVisible={isParentCollapsed} duration={200}>
        <View style={s.collapseItem}>
          {data?.pages?.map((page) => (
            <View key={page.id}>
              <View style={s.subContent}>
                <TouchableOpacity onPress={() => toggleChildCollapse(page.id)}>
                  <Feather
                    name={
                      childrenCollapsedStates[page.id]
                        ? "chevron-down"
                        : "chevron-right"
                    }
                    size={20}
                    color={colors.gray[300]}
                  />
                </TouchableOpacity>
                <Feather name="file-text" size={20} color={colors.gray[300]} />

                <Text style={s.title}>{page.title}</Text>

                <TouchableOpacity>
                  <Feather name="plus" size={20} color={colors.gray[300]} />
                </TouchableOpacity>
              </View>

              <Collapsible
                isVisible={!!childrenCollapsedStates[page.id]}
                duration={10}
              >
                <Text style={s.subNoPage}>Não há páginas internas</Text>
              </Collapsible>
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
