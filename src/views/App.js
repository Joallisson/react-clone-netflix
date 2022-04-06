import React, {useEffect, useState} from 'react';
import './App.css';

//Componentes
import MovieRow from '../components/movieRow/MovieRow';
import FeatureMovie from '../components/featureMovie/FeatureMovie';

//API
import tmdb_api from '../services/tmdb_api';

export default () => { //Função principal //Nesse caso ela é uma função anônima

  const [featureData, setFeatureData] = useState(null); //Filme em destaque no começo da tela
  const [movieList, setMovieList] = useState([]); //Guarda o estado de lista de todos os filmes retornados da api

  useEffect(() => {
    const loadAll = async () => { //Função que retorna as informaçẽs da api
      //Pegando a lista total
      let list = await tmdb_api.getHomeList(); //Criando variaǘel para armazenar os filmes //Fazendo requição na api
      setMovieList(list);

      //Pegando o filme em destaque/feature
      let originals = list.filter(filmes => filmes.slug === 'originals'); //Pegando os filmes originais da netflix
      let randomChose = Math.floor(Math.random() * (originals[0].items.results.length - 1)); //Gerando número aleatório entre o numero de filmes da netflix e guardando na variável
      let chosen = originals[0].items.results[randomChose]; //Guardando o filme dentro da variável
      console.log(chosen)
    }

    
    loadAll(); //Executando função para carregar informaçẽs da api
  }, [])

  return (
    <div className='page'>

      {
        featureData && <FeatureMovie item={featureData}/>
      }

      <section className='lists'>
        {
          movieList.map((item, key) => ( //Lista de filmes
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))
        
        }
      </section>
      
    </div>
  );
}
