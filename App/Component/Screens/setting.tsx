import React from 'react';
import { View, Text, Button } from 'react-native';


const Setting = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

    return (
      <View style={styles.viex1}>
        <Button title="Switch to Dark Mode" onPress={() => null} />
        <Text style={styles.text}>We are on Light mode!</Text>
      </View>
    );
  };

  const styles = {
    text:{
      marginBottom:20
    },
    viex1:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  }
  export default Setting;
