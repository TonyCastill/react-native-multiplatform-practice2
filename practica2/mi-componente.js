import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// MiComponente: Encabezado flexible para la pantalla de Login.
// Props:
//  - name: Nombre completo del alumno.
//  - subtitle: Texto secundario (por ejemplo, 'User registration').
//  - bgColor: Color de fondo del contenedor principal.
//  - children: Elementos opcionales que se pueden renderizar dentro del header.
export default function MiComponente({ name = 'Nombre del alumno', subtitle = 'User registration', bgColor = '#3478F6', children }) {
    useEffect(() => {
        console.log('MiComponente render');
    });

    return (
        <View style={[styles.box, { backgroundColor: bgColor }]}>      
            <Text style={styles.title}>{name}</Text>
            <View style={styles.userStatus}>
                <Text style={styles.bold}>React Native - </Text>
                <Text style={styles.normal}>{subtitle}</Text>
            </View>
            {children}
        </View>
    );
}


const styles = StyleSheet.create({
    box: {
        paddingTop: 55,
        paddingHorizontal: 20,
        paddingBottom: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    userStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16
    },
    bold: {
        color: 'white',
        fontWeight: 'bold'
    },
    normal: {
        color: 'white'
    }
});