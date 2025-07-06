import { View, Text } from 'react-native';
import styled from 'styled-components';

export const BadgeView = styled(View)`
  background-color: ${(props) => props.color};
  width: 90;
  margin: 20px 0 20px 20px;
  padding: 10px;
  border-radius: 10;
`;

export const BadgeItemText = styled(Text)`
  font-family: OpenSans;
  font-size: 16;
  color: #ffffff;
  text-align: center;
`;