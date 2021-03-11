import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Details() {
    return (
        <View style={StyleSheet.container}>
            <Text>Details</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        padding: 40
    }
});