import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default function FindSpecialistScreen() {
    const categories = [
        { id: '1', name: 'Pediatrician' },
        { id: '2', name: 'Neurosurgeon' },
        { id: '3', name: 'Cardiologist' },
        { id: '4', name: 'Psychiatrist' },
    ];

    const doctors = [
        { id: '1', name: 'Dr. Serena Gomez', specialty: 'Medicine Specialist', experience: '8 Years', patients: '1.08K' },
        { id: '2', name: 'Dr. Asma Khan', specialty: 'Medicine Specialist', experience: '5 Years', patients: '2.7K' },
    ];

    return (
        <View style={styles.container}>
            {/* Encabezado */}
            <Text style={styles.headerText}>Find Your <Text style={styles.headerHighlight}>Specialist</Text></Text>
            <View style={styles.searchContainer}>
                <TextInput placeholder="Search specialist..." style={styles.searchInput} />
                {/* Puedes agregar aquí un icono de búsqueda */}
            </View>

            {/* Banner */}
            <View style={styles.banner}>
                <Text style={styles.bannerText}>Looking For Your Desired Specialist Doctor?</Text>
                <Text style={styles.doctorName}>Dr. Salina Zaman</Text>
                <Text style={styles.specialty}>Medicine & Heart Specialist</Text>
                <Text style={styles.clinic}>Good Health Clinic</Text>
                {/* Imagen del doctor */}
                <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.doctorImage} />
            </View>

            {/* Categorías */}
            <Text style={styles.sectionTitle}>Categories</Text>
            <FlatList
                data={categories}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.categoryItem}>
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />

            {/* Doctores Disponibles */}
            <Text style={styles.sectionTitle}>Available Doctor</Text>
            <FlatList
                data={doctors}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.doctorItem}>
                        <Image source={{ uri: 'https://via.placeholder.com/70' }} style={styles.doctorItemImage} />
                        <Text style={styles.doctorName}>{item.name}</Text>
                        <Text style={styles.specialty}>{item.specialty}</Text>
                        <Text style={styles.experience}>Experience: {item.experience}</Text>
                        <Text style={styles.patients}>Patients: {item.patients}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
    },
    headerHighlight: {
        color: '#007BFF',
    },
    searchContainer: {
        marginVertical: 10,
    },
    searchInput: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 8,
        borderColor: '#CCC',
        borderWidth: 1,
    },
    banner: {
        backgroundColor: '#E0F7FF',
        borderRadius: 8,
        padding: 20,
        marginVertical: 20,
        position: 'relative',
    },
    bannerText: {
        fontSize: 16,
        color: '#333',
    },
    doctorName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    specialty: {
        fontSize: 14,
        color: '#555',
    },
    clinic: {
        fontSize: 12,
        color: '#777',
    },
    doctorImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: 10,
        top: 20,
        borderRadius: 50,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 10,
    },
    categoryItem: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 8,
        marginRight: 10,
        alignItems: 'center',
    },
    categoryText: {
        color: '#333',
        fontWeight: 'bold',
    },
    doctorItem: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 8,
        marginRight: 10,
        alignItems: 'center',
        width: 150,
    },
    doctorItemImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 10,
    },
    experience: {
        fontSize: 12,
        color: '#666',
    },
    patients: {
        fontSize: 12,
        color: '#666',
    },
});
