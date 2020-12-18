import React, { useState, useEffect, useCallback } from 'react';
import * as Animatable from 'react-native-animatable';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ButtonAnimatable from '../../components/ButtonAnimatable';

import { resumoNews } from '../../utils/resumo';
import { useNews, useUpdate } from '../../contexts/Update';

import {
  Container,
  ContainerNews,
  SearchView,
  InputSearch,
  IconSearc,
  TitleNews,
  LabelNews,
  ViewActions,
  IconEdit,
  IconDelete,
  ModalContainer,
  ScrollContainer,
  ContainerSafe,
  Header,
  HeaderBack,
  HeaderIcon,
  HeaderTitle,
  Body,
  InputTitle,
  InputNews,
  InputAutor,
  ButtonRegisterNews,
  TxtButton
} from './styles';

export interface ArrayNews {
  id: string;
  titulo: string;
  texto: string;
  autor: string;

}

const BodyAnimate = Animatable.createAnimatableComponent(Body);

const CreateNews = () => {
  const [open, setOpen] = useState(false);
  const [inMemoryNews, setInMemoryNews] = useState<ArrayNews[]>([]);
  const [title, setTitle] = useState('');
  const [newsText, setNewsText] = useState('');
  const [autor, setAutor] = useState('');
  const [edit, setEdit] = useState(false);
  const [indexNews, setIndexNews] = useState<number>(0);
  const [add, setAdd] = useState(false);

  const { newss, setNewss } = useNews();
  const { setUpdate } = useUpdate();

  useEffect(() => {
    async function loadNews() {
      setInMemoryNews(newss);
    }

    loadNews();
  }, []);

  useEffect(() => {
    (async () => {
      if (add == true) {
        await AsyncStorage.setItem("@news", JSON.stringify(newss));
        setAdd(false);
      }
      else return;
    })()
  }, [newss, add])


  async function handleAddNews() {
    if (title == '' || newsText == '' || autor == '') return;

    const idInt = Math.floor(Math.random() * 100 + 1);

    const data = {
      id: String(autor + idInt),
      titulo: title,
      texto: newsText,
      autor
    }


    setNewss([...newss, data])
    setAdd(true);
    setOpen(false);
    setTitle("");
    setNewsText("");
    setAutor("");
  }

  async function handleEditar() {
    newss[indexNews].titulo = title;
    newss[indexNews].texto = newsText;
    newss[indexNews].autor = autor;

    setAdd(true);
    setUpdate(true);
    setOpen(false);
    setTitle("");
    setNewsText("");
    setAutor("");
    setIndexNews(0);
    setEdit(false);
  }

  function clearBack() {
    setOpen(false);
    setTitle("");
    setNewsText("");
    setAutor("");
  }

  function handleEdit(item: ArrayNews, index: number) {
    setTitle(item.titulo);
    setNewsText(item.texto);
    setAutor(item.autor);
    setIndexNews(index);

    setOpen(true);
    setEdit(true);
  }

  const handleDelete = useCallback(
    async data => {
      const find = newss.filter((r: ArrayNews) => r.id !== data.id);
      setNewss(find);
      setAdd(true);
    },
    [newss]
  );


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
      <ButtonAnimatable
        onPress={() => setOpen(true)}
      />

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
          // console.log(index);
          return (
            <ContainerNews style={{ elevation: 4 }}>
              <TitleNews>
                {item.titulo}
              </TitleNews>

              <LabelNews>{resumoNews(item.texto)}</LabelNews>

              <ViewActions>
                <IconEdit onPress={() => handleEdit(item, index)} />
                <IconDelete onPress={() => handleDelete(item)} />
              </ViewActions>
            </ContainerNews>
          );
        }}
      />

      <ModalContainer
        visible={open}
      >
        <ContainerSafe>
          <ScrollContainer>
            <Header>
              <HeaderBack onPress={clearBack}>
                <HeaderIcon />
              </HeaderBack>

              <HeaderTitle>Nova notícia</HeaderTitle>
            </Header>

            <BodyAnimate
              animation="fadeInUp"
              useNativeDriver
            >
              <InputTitle
                value={title}
                onChangeText={setTitle}
              />

              <InputNews
                value={newsText}
                onChangeText={setNewsText}
              />

              <InputAutor
                value={autor}
                onChangeText={setAutor}
              />

              <ButtonRegisterNews onPress={edit ? handleEditar : handleAddNews}>
                <TxtButton>
                  {edit ? 'Atualizar' : 'Cadastrar notícia'}
                </TxtButton>
              </ButtonRegisterNews>
            </BodyAnimate>
          </ScrollContainer>
        </ContainerSafe>
      </ModalContainer>
    </Container>
  );
}

export default CreateNews;