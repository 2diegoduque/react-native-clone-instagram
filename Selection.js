import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { autentication } from "./Store/Services/Firebase";
import { actionDefineSession, actionCloseSession } from "./Store/Actions";
import RoutesGuest from "./components/guest/RoutesGuest";
import RoutesAuth from "./components/auth/RoutesAuth";

export class Selection extends Component {
  componentWillMount = () => {
    this.props.autenticationUser();
  };

  render() {
    return (
      <View style={styles.container}>{this.props.userData ? <RoutesAuth /> : <RoutesGuest />}</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const mapStateToProps = state => ({
  userData: state.reducerSession
});

const mapDispatchToProps = dispatch => {
  return {
    autenticationUser: () => {
      autentication.onAuthStateChanged(user => {
        if (user) {
          dispatch(actionDefineSession(user));
        } else {
          dispatch(actionCloseSession());
        }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selection);
