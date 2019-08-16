import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { autentication } from "../../Store/Services/Firebase";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.viewContainer}>
        <Text>Screen Profile</Text>
        <Button title="Poster" onPress={() => navigation.navigate("Poster")} />
        <Button
          title="Cerrar Sesion"
          onPress={() => {
            autentication.signOut();
          }}
        />
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
