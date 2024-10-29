import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

function ForgotPasswordScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recover Password</Text>
            <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
            <Button
                title="Send Recovery Email"
                onPress={() => Alert.alert('Recovery email sent')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
});

export default ForgotPasswordScreen;
