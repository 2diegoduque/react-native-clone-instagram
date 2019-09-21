import React, { Component } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { connect } from "react-redux";
import { actionLoadPosters } from "../../Store/Actions";
import Poster from "./Poster";

class Home extends Component {
  componentDidMount() {
    this.props.loadPoster();
  }

  render() {
    const { navigation, listAuthors } = this.props;
    return (
      <View style={styles.viewContainer}>
        <FlatList
          data={this.props.listPosts}
          renderItem={({ item, index }) => (
            <Poster item={item} listAuthors={listAuthors[index]}></Poster>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
        {/* <Text>Home Screen</Text>
        <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
        <Button title="Comentarios" onPress={() => navigation.navigate("Comments")} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  imagePoster: {
    width: 500,
    height: 300,
    resizeMode: "cover"
  },
  separator: {
    borderWidth: 1,
    borderColor: "#c0c0c0"
  }
});

function mapStateToProps(state) {
  return {
    listPosts: state.reducerPostersHome,
    listAuthors: state.reducerAuthorsHome
  };
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
