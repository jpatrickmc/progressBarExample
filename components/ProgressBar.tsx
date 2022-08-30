import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const ProgressBar = ({ value, colors }) => {
  const formatValue = () => {
    return `${value * 100}%`;
  };

  return (
    <View>
      <View>
        <View style={styles.baseBar} />
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={colors}
          style={[styles.valueBar, { width: formatValue() }]}
          locations={[0.3, 0.7]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseBar: {
    height: 6,
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 100,
  },
  valueBar: {
    height: 6,
    position: "absolute",
    borderRadius: 100,
  },
});
