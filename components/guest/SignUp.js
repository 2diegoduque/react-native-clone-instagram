import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { connect } from "react-redux";
import { blur, change } from "redux-form";
import SignUpForm from "./Forms/SignUpForm";
import { actionRegister, actionUploadImageRegister, actionClearImage } from "../../Store/Actions";
import SelectImage from "../SelectImage";

class SignUp extends Component {
  componentWillUnmount = () => {
    this.props.clearImage();
  };

  _createUser = values => {
    this.props.createUser(values);
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.viewContainer}>
        <SelectImage image={this.props.image.image} uploadImage={this.props.uploadImage} />
        <SignUpForm _createUser={this._createUser} image={this.props.image.image} />
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16
  }
});

const mapStateToProps = state => ({
  numero: state.reducerTest,
  image: state.reducerImageRegister
});

const mapDispatchToProps = dispatch => {
  return {
    createUser: values => {
      dispatch(actionRegister(values));
    },
    uploadImage: image => {
      dispatch(actionUploadImageRegister(image));
      dispatch(blur("SignUpForm", "image", Date.now()));
    },
    clearImage: () => {
      dispatch(actionClearImage());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
