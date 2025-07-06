import { StatContent, Dt, Dd } from './Stat.styles';
import ProgressBar from '../ProgressBar/ProgressBar.component';

export default Stat = ({ name, value }) => (
  <StatContent>
    <Dt>{name}</Dt>
    <ProgressBar
      height={5}
      progress={Number(value)}
      padded={false}
      innerBackgroundColor="#478070"
      outerBackgroundColor="#e5e5e5"
    />
    <Dd>{value}</Dd>
  </StatContent>
);