import React from "react";
import styles from './styles.css'

export default ({title, items}) => {
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listArea">
                <div className="movieRow--list">
                    { //Se a lista for maior que 0 ou seja se existir um filme na lista, então mostra os filmes da lista
                    items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}` /*Exibindo posters dos filmes da netflix*/}/>
                        </div>
                    ))
                    }
                </div>                
            </div>
        </div>
    )
}