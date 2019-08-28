// Playground for https://github.com/jeanregisser/react-native-slider

import React from "react";
import ColumnSlider from 'react-native-column-slider';
import { StyleSheet, View, Text, ImageBackground } from "react-native";


export default class SliderExample extends React.Component {
  state = {
    value1: 2,
    value2: 4,
    value3: 6,
    value4: 8,
  };

  render() {
    return (

      <View style={styles.rowContainer}>
      <ColumnSlider
              height={100}
              width={50}
              min={0}
              max={10}
              step={1}
              borderRadius={10}
              minimumTrackTintColor='#16A4BD'
              maximumTrackTintColor='#fff'
              textStyle={{ color: '#16A4BD' }}
              value={this.state.value1}
              onValueChange={value1 => this.setState({ value1 })}
          />

          <ColumnSlider
                  height={100}
                  width={50}
                  min={0}
                  max={10}
                  step={1}
                  borderRadius={10}
                  minimumTrackTintColor='#16A4BD'
                  maximumTrackTintColor='#fff'
                  textStyle={{ color: '#16A4BD' }}
                  value={this.state.value2}
                  onValueChange={value2 => this.setState({ value2 })}
              />
              <ColumnSlider
                      height={100}
                      width={50}
                      min={0}
                      max={10}
                      step={1}
                      borderRadius={10}
                      minimumTrackTintColor='#16A4BD'
                      maximumTrackTintColor='#fff'
                      textStyle={{ color: '#16A4BD' }}
                      value={this.state.value3}
                      onValueChange={value3 => this.setState({ value3 })}
                  />
                  <ColumnSlider
                          height={100}
                          width={50}
                          min={0}
                          max={10}
                          step={1}
                          borderRadius={10}
                          minimumTrackTintColor='#16A4BD'
                          maximumTrackTintColor='#fff'
                          textStyle={{ color: '#16A4BD' }}
                          value={this.state.value4}
                          onValueChange={value4 => this.setState({ value4 })}
                      />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "flex-end",
    justifyContent: "space-around",
    paddingBottom: 50
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
