import { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Container } from './List.styles';
import Item from '../../components/Item/Item.component';
import { useNavigation } from '@react-navigation/native';

export default List = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const navigation = useNavigation();

  const fetchPokemonList = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    setList(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <Container>
      {loading && <ActivityIndicator size={'large'} />}
      {!loading && (
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <Item item={item} navigate={navigation.navigate} />
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </Container>
  );
};

