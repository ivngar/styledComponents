/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import styled, { ThemeProvider } from "styled-components";

// Basic component, when can add props to show different styles
const StyledView = styled.View`
  background-color: ${props => (props.primary ? "red" : "blue")};
`;

// We can extend component
const InnerView = StyledView.extend`
  border-color: black;
  border-width: 5;
  height: 100;
`;

// To create an animated component, like Animated.View
const InnerViewAnimated = Animated.createAnimatedComponent(InnerView);

const ThemeView = styled.View`
  background-color: ${props => props.theme.primary};
  border-color: ${props => props.theme.secondary};
  border-width: 5;
`;

class App extends Component {
  state = {
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 3000
    }).start();
  }

  render() {
    const { fadeAnim } = this.state;
    const theme = {
      primary: "green",
      secondary: "yellow"
    };

    return (
      <View style={styles.container}>
        <StyledView>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <StyledView primary>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
          </StyledView>
          <InnerViewAnimated style={{ opacity: fadeAnim }}>
            <Text style={styles.instructions}>extending StyleView</Text>
          </InnerViewAnimated>
        </StyledView>
        <ThemeProvider theme={theme}>
          <ThemeView>
            <Text>testing theme</Text>
          </ThemeView>
        </ThemeProvider>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 5
  }
});
