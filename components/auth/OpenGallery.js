import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { actionUploadImagePoster, actionUploadPoster } from "../../Store/Actions";
import SelectImage from "../SelectImage";
import AddDescriptionPosterForm from "./Forms/AddDescriptionPosterForm";
import { blur } from "redux-form";

class OpenGallery extends Component {
  componentWillUnmount = () => {
    this.props.clearImage();
  };

  _createPoster = values => {
    this.props.uploadPoster(values);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <SelectImage
            image={this.props.image.image}
            uploadImage={this.props.uploadImage}
            origin={"openGallery"}
          />
        </View>
        <View style={styles.viewText}>
          <AddDescriptionPosterForm
            _createPoster={this._createPoster}
            image={this.props.image.image}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  containerImage: {
    flex: 2
  },
  viewText: {
    flex: 2
  }
});

function mapStateToProps(state) {
  return {
    image: state.reducerImagePoster
  };
}

function mapDispatchToProps(dispatch) {
  return {
    uploadImage: image => {
      dispatch(actionUploadImagePoster(image));
      dispatch(blur("AddDescriptionPosterForm", "image", Date.now()));
    },
    uploadPoster: values => {
      dispatch(actionUploadPoster(values));
    },
    clearImage: () => {
      dispatch(actionClearImagePoster());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenGallery);
