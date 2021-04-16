import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Input } from "react-native-clean-form";

export default function MyTextInput(props) {
  const { input, ...inputProps } = props;

  return (
    <View>
      <TextInput
        style={{ color: "white" }}
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    </View>
  );
}
