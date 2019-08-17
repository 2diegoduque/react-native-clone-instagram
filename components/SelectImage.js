import * as React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Constants, Permissions } from "react-native-unimodules";

class SelectImage extends React.Component {
  render() {
    let { image } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._pickImage}>
          {image ? (
            <Image style={styles.imageProfile} source={{ uri: image.uri }} />
          ) : (
            <Image style={styles.imageProfile} source={require("../assets/default-picture.png")} />
          )}
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4]
    });

    if (!result.cancelled) {
      this.props.uploadImage(result);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageProfile: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50
  }
});

export default SelectImage;
