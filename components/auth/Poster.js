import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Poster extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.viewContainer}>
        <Text>Screen Poster</Text>
        <Button title="Comments" onPress={() => navigation.push("Comments")} />
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
