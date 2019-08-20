import React from "react";
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
        keyboardType="default"
        autoCapitalize={props.autoCapitalize}
        onBlur={props.input.onBlur}
        multiline
      />
      {props.meta.touched && props.meta.error && (
        <Text style={styles.textError}>{props.meta.error}</Text>
      )}
    </View>
  );
};

const fieldImage = props => {
  return (
    <View>
      <View>
        {props.meta.touched && props.meta.error && (
          <Text style={styles.textError}>{props.meta.error}</Text>
        )}
      </View>
    </View>
  );
};

const validate = (values, props) => {
  const errors = {};

  if (!props.image) {
    errors.image = "Imagen requerida";
  }

  return errors;
};

const AddDescriptionPosterForm = props => {
  return (
    <View style={styles.container}>
      <Field name="image" component={fieldImage} />
      <Field
        name="textPoster"
        component={fieldTextInput}
        ph="Descripción"
        autoCapitalize="sentences"
      />
      <Button title="Publicar" onPress={props.handleSubmit(props._createPoster)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3
  },
  containerTextInput: {
    marginHorizontal: 16
  },
  textInput: {
    height: 100,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    paddingLeft: 5
  },
  textError: {
    marginLeft: 5,
    fontSize: 10,
    color: "red"
  }
});

export default reduxForm({ form: "AddDescriptionPosterForm", validate })(AddDescriptionPosterForm);
