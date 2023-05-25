import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

const cmusicas = [
  {
    id: 1,
    titulo: 'Bones',
    artista: 'Imagine Dragons',
    arquivo: require('../assets/musicas/bones.mp3'),
    capa: require('../assets/capas/1.png')
  },
  {
    id: 2,
    titulo: 'Beggin',
    artista: 'Maneskin',
    arquivo: require('../assets/musicas/beggin.mp3'),
    capa: require('../assets/capas/2.png')
  },
  {
    id: 3,
    titulo: 'Não Creio em Mais Nada',
    artista: 'Paulo Sergio',
    arquivo: require('../assets/musicas/naocreio.mp3'),
    capa: require('../assets/capas/3.png')
  }
];

export default function ListarMusicas({ navigation }) {
  const navigator = useNavigation ();
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    setMusicas(cmusicas);
  }, []);


  function renderMusica(musica) {
    return (
      <TouchableOpacity onPress={() => navigator.navigate('Reproduction', { musica: musica })}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <Ionicons name="musical-notes-outline" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16 }}>{musica.titulo}</Text>
            <Text style={{ fontSize: 12, color: 'gray' }}>{musica.artista}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <FlatList
        data={musicas}
        renderItem={({ item }) => renderMusica(item)}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}