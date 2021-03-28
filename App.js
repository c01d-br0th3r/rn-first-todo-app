import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const handleChange = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handlePress = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.topSection}>
          <TextInput
            placeholder="Input your goal"
            style={styles.inputField}
            onChangeText={handleChange}
            value={enteredGoal}
          />
          <Button title="ADD" onPress={handlePress} />
        </View>
        <View>
          {courseGoals.map((goal) => (
            <Text>{goal}</Text>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputField: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
});
