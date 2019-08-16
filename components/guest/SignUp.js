import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import SignUpForm from "./Forms/SignUpForm";
import { actionRegister } from "../../Store/Actions";
import SelectImage from "../SelectImage";

class SignUp extends Component {
  _createUser = values => {
    this.props.createUser(values);
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.viewContainer}>
        <SelectImage />
        <SignUpForm _createUser={this._createUser} />
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
  numero: state.reducerTest
});

const mapDispatchToProps = dispatch => {
  return {
    createUser: values => {
      dispatch(actionRegister(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
