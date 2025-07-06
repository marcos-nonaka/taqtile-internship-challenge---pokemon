import { TouchableOpacity } from 'react-native';
import { ItemView, ItemText, StyledImg } from './Item.styles';

export default Item = ({ item, navigate }) => (
  <TouchableOpacity onPress={() => navigate('Details', { name: item.name })}>
    <ItemView>
      <StyledImg
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            item.url.split('/')[6]
          }.png`,
        }}
      />
      <ItemText>{item.name}</ItemText>
    </ItemView>
  </TouchableOpacity>
);
