import { View, Text, TextInput } from "react-native";
import React from "react";

const EditableText = ({ children, style, classname, ...props }) => {
  console.log(children);
  const [text, setText] = React.useState(`${children.join("")}`);
  return (
    <TextInput
      value={text}
      onChangeText={setText}
      style={style}
      classname={classname}
      multiline={true}
      {...props}
    ></TextInput>
  );
};

export default EditableText;
