import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// import Header from './components/Header/Header';
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
  ]);

  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    console.log(key);
    setTodos((prevTodo) => {
      return prevTodo.filter((item) => item.key != key);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 3) {
      setText("");
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    // <View style={styles.container}>

    //   <FlatList
    //     numColumns={2}
    //     keyExtractor={(item) => item.id}
    //     data={people}
    //     renderItem={({ item }) => (
    //       <TouchableOpacity onPress={() => pressHandler(item.id)}>
    //         <Text style={styles.item}>{item.name}</Text>
    //       </TouchableOpacity>
    //     )}
    //   />

    // </View>
    // <View style={styles.container}>
    //   <Header />
    //   <View style={styles.body}>
    //     <Text>Osama</Text>
    //   </View>
    // </View>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* add todo form */}
          <AddTodo submitHandler={submitHandler} />
          
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <ToDoList item={item} pressHandler={pressHandler} />
                // <TouchableOpacity onPress={() => pressHandler(item.key)}>
                //   <Text style={styles.itemText}>{item.text}</Text>
                // </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 27,
    // paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  body: { paddingHorizontal: 20, marginTop: 20 },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
  content: {
    flex: 1,
    padding: 30,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  itemText: {
    padding: 16,
    marginTop: 16,
    borderWidth: 2,
    borderColor: "#bbb",
    borderRadius: 5,
  },
});
