import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default class Poster extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { navigation, item, listAuthors } = this.props;
    const { width } = Dimensions.get("window");
    return (
      <View>
        <View style={styles.header}>
          <Image source={{ uri: listAuthors.photo }} style={styles.imageAuthor}></Image>
          <Text style={styles.textNameAuthor}>{listAuthors.name}</Text>
        </View>
        <Image
          source={{ uri: item.photoPoster }}
          style={{ width, height: 300, resizeMode: "cover" }}
        />
        <View style={styles.footer}>
          <View style={styles.icons}>
            <Ionicons name="ios-heart-empty" color="#000" size={25} style={styles.icon}></Ionicons>
            <Ionicons name="ios-chatboxes" color="#000" size={25} style={styles.icon}></Ionicons>
          </View>
          <View>
            <Text style={styles.text}>{item.textPoster}</Text>
          </View>
        </View>
        {/* <Text>Screen Poster</Text>
        <Button title="Comments" onPress={() => navigation.push("Comments")} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginVertical: 16
  },
  imageAuthor: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  footer: {
    marginHorizontal: 16
  },
  icons: {
    flexDirection: "row"
  },
  icon: {
    marginLeft: 16,
    marginVertical: 16
  },
  text: {
    marginBottom: 16
  }
});
