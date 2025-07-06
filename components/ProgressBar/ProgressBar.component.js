import { Container, Content } from './ProgressBar.styles';

export default ProgressBar = ({
  progress,
  height = 8,
  outerBackgroundColor,
  innerBackgroundColor,
  padded = true,
}) => (
  <Container
    height={height}
    padded={padded}
    outerBackgroundColor={outerBackgroundColor}>
    <Content
      height={height}
      padded={padded}
      progress={progress}
      innerBackgroundColor={innerBackgroundColor}
    />
  </Container>
);