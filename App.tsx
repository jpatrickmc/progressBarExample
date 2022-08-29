import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Animated, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ProgressBar, useTheme } from "react-native-paper";

const renderProgressBar = () => {
  return (
    <View>
      <View style={styles.metricsContainer}>
        <Text style={styles.boldText}>3 of 5 </Text>
        <Text style={styles.regText}>jobs complete</Text>
      </View>
      <ProgressBar
        progress={0.3}
        color={"#07682E"} // #85C600 #07682E #DDE5DA
        style={{ height: 6, borderRadius: 100, backgroundColor: "#DDE5DA" }}
      />
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {renderProgressBar()}
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
  gradientContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
