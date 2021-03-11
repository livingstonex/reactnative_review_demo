import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.text}>HOME</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        padding: 40
    },

    text: {
        fontFamily: 'indie'
    }
});