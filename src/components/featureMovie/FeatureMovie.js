import React from "react";
import './styles.css';

export default ({item}) => {

    let firstdate = new Date(item.first_air_date); //Criando o ano a partir da string da api e armazenar na variavel, para depois extrair só o ano no filme em destaque
    let genres = []; //Irá guardar os gêneros

    for(let i in item.genres){ //Varrendo o objeto para extrair os generos das series
        genres.push(item.genres[i].name); //Jogando os gêneros dentro do array
    }

    let description = item.overview; //Descrição da série em destaque
    if (description.length > 300) { //Se a descrição passar de 300 caracteres
        description = description.substring(0, 200) + '...'; //Então só exibe os primeiros 300 e concatena com os "..."
    }

    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        }}>
            <div className="feature--vertical">
                <div className="feature--horizontal">

                    <div className="featured--name">{item.original_name}</div>

                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average}</div>
                        <div className="featured--year">{firstdate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>

                    <div className="featured--description">{description}</div>

                    <div className="featured--buttons">
                        <a className="featured--watchButton" href={`/watch/${item.id}`}> &#9658; Assistir</a>
                        <a className="feature--myListButton" href={`/watch/${item.id}`}> <strong>+</strong> Minha Lista</a>
                    </div>

                    <div className="feature--genres"><strong>Gêneros:</strong> {genres.join(', ') /*Varrendo o array com os gêneros, e exibindo eles com uma vírgula e um espaço entre as informaçẽs varridas*/}</div>
                </div>
            </div>
        </section>
        
    );
}