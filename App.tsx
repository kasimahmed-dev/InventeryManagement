/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { View, Text } from "react-native";
import SplashScreen from './src/screens/Splash/SplashScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  // Replace with your actual main screen/navigation
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Main App Screen 🚀</Text>
    </View>
  );
};

export default App;
