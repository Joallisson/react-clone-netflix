import React from "react";
import styles from './styles.css'

//ìcones
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {

    const handleLeftArrow = () => {

    }

    const handleRightArrow = () => {
        
    }

    return(
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

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