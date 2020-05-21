import React, {useState, useEffect} from 'react';
import {ScrollView, FlatList} from 'react-native';

import api from '../../services/api';

import {
  TextHeader,
  Container,
  TextTitle,
  TextBody,
  CardHeader,
  CardList,
} from './styles';

const Main = () => {
  const [dados, setDados] = useState({});

  async function loadPost() {
    const res = await api.get('/posts');
    const {data} = res;
    setDados(data);
  }

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <Container>
      <CardHeader>
        <TextHeader>APP RETROFIT FASAM</TextHeader>
        <TextHeader>Edgar - 6º Periodo</TextHeader>
      </CardHeader>
      <ScrollView>
        <FlatList
          data={dados}
          renderItem={({item}) => (
            <CardList>
              <TextTitle>Title: {item.title} </TextTitle>
              <TextBody>Descrição: {item.body} </TextBody>
            </CardList>
          )}
          keyExtractor={(post) => post.id}
        />
      </ScrollView>
    </Container>
  );
};

export default Main;
