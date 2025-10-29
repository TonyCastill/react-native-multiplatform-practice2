import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente sencillo para mostrar el estado de autenticación.
export default function StatusBadge({ authenticated }) {
  useEffect(() => {
    console.log('StatusBadge render');
  });

  return (
    <View style={[styles.badge, { backgroundColor: authenticated ? '#2e7d32' : '#9e9e9e' }]}>      
      <Text style={styles.text}>{authenticated ? 'Autenticado' : 'Invitado'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginTop: 12
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600'
  }
});
