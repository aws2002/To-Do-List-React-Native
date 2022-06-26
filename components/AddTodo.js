import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <View style={styles.btn}>
      <Button
        color="#fff"
        onPress={() => submitHandler(text)}
        title="Add Todo List"
      />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  btn:{
      backgroundColor:'#333',
      borderRadius:5,

  }
});
