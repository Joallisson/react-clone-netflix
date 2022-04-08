import React, {useEffect, useState} from 'react';
import './App.css';

//Componentes
import MovieRow from '../components/movieRow/MovieRow';
import FeatureMovie from '../components/featureMovie/FeatureMovie';
import Header from '../components/Header';

//API
import tmdb_api from '../services/tmdb_api';

export default () => { //Função principal //Nesse caso ela é uma função anônima

  const [featureData, setFeatureData] = useState(null); //Filme em destaque no começo da tela
  const [movieList, setMovieList] = useState([]); //Guarda o estado de lista de todos os filmes retornados da api
  const [blackHeader, setBlackHeader] = useState(false); //Guarda o estado da cor do header

  useEffect(() => {
    const loadAll = async () => { //Função que retorna as informaçẽs da api
      //Pegando a lista total
      let list = await tmdb_api.getHomeList(); //Criando variaǘel para armazenar os filmes //Fazendo requição na api
      setMovieList(list);

      //Pegando o filme em destaque/feature
      let originals = list.filter(filmes => filmes.slug === 'originals'); //Pegando os filmes originais da netflix
      let randomChose = Math.floor(Math.random() * (originals[0].items.results.length - 1)); //Gerando número aleatório entre o numero de filmes da netflix e guardando na variável
      let chosen = originals[0].items.results[randomChose]; //Guardando o filme dentro da variável
      let chosenInfo = await tmdb_api.getMovieInfo(chosen.id, 'tv'); //Fazendo requisição das informações da capa da série da capa
      setFeatureData(chosenInfo);
      console.log(chosenInfo);
    }

    
    loadAll(); //Executando função para carregar informaçẽs da api
  }, [])

  useEffect(() => {
    const scrollListener = () => { //Criando função para setar o estado da cor do header
      if(window.scrollY > 10){ //Se o scroll vertical tiver um pouco para baixo então o header fica preto, senão fica transparente
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      //window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  return (
    <div className='page'>

      <Header black={blackHeader}/>

      {
        featureData && <FeatureMovie item={featureData}/> //Exbindo a capa do filme principal se ele existir
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
