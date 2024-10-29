import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DOCTOR'S POINT</Text>
            <TouchableOpacity style={styles.signUpButton} onPress={() => router.push('/auth/sign-up')}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInButton} onPress={() => router.push('/auth/sign-in')}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A73E8', // Fondo azul con tonos
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 40,
    },
    signUpButton: {
        backgroundColor: '#34D1BF', // Color verde claro para el botón de Sign Up
        paddingVertical: 12,
        paddingHorizontal: 80,
        borderRadius: 8,
        marginBottom: 15,
    },
    signUpButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    signInButton: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 80,
        borderRadius: 8,
    },
    signInButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
