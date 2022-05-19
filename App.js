import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Quiz from "./components/Quiz";

export default function App() {
  let arr = [
    {
      question: "Example Question",
      answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctIndex: 2,
    },
    {
      question: "Everything is react is a ",
      answers: ["Module", "Component", "Hooks", "Template"],
      correctIndex: 1,
    },
    {
      question: "’1’ + 1 ",
      answers: ["11", "1", "0", "2"],
      correctIndex: 0,
    },
    {
      question: "'5.0' = = = 5 ",
      answers: ["True", "False"],
      correctIndex: 1,
    },
    {
      question: "Is JavaScript case sensitive language ",
      answers: ["Yes", "No"],
      correctIndex: 0,
    },
    {
      question: "(['First','Second','Third'].join(' - ')",
      answers: [
        "First Second Third",
        "First,Second,Third",
        "First-SecondThird",
      ],
      correctIndex: 2,
    },
    {
      question: "How many values are available for flexDirection?",
      answers: ["2", "4", "5"],
      correctIndex: 1,
    },
    {
      question: "How many built-in hooks are available in react-native?",
      answers: ["2", "4", "5", "3"],
      correctIndex: 2,
    },
    {
      question: "Which command is used to make a directory git enabled?",
      answers: ["git commit", "git init", "git push", "git pull"],
      correctIndex: 1,
    },
    {
      question: "What is useEffect used for?",
      answers: ["Perform Side Effects", "Nothing", "Update UI", "ManageState"],
      correctIndex: 0,
    },
  ];

  return (
    <View style={styles.container}>
      <Quiz array={arr} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 60,
  },
})