import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import LoginForm from "./Forms/LoginForm";
import { actionLogin } from "../../Store/Actions";

class Login extends Component {
  _loginUser = values => {
    this.props.login(values);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.viewContainer}>
        <LoginForm _loginUser={this._loginUser} />
        <Button title="Registrarme" onPress={() => navigation.navigate("SignUp")} />
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
    login: values => {
      dispatch(actionLogin(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
