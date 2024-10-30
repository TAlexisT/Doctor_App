import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { db } from '../../constants/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

function SignUpScreen() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const onSignUp = async () => {
        if (!isValidEmail(email)) {
            Alert.alert("Error", "Por favor ingresa un correo electrónico válido");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Las contraseñas no coinciden");
            return;
        }

        try {
            await addDoc(collection(db, 'usuarios'), {
                username,
                email,
                phone,
                password,
            });
            Alert.alert('Éxito', 'Cuenta creada exitosamente');
            router.push('../auth/sign-in');
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al crear la cuenta');
            console.error("Error al agregar documento: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear Cuenta</Text>
            <TextInput style={styles.input} placeholder="Nombre de usuario" value={username} onChangeText={setUsername} />
            <TextInput style={styles.input} placeholder="Correo electrónico" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
            <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} value={password} onChangeText={setPassword} />
            <TextInput style={styles.input} placeholder="Confirmar contraseña" secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword} />
            <Button title="Registrarse" onPress={onSignUp} />
            <TouchableOpacity onPress={() => router.push('../auth/sign-in')}>
                <Text style={styles.link}>¿Ya tienes cuenta? Iniciar sesión</Text>
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
