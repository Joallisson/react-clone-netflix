import React, {useEffect, useState} from 'react';
import './App.css';

//Componentes
import MovieRow from '../components/movieRow/MovieRow';

//API
import tmdb_api from '../services/tmdb_api';

export default () => { //Função principal //Nesse caso ela é uma função anônima

  const [movieList, setMovieList] = useState([]); //Guarda o estado de lista de todos os filmes retornados da api

  useEffect(() => {
    const loadAll = async () => { //Função que retorna as informaçẽs da api
      //Pegando a lista total
      let list = await tmdb_api.getHomeList(); //Fazendo requição na api
      setMovieList(list);
    }

    loadAll(); //Executando função para carregar informaçẽs da api
  }, [])

  return (
    <div className='page'>
      <section className='lists'>
        {
          movieList.map((item, key) => (
            <MovieRow key={key}/>
          ))
        
        }
      </section>
      
    </div>
  );
}
