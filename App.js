import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Easing } from "react-native";

const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  //spin
  spinValue = new Animated.Value(0);

  // First set up animation 
  const spinAnimat = (val) => {
      Animated.timing(
        spinValue,
      {
        toValue: val,
        duration: 500,
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: false  // To make use of native driver for performance
      }
    ).start()
  }
  
  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  //scale
  scaleValue = new Animated.Value(0);

  const scaleAnim = (val) => {
    Animated.timing(scaleValue, {
      toValue: val,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false
    }).start()
  }

  const scaling = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2]
  })

  //skew
  skewValue = new Animated.Value(0);
  const skew = this.skewValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '35deg']
  })

  const skewAnim = (val) => {
    Animated.timing(skewValue, {
      toValue: val,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false
    }).start()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
            transform: [{rotate: spin}, {scaleX: scaling}, {scaleY: scaling}, {skewX: skew}, {skewY: skew}]
          }
        ]}
      >
        <Text style={styles.fadingText}>Animated View</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
        <Button title="Spin" onPress={() => {spinAnimat(1)}} />
        <Button title="Spin out" onPress={() => {spinAnimat(0)}} />
        <Button title="Scale" onPress={() => {scaleAnim(1)}} />
        <Button title="Scale out" onPress={() => {scaleAnim(0)}} />
        <Button title="Skew" onPress={() => {skewAnim(1)}} />
        <Button title="Skew out" onPress={() => {skewAnim(0)}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    justifyContent: "space-evenly",
    marginVertical: 50
  }
});

export default App;