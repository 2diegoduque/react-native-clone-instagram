import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Field, reduxForm } from "redux-form";

const fieldTextInput = props => {
  return (
    <View style={styles.containerTextInput}>
      <TextInput
        style={styles.textInput}
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize}
        secureTextEntry={props.secureTextEntry}
        onBlur={props.input.onBlur}
      />
      {props.meta.touched && props.meta.error && (
        <Text style={styles.textError}>{props.meta.error}</Text>
      )}
    </View>
  );
};

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Correo requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Correo invalido";
  }

  if (!values.password) {
    errors.password = "Contraseña requerida";
  } else if (values.password.length < 5) {
    errors.password = "Deben ser de al menos 5 caracteres";
  } else if (values.password.length > 15) {
    errors.password = "Deben ser menor de 15 caracteres";
  }

  return errors;
};

const LoginForm = props => {
  return (
    <View>
      <Field
        name="email"
        component={fieldTextInput}
        ph="Correo"
        keyboardType="email-address"
        autoCapitalize="none"
        secureTextEntry={false}
      />
      <Field
        name="password"
        component={fieldTextInput}
        ph="Contraseña"
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Button title="Entrar" onPress={props.handleSubmit(props._loginUser)} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTextInput: {
    marginBottom: 16
  },
  textInput: {
    height: 40,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5
  },
  textError: {
    marginLeft: 5,
    fontSize: 10,
    color: "red"
  }
});

export default reduxForm({ form: "LoginForm", validate })(LoginForm);
