import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import Result from "./Result";
export default function Quiz(props) {
  const questions = props.array;
  const [questionCount, setQuestionCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[questionCount]
  );
  const [correctAns, setCorrectAns] = useState(0);

  function quizHandler(e) {
    setQuestionCount(questionCount + 1);
    setCurrentQuestion(questions[questionCount]);
  }


  function retake() {
    setQuestionCount(0);
  }
  return (
    <View style={styles.container}>
      {questionCount != questions.length ? (
        <>
          <View style={styles.questionCount}>
            <Text style={styles.questionCountText}>{questionCount}/10</Text>
          </View>
          <View style={styles.questionHeader}>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
          </View>
          <View style={styles.seperator}></View>
          <View style={styles.optionsContainer}>
            {currentQuestion.answers.map((ans) => {
              return (
                <Pressable
                  key={ans}
                  onPress={quizHandler}
                  style={styles.optionBTN}
                >
                  <Text>{ans}</Text>
                </Pressable>
              );
            })}
          </View>
        </>
      ) : (
        <Result result={correctAns} />
      )}
    </View>
  );

}
const styles = StyleSheet.create({
  Container: {
    marginTop: "50",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    fontSize: 30,
  },
  questionCount:{
    color: "yellow",

  }

})