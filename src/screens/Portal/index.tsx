import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { resumoNews } from '../../utils/resumo';
import { ArrayNews } from '../CreateNews';

import { useNews, useUpdate } from '../../contexts/Update';

import {
  Container,
  ContainerNews,
  TitleNews,
  LabelNews,
  AutorLabel,
  SearchView,
  InputSearch,
  IconSearc,
  ActionExibir,
  AutorBold,
  Exibir,
  ContentModal,
  ContainerModal,
  CloseModal,
  ScrollTexto,
  ExibirNews
} from './styles';

interface ExibirProps {
  id: string;
  titulo: string;
  texto: string;
  autor: string;
}

const Portal = () => {
  const [inMemoryNews, setInMemoryNews] = useState<ArrayNews[]>([]);

  const [open, setOpen] = useState(false);
  const [exibir, setExibir] = useState({} as ExibirProps);

  const { newss, setNewss } = useNews();

  const { update, setUpdate } = useUpdate();

  if (update === true) setTimeout(() => loadNews(), 3000);

  useEffect(() => {
    loadNews();
  }, []);

  async function loadNews() {
    const newsStorage = await AsyncStorage.getItem("@news");

    if (newsStorage) {
      setNewss(JSON.parse(newsStorage));
      setInMemoryNews(JSON.parse(newsStorage));
      setUpdate(false);
    }
  }

  function searchNews(search: string) {
    const filteredNews = inMemoryNews.filter(
      v => {
        let newsLowerCase = (v.titulo + ' ' + v.autor).toLowerCase()

        let searchLowerCase = search.toLowerCase();

        return newsLowerCase.indexOf(searchLowerCase) > -1;
      }
    );

    setNewss(filteredNews);
  }


  return (
    <Container>

      <SearchView>
        <InputSearch
          onChangeText={(value: string) => searchNews(value)}
        />
        <IconSearc onPress={() => alert('Pesquisar')} />
      </SearchView>

      <FlatList
        data={newss}
        style={{ flex: 1, width: "100%", paddingTop: 8 }}
        contentContainerStyle={{ flex: 1, width: '100%' }}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item, index }) => {
          return (
            <ContainerNews style={{ elevation: 4 }}>
              <TitleNews>
                {item.titulo}
              </TitleNews>

              <LabelNews>{resumoNews(item.texto)}</LabelNews>

              <ActionExibir onPress={() => { setOpen(true), setExibir(item) }}>
                <Exibir>Ver noticia inteira</Exibir>
              </ActionExibir>
            </ContainerNews>
          );
        }}
      />

      <ContentModal visible={open} >
        <ContainerModal>
          <CloseModal onPress={() => setOpen(false)} />
          <TitleNews>{exibir.titulo}</TitleNews>

          <ScrollTexto>
            <ExibirNews>{exibir.texto}</ExibirNews>
          </ScrollTexto>

          <AutorLabel><AutorBold>Autor:</AutorBold> {exibir.autor}</AutorLabel>
        </ContainerModal>
      </ContentModal>

    </Container>
  );
}

export default Portal;