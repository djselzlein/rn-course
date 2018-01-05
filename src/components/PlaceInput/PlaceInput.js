import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ''
    }

    placeNameChangedEvent = (val) => {
        this.setState({
            placeName: val
        })
    }

    placeSubmitHandler = () => {
        if(this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    style={{width: 300}}
                    placeholder="An awesome placeholder"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedEvent} 
                    style={styles.placeInput}
                />
                <Button 
                    title="Add"
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    placeInput: {
        width: '70%',
    },
    placeButton: {
        width: '30%',
    },
})


export default PlaceInput;