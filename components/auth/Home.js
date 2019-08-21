import React, { Component } from "react";
import { StyleSheet, Text, View, Button, FlatList, Image, Dimensions } from "react-native";
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
        <FlatList
          data={this.props.listPosts}
          renderItem={({ item }) => {
            const { width } = Dimensions.get("window");
            return <Image source={{ uri: item.photoPoster }} style={{ width, height: 300, resizeMode: "cover" }} />;
          }}
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
  }
});

function mapStateToProps(state) {
  return {
    listPosts: state.reducerPostersHome
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
