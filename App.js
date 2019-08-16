import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import Selection from "./Selection";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: "Instagram"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Selection />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
