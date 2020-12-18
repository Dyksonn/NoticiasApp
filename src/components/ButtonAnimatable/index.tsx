import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as Animatable from 'react-native-animatable';

import {
  Button,
  Icon
} from './styles';

interface ButtonProps extends TouchableOpacityProps { }

const ButtonAnimate = Animatable.createAnimatableComponent(Button);

const ButtonAnimatable: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <ButtonAnimate
      {...rest}
      useNativeDriver
      animation="bounceInUp"
      duration={1500}
      style={{
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 1,
          height: 3
        }
      }}
    >
      <Icon />
    </ButtonAnimate>
  );
}

export default ButtonAnimatable;