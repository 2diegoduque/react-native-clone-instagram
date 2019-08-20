import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { actionLoadPosters } from "../../Store/Actions";

class Home extends Component {
  componentDidMount() {
    this.props.loadPoster();
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

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    loadPoster: () => {
      dispatch(actionLoadPosters());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
