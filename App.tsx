import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "./components/ProgressBar";
import axios from "axios";

const MetricsLabel = ({ totalJobs, jobsComplete }) => {
  return (
    <View>
      <View style={styles.metricsContainer}>
        <Text style={styles.boldText}>
          {jobsComplete} of {totalJobs}{" "}
        </Text>
        <Text style={styles.regText}>complete</Text>
      </View>
    </View>
  );
};

export default function App() {
  const [totalJobs, setTotalJobs] = useState(1);
  const [jobsComplete, setJobsComplete] = useState(1);

  useEffect(() => {
    axios
      .request({
        method: "post",
        url: "http://127.0.0.1:8000/todos/",
      })
      .then((response) => {
        console.log("response: ", response.data);
        setTotalJobs(response.data.length);
        setJobsComplete(response.data.filter((item) => item.complete).length);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MetricsLabel jobsComplete={jobsComplete} totalJobs={totalJobs} />
      <ProgressBar
        value={jobsComplete / totalJobs}
        colors={["#4776E6", "#8E54E9"]}
      />
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
