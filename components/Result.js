import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { Button } from "react-native";
export default function Result(props) {
  let result = props.result;
  return (
    <View style={styles.container}>
      <View>
        <Text>Total Score: {result}</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.top}>Top Users</Text>
        <Text style={styles.bot}>Yo: {result} out of 10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  secondContainer: {
    marginTop: "50",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    fontSize: 30,
  },
})