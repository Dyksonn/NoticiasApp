import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'

export const Button = styled.TouchableOpacity`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: #0094ff;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  right: 25px;
  bottom: 28px;
  z-index: 9;

`;

export const Icon = styled(Ionicons).attrs(() => ({
  name: 'ios-add',
  size: 35,
  color: '#FFF'
}))``;