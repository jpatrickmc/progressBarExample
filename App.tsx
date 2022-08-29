import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProgressBar = ({ value, colors = ["yellow", "green"] }) => {
  const formatValue = () => {
    return `${value * 100}%`;
  };

  return (
    <View>
      <View style={styles.metricsContainer}>
        <Text style={styles.boldText}>{value} of 5 </Text>
        <Text style={styles.regText}>jobs complete</Text>
      </View>
      <View>
        <View style={styles.baseBar} />
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={colors}
          style={[styles.valueBar, { width: formatValue() }]}
        />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar value={0.4} />
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
  baseBar: {
    height: 5,
    width: "100%",
    backgroundColor: "grey",
  },
  valueBar: {
    height: 5,
    backgroundColor: "red",
    position: "absolute",
  },
});
