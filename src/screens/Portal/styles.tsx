import styled from 'styled-components/native';
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

export const AutorLabel = styled.Text`
  margin: 7px 7px 3px 7px;
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

export const ActionExibir = styled.TouchableOpacity`
  align-self: center;
  margin-top: 10px;
`;

export const Exibir = styled.Text`
  text-decoration: underline;
  color: blue;
`;


export const ContentModal = styled.Modal.attrs({
  transparent: true
})`
`;

export const ContainerModal = styled.View`
  padding: 30px;
  background-color: #d9d9de;
  margin: 25px;
  border-radius: 18px;
  flex: 1;
`;

export const ScrollTexto = styled.ScrollView`
  height: 85%;
`;

export const AutorBold = styled.Text`
  font-family: 'roboto_b';
  font-size: 16px;
`;

export const ExibirNews = styled.Text`
  text-align: justify;
  margin: 7px 7px 3px 7px;
`;

export const CloseModal = styled(Icon).attrs({
  name: 'close',
  size: 40
})``;
