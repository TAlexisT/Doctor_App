import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Tab = createBottomTabNavigator();

const Inicio = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      {/* Encabezado superior con texto e iconos */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTextTop}>Find Your</Text>
          <Text style={styles.headerTextBottom}>Specialist</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => router.push('../search')}>
            <FontAwesome name="search" size={24} color="#1E90FF" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('../messages')}>
            <MaterialIcons name="chat" size={24} color="#1E90FF" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Barra de navegación inferior */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => (
            <TouchableOpacity
              style={[
                styles.tabItem,
                focused ? styles.tabItemFocused : null,
                { flexDirection: 'row', alignItems: 'center' },
              ]}
              onPress={() => {
                switch (route.name) {
                  case 'Home':
                    break;
                  case 'Doctor':
                    router.push('../doctors/doctors');
                    break;
                  case 'Notifications':
                    router.push('../notifications/notifications');
                    break;
                  case 'Menu':
                    toggleMenu();
                    break;
                }
              }}
            >
              {route.name === 'Home' && (
                <>
                  <MaterialIcons name="home" size={size} color={focused ? '#fff' : '#000'} />
                  {focused && <Text style={styles.tabText}>Home</Text>}
                </>
              )}
              {route.name === 'Doctor' && (
                <>
                  <FontAwesome name="stethoscope" size={size} color={focused ? '#fff' : '#000'} />
                  {focused && <Text style={styles.tabText}>Doctor</Text>}
                </>
              )}
              {route.name === 'Notifications' && (
                <>
                  <Feather name="bell" size={size} color={focused ? '#fff' : '#000'} />
                  {focused && <Text style={styles.tabText}>Notifications</Text>}
                </>
              )}
              {route.name === 'Menu' && (
                <>
                  <MaterialIcons name="apps" size={size} color={focused ? '#fff' : '#000'} />
                  {focused && <Text style={styles.tabText}>Menu</Text>}
                </>
              )}
            </TouchableOpacity>
          ),
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#000',
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: { display: 'none' },
          tabBarItemStyle: styles.tabItemWrapper,
        })}
      >
        <Tab.Screen name="Home" component={View} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="Doctor" component={View} options={{ tabBarLabel: 'Doctor' }} />
        <Tab.Screen name="Notifications" component={View} options={{ tabBarLabel: 'Notifications' }} />
        <Tab.Screen name="Menu" component={View} options={{ tabBarLabel: 'Menu' }} />
      </Tab.Navigator>

      {/* Menú desplegable */}
      {menuVisible && (
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('../appointment')}>
            <MaterialIcons name="event" size={24} color="#fff" />
            <Text style={styles.menuText}>My Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('../profile/profile')}>
            <MaterialIcons name="person" size={24} color="#fff" />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('../settings/settings')}>
            <MaterialIcons name="settings" size={24} color="#fff" />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => router.push('../logout')}>
            <MaterialIcons name="logout" size={24} color="#fff" />
            <Text style={styles.menuText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        marginTop: 20, // Ajusta el valor según el espacio que desees
      },
      
  headerTextTop: {
    fontSize: 18,
    color: '#333',
  },
  headerTextBottom: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  tabBar: {
    backgroundColor: '#f4f4f4',
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 5,
  },
  tabItemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItem: {
    paddingTop: 0,
    paddingBottom: 5,
    borderRadius: 30,
    paddingHorizontal: 15,
  },
  tabItemFocused: {
    backgroundColor: '#1E90FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: -10,
    paddingVertical: 12,
  },
  tabText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Inicio;
