import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class OpenCamera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> OpenCamera </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

export default OpenCamera;
