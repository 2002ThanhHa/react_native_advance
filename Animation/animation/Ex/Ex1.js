import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fly: new Animated.Value(800), 
    };
  }

  componentDidMount() {
    const flys =()=>{
        const items =[];
        for (var i=0 ;  i < 7; i++ ){
            items.push(
                Animated.timing(this.state.fly, {
                    toValue: 1, 
                    duration: 3000,
                    useNativeDriver: false,
                  }).start()
            )}
        }
    }

    // Animated.timing(this.state.fly, {
    //   toValue: 1, 
    //   duration: 3000,
    //   useNativeDriver: false,
    // }).start();
// }
  

  render() {
    return (
      <Animated.View
        style={{
          transform: [{ translateY: this.state.fly }],
          opacity: this.state.fly.interpolate({
            inputRange: [0, 800],
            outputRange: [0,1],
          }),
        }}
      >
        
        <View
          style={{
            marginLeft: 180,
            width: 50,
            height: 50,
            backgroundColor: 'pink',
            borderRadius: 50,
          }}
        />
      </Animated.View>
    );
  }
}

export default Bubble;
