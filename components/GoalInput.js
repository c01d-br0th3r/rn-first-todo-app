import React from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.topSection}>
        <TextInput
          placeholder="Input your goal"
          style={styles.inputField}
          onChangeText={props.handleChange}
          value={props.enteredGoal}
        />
        <Button title="ADD" onPress={props.handlePress} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
