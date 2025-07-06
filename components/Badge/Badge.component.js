import { BadgeView, BadgeItemText } from './Badge.styles';

export default Badge = ({ text, color }) => (
  <BadgeView color={color}>
    <BadgeItemText>{text}</BadgeItemText>
  </BadgeView>
);