# Debounced Button

Debounced Button is a React Native component that handles the issue of double-clicking buttons. It uses a debounce mechanism to ensure that the button click event is triggered only once within a specified interval, preventing accidental multiple clicks.

## Installation

Install debounced-button with npm

```bash
  npm install debounced-button
```
    
## Usage/Examples

```javascript
import React from 'react';
import { View } from 'react-native';
import DebouncedButton from './DebouncedButton';

const App = () => {
  const handleButtonPress = async () => {

    // Perform any other actions you need on button press (Start)

    console.log("object")
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
   await fetch("https://hub.dummyapis.com/delay?seconds=20", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


    // Perform any other actions you need on button press (End)
  };

  const styles = {
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabledButton: {
      backgroundColor: 'gray',
    },
  };

  return (
    <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
      <DebouncedButton onPress={handleButtonPress} title="Debouncing" disabled={false} style={{ backgroundColor: 'red', padding: 10, color:"#fff" }} buttonStyle={styles} textStyle={{ color: 'white', fontSize: 16 }} />
    </View>
  );
};

export default App;
```


## Props

The DebouncedButton component accepts the following props:

* `onPress` (function, required): The callback function to be executed when the button is pressed.

* `title` (string): The text to be displayed on the button.

* `disabled` (boolean): The button State

* `style` : The Styles For Button

* `buttonStyle` : The Styles For Button

* `textStyle` : The Styles For Text


## Authors

- [@prathmeshrewale - github](https://github.com/prathmeshrewale)
- [Prathmesh Rewale - NPM](https://www.npmjs.com/~prathmeshrewale)

## FAQ

#### Will this Work on Android

Yes

#### Will this Work on IOS

Yes


## Used By

This project is used by the following companies:

- Blaze Technologies
- Horizon Metals
- unimix Metals

