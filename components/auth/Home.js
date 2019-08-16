import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.viewContainer}>
        <Text>Home Screen</Text>
        <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
        <Button title="Comentarios" onPress={() => navigation.navigate("Comments")} />
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
