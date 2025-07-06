import { View, Text } from 'react-native';
import styled from 'styled-components';

export const StatContent = styled(View)`
  flexDirection: row;
  margin-vertical: 4%;
  align-items: center;
`;

export const Dt = styled(Text)`
  width: 20%;
  font-family: OpenSans;
  font-size: 18;
`;

export const Dd = styled(Text)`
  width: 10%;
  font-family: OpenSansSemiBold;
  font-size: 18;
`;