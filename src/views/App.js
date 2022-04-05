import React, {useEffect} from 'react';
import './App.css';

//API
import tmdb_api from '../services/tmdb_api';

export default () => {

  useEffect(() => {
    const loadAll = async () => { //Função que retorna as informaçẽs da api
      //Pegando a lista total
      let list = await tmdb_api.getHomeList();
      console.log(list);
    }

    loadAll(); //Executando função para carregar informaçẽs da api
  }, [])

  return (
    <div>
      <h1>Olá Mundo!</h1>
    </div>
  );
}
