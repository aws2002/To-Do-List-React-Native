import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ToDoList({ item, pressHandler }) {
  return (
    <TouchableOpacity>
      <View style={styles.itemList}>
        <Text>{item.text}</Text>
        <View>
          <MaterialCommunityIcons
            name="delete-outline"
            size={24}
            color="red"
            onPress={() => pressHandler(item.key)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  itemList: {
    padding: 16,
    marginTop: 16,
    borderWidth: 2,
    borderColor: "#bbb",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between"
  },
});
