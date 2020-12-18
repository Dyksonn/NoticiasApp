import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { AntDesign as Icon, Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #0d0d4a;
  padding: 50px 10px 15px 10px;
`;

export const ContainerNews = styled.View`
  width: 89%;
  padding: 5px 0 10px 0;
  margin: 15px 0 10px 0;
  align-self: center;
  border-radius: 8px;
  background-color: #FFF;
`;

export const SearchView = styled.View`
  padding: 10px;
  background-color: #acacad;
  border-radius: 8px;
  width: 89%;
  flex-direction: row;
  align-items: center;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholder: 'Pesquisar pela noticia'
})`
  padding: 5px;
  flex: 1;
  border-bottom-width: 1px;
`;

export const IconSearc = styled(Icon).attrs({
  name: 'search1',
  size: 20
})`
  position: absolute;
  right: 15px;
  z-index: 7;
`;

export const TitleNews = styled.Text`
  text-align: center;
  font-family: 'roboto_b';
  color: #606061;
  font-size: 20px;
`;

export const LabelNews = styled.Text`
  text-align: center;
  margin: 7px 7px 3px 7px;
`;

export const ViewActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px 20px 3px 0;
`;

export const IconEdit = styled(Icon).attrs({
  name: 'edit',
  size: 25
})``;

export const IconDelete = styled(Icon).attrs({
  name: 'delete',
  size: 25
})`
  margin-left: 30px;
`;

export const ModalContainer = styled.Modal.attrs(() => ({
  animationType: 'slide',
  transparent: false
}))`
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1
  }
})`
  flex: 1;
`;

export const ContainerSafe = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  background-color: #171d31;
`;

export const Header = styled.View`
  margin-left: 10px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderBack = styled.TouchableOpacity``;

export const HeaderIcon = styled(Ionicons).attrs(() => ({
  name: 'md-arrow-back',
  size: 40,
  color: '#fff'
}))`
  margin-left: 5px;
  margin-right: 5px;
`;

export const HeaderTitle = styled.Text`
  font-family: 'roboto_ri';
  font-size: 27px;
  color: #fff;
  margin-left: 8px;
`;

export const Body = styled.View`
  margin-top: 17px;
`;

export const InputTitle = styled.TextInput.attrs({
  placeholder: 'Titulo da noticia',
  placeholderTextColor: "#747474",
  autoCorrect: false
})`
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 14px;
  margin-top: 30px;
  background-color: #fff;
  font-family: 'roboto_b';
  padding: 5px;
  width: 85%;
  align-self: center;
  /* height: 85px; */
  color: #000;
  border-radius: 8px;
`;

export const InputNews = styled.TextInput.attrs({
  placeholder: 'Texto da notícia',
  textAlignVertical: 'top',
  multiline: true,
  placeholderTextColor: "#747474",
  autoCorrect: false
})`
  font-size: 17px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
  background-color: #fff;
  font-family: 'roboto_r';
  padding-left: 14px;
  padding: 5px;
  width: 85%;
  align-self: center;
  height: 90px;
  color: #000;
  border-radius: 8px;
`;

export const InputAutor = styled.TextInput.attrs({
  placeholder: 'Autor',
  placeholderTextColor: "#747474",
  autoCorrect: false
})`
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
  background-color: #fff;
  font-family: 'roboto_b';
  padding: 5px;
  width: 85%;
  align-self: center;
  padding-left: 14px;
  /* height: 85px; */
  color: #000;
  border-radius: 8px;
`;

export const ButtonRegisterNews = styled.TouchableOpacity`
  margin: 40px 45px 0 45px;
  padding: 20px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  background-color: #0b2e6d;
`;

export const TxtButton = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-family: 'roboto_b'
`;

