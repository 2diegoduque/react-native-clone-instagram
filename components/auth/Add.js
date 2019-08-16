import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Text>Home Add</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
