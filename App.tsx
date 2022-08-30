import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "./components/ProgressBar";

const MetricsLabel = () => {
  return (
    <View>
      <View style={styles.metricsContainer}>
        <Text style={styles.boldText}>8 of 10 </Text>
        <Text style={styles.regText}>complete</Text>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MetricsLabel />
      <ProgressBar value={0.8} colors={["#4776E6", "#8E54E9"]} />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 20,
  },
  metricsContainer: {
    flexDirection: "row",
  },
  boldText: {
    color: "black",
    fontSize: 18,
    fontWeight: "700",
  },
  regText: {
    color: "black",
    fontSize: 18,
  },
});
