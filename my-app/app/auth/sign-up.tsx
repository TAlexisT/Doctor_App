import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

function SignUpScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <TextInput style={styles.input} placeholder="Username" />
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
            <Button title="Sign Up" onPress={() => Alert.alert('Account created')} />
            <TouchableOpacity onPress={() => router.push('../auth/sign-in')}>
                <Text style={styles.link}>Already have an account? Sign In!</Text>
            </TouchableOpacity>
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

export default SignUpScreen;
