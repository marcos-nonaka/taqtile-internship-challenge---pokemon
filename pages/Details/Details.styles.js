import { SafeAreaView, View, Text, Image } from 'react-native';
import styled from 'styled-components';

export const Container = styled(SafeAreaView)`
  background-color: #97cbaf;
`;

export const RowContainer = styled(View)`
  flexDirection: row;
`;

export const StatsContainer = styled(View)`
  background-color: #ffffff;
  margin-top: 45%;
  height: 100%;
  border-radius: 30;
`;

export const DimensityContainer = styled(View)`
  flexDirection: row;
  margin-top: 25%;
`;

export const WhiteContainer = styled(View)`
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const BaseStatsContainer = styled(View)`
  margin: 5% 5% 0 5%;
`;

export const VerticalLine = styled(View)`
  background-color: #e5e5e5;
  height: 100%;
  width: 1;
`;

export const StyledImg = styled(Image)`
  width: 280;
  height: 280;
  align-self: center;
  margin-bottom: -280;
  zIndex: 1;
`;

export const ItemTextDisplay = styled(Text)`
  font-family: OverpassSemiBold;
  font-size: 40;
  text-align: center;
`;

export const ItemText = styled(Text)`
  font-family: OpenSans;
  font-size: 16;
`;

export const BaseStatsTitle = styled(Text)`
  font-family: OverpassSemiBold;
  font-size: 20;
`;

export const Button = styled(View)`
  background-color: #478070;
  padding: 20px;
  margin-top: 3%;
  margin-horizontal: 5%;
  border-radius: 10;
`;

export const ButtonText = styled(Text)`
  font-family: OpensSansBold;
  font-size: 20;
  color: #ffffff;
  text-align: center;
`;