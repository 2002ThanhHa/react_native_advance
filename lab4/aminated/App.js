import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Animated, ImageBackground, Image } from 'react-native';
import { useRef } from 'react';

export default function App() {
  const app = useRef (new Animated.Value(0)).current
  const appIn=()=>{
      Animated.timing(app,{
        toValue:1,
        duration:500,
        useNativeDriver:true,
      }).start();
  }
  const appOut=()=>{
    Animated.timing(app,{
      toValue:0,
      duration:500,
      useNativeDriver:true,
    }).start();
}
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/1.png')} resizeMode='contain'  style={styles.image}>
      
      <View style ={{flexDirection:'row', justifyContent:'center', alignContent:'space-between'}}>
      <Animated.View style={[{opacity:app}, styles.styleAnimatedView]}>
            <Text style ={{color:"blue", fontSize: 24}}> app view</Text>

          </Animated.View> 
          <Animated.Image style={[{opacity:app}, {height:80, width:80, justifyContent:'center'}]} source={require('./assets/2.jpg')}/>
          
          
      </View>
        
        <View style={{justifyContent:'space-evenly', flexBasis:100}}>
          <Button title='app in' onPress={appIn}/>
          <Button title='app out' onPress={appOut}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleAnimatedView:{
    backgroundColor: 'pink',
    padding:10,

  },
  image: {
    
    justifyContent: 'center',
    height: 500,
    width: 500,
  },
});

