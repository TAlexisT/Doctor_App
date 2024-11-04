import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import "../../global.css";

function SignInScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            <TouchableOpacity onPress={() => router.push('../auth/forgot-password')}>
                <Text style={styles.link}>Forgot your Password?</Text>
            </TouchableOpacity>
            <Button title="Sign In" onPress={() => router.push('../main/inicio')} />
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
    link: {
        color: '#1A73E8',
        marginVertical: 10,
    },
});

export default SignInScreen;
