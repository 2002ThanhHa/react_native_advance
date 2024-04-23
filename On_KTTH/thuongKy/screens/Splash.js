import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing, Pressable, Text } from 'react-native';

const Splash = ({navigation}) => {
  const moveAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnimation, {
          toValue: 200,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnimation, {
          toValue: 2,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnimation, {
          toValue: 360,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 3, // Số lần lặp
      }
    ).start();
  }, []);

  const interpolatedMoveAnimation = moveAnimation.interpolate({
    inputRange: [0, 200],
    outputRange: ['0deg', '200deg'],
  });

  const interpolatedRotateAnimation = rotateAnimation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          { transform: [{ translateY: moveAnimation }, { scale: scaleAnimation }, { rotate: interpolatedRotateAnimation }] },
        ]}
      />
      <Pressable onPress ={()=>{navigation.navigate("LogIn")}}>
        <Text>LogIn</Text>
      </Pressable>
      {/* <View onPress ={()=>{navigation.navigate("LogIn")}}>LogIn</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    marginTop: -500
  },
});

export default Splash;