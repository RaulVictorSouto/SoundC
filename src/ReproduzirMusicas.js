import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default function ReproduzirMusicas({ route }) {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const { musica } = route.params;

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(musica.arquivo);
    setSound(sound);
    await sound.playAsync();
    setIsPlaying(true);
  }

  async function pauseSound() {
  
    await sound.pauseAsync();
    setIsPlaying(false);
    
  }

  async function stopSound() {
    await sound.stopAsync();
    setIsPlaying(false);
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={musica.capa} style={{ width: 200, height: 200 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>{musica.titulo}</Text>
      <Text style={{ fontSize: 18, color: 'gray', marginTop: 10 }}>{musica.artista}</Text>
      {isPlaying ? (
        <TouchableOpacity onPress={pauseSound} style={{ marginTop: 20 }}>
          <Ionicons name="pause" size={32} color="black" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={playSound} style={{ marginTop: 20 }}>
          <Ionicons name="play" size={32} color="black" />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={stopSound} style={{ marginTop: 20 }}>
        <Ionicons name="stop" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
}