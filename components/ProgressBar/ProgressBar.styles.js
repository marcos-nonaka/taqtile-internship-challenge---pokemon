import { View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  margin: 0 5% 0 5%;
  width: 60%;
  borderRadius: 16;
  alignItems: flex-start;
  justifyContent: center;
  height: ${(props) => props.height};
  backgroundColor: ${(props) => props.outerBackgroundColor};
  paddingHorizontal: ${(props) => (props.padded ? 3 : 0)};
`;

export const Content = styled(View)`
  borderRadius: 16;
  height: ${(props) => (props.padded ? props.height / 2 : props.height)};
  backgroundColor: ${(props) => props.innerBackgroundColor};
  width: ${(props) => props.progress}%;
`;