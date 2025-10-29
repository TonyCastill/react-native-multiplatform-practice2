
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput, Alert } from 'react-native';
import MiComponente from './mi-componente';

const App = () => {
    // Solo estados para los campos (si los quieres mantener visualmente) 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const [renderCount, setRenderCount] = useState(0);
    const [authenticated, setAuthenticated] = useState(false);

    

    const onPressAlert = () => {
        Alert.alert('Autenticación', 'Usuario autenticado correctamente');
        setAuthenticated(true);
    };

    return (
        <View style={styles.container}>
            <MiComponente
                name='Yael Antonio Castillo Pérez'
                subtitle='User registration'
                bgColor='#3478F6'
            />

            <View style={styles.formWrapper}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter username'
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button title='Sign in' onPress={onPressAlert} disabled={authenticated} color='#125cabff'  />
                </View>
                
            </View>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    formWrapper: {
        padding: 24
    },
    formGroup: {
        marginBottom: 18
    },
    label: {
        fontSize: 13,
        color: '#222',
        marginBottom: 6
    },
    input: {
        backgroundColor: '#f1f2f6',
        borderRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 14,
        color: '#111'
    },
    buttonWrapper: {
        marginTop: 8,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor:"#0957abff"
    },
    statusText: {
        marginTop: 24,
        textAlign: 'center',
        fontSize: 14,
        color: '#333'
    },
    renderNote: {
        marginTop: 8,
        textAlign: 'center',
        fontSize: 12,
        color: '#888'
    }
});