import { useState, useEffect } from 'react';
import { ActivityIndicator, TouchableOpacity, Share } from 'react-native';
import {
  Container,
  RowContainer,
  StatsContainer,
  DimensityContainer,
  WhiteContainer,
  BaseStatsContainer,
  VerticalLine,
  StyledImg,
  ItemTextDisplay,
  ItemText,
  BaseStatsTitle,
  Button,
  ButtonText,
} from './Details.styles';
import Badge from '../../components/Badge/Badge.component';
import Stat from '../../components/Stat/Stat.component';

export default Details = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({ imageUrl: '' });

  const pokemonName = route.params.name;

  const fetchPokemonDetails = async (pokemonName) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();

    const pokemonId = data.id;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

    const hpStat = data.stats.find((stat) => stat.stat.name === 'hp');
    const baseHP = hpStat ? hpStat.base_stat : 0;

    const attackStat = data.stats.find((stat) => stat.stat.name === 'attack');
    const baseAttack = attackStat ? attackStat.base_stat : 0;

    const defenseStat = data.stats.find((stat) => stat.stat.name === 'defense');
    const baseDefense = defenseStat ? defenseStat.base_stat : 0;

    const types = data.types.map((typeObject) =>
      typeObject.type.name.toUpperCase()
    );

    setDetails({
      ...data,
      imageUrl,
      baseHP,
      baseAttack,
      baseDefense,
      types,
    });

    setLoading(false);
  };

  const onShare = async () => {
    try {
      await Share.share({
        message: `Confira as estatísticas deste Pokémon:
      Nome: ${details.name}
      HP: ${details.baseHP}
      Ataque: ${details.baseAttack}
      Defesa: ${details.baseDefense}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchPokemonDetails(pokemonName);
  }, [pokemonName]);

  return (
    <Container>
      {loading && <ActivityIndicator size={'large'} />}
      {!loading && (
        <>
          <RowContainer>
            <Badge text={details.types && details.types[0]} color={'#478070'} />
            {details.types && details.types[1] && (
              <Badge text={details.types[1]} color={'#565656'} />
            )}
          </RowContainer>
          <StyledImg
            source={{
              uri: details.imageUrl,
            }}
          />
          <StatsContainer>
            <DimensityContainer>
              <WhiteContainer>
                <ItemTextDisplay>{details.height / 10} m</ItemTextDisplay>
                <ItemText>HEIGHT</ItemText>
              </WhiteContainer>
              <VerticalLine />
              <WhiteContainer>
                <ItemTextDisplay>{details.weight} kg</ItemTextDisplay>
                <ItemText>WEIGHT</ItemText>
              </WhiteContainer>
            </DimensityContainer>
            <BaseStatsContainer>
              <BaseStatsTitle>Base Stats</BaseStatsTitle>
              <Stat name={'Hp'} value={Number(details.baseHP)} />
              <Stat name={'Attack'} value={Number(details.baseAttack)} />
              <Stat name={'Defense'} value={Number(details.baseDefense)} />
            </BaseStatsContainer>
            <TouchableOpacity onPress={onShare}>
              <Button>
                <ButtonText>Compartilhar</ButtonText>
              </Button>
            </TouchableOpacity>
          </StatsContainer>
        </>
      )}
    </Container>
  );
};
