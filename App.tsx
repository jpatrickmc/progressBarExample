import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Animated, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ProgressBar, useTheme } from "react-native-paper";

const Progress = ({ step, steps, height }) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <Text style={{ fontSize: 12, fontWeight: "900", marginBottom: 4 }}>
        {step} / {steps}
      </Text>
      <View
        style={{
          height,
          backgroundColor: "gray",
          borderRadius: height,
          overflow: "hidden",
        }}
      >
        <View
          onLayout={(e) => {
            const newWidth = e.nativeEvent.layout.width;

            setWidth(newWidth);
          }}
          style={{
            height,
            width: "100%",
            borderRadius: height,
            backgroundColor: "blue",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      </View>
    </>
  );
};

const renderProgressBar = () => {
  return (
    // <View style={jobListScreenStyles.progressBarContainer}>
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
      <StatusBar style="auto" />
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
