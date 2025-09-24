import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface SplashScreenProps {
  onFinish: () => void;
}


const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // 2 sec delay

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/aboutreact.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  text: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default SplashScreen;
