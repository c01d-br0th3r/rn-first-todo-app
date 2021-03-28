import React, { useState } from "react";
import { StyleSheet, View, Button, SafeAreaView, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleChange = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handlePress = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
    setEnteredGoal("");
  };

  const handleDelete = (goalId) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== goalId)
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          enteredGoal={enteredGoal}
          handleChange={handleChange}
          handlePress={handlePress}
        />
        <FlatList
          keyExtractor={(item, index) => item.key}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.key}
              handleDelete={handleDelete}
              title={itemData.item.value}
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
