import React from "react";
import { View } from "react-native";
import Header from "./src/components/Header";
import List from "./src/components/List";

const App = () => {
  return (
    <View>
      <Header headerText={"Home"} />
      <List />
    </View>
  );
};

export default App;
