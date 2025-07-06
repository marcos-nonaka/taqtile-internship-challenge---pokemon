import { View, Text, Image } from 'react-native';
import styled from 'styled-components';

export const ItemView = styled(View)`
  background-color: #ffffff;
  height: 80;
  margin-vertical: 8;
  margin-horizontal: 16;
  padding-left: 20;
  border-radius: 10;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

export const ItemText = styled(Text)`
  margin-left: 10;
  font-family: OverpassSemiBold;
  font-size: 20;
  color: #000000;
  text-align: center;
`;

export const StyledImg = styled(Image)`
  width: 100;
  height: 100;
  margin-top: 20;
`;
