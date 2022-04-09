import React, {useState} from "react";
import styles from './styles.css'

//ìcones
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(0); //Vai guardar o estado da lista horizontalmente

    const handleLeftArrow = () => { //Quando clicar na seta da esquerda executa essa função
        let x = scrollX + Math.round(window.innerWidth / 2); //Verificando o tamanho da tela e dividindo por 2, depois arredonda e soma com o valor do scroll para deslizar horizontalmente a lista de filmes/series
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => { //Quando clicar na seta da esquerda executa essa função
        let x = scrollX - Math.round(window.innerWidth / 2); //Verificando o tamanho da tela e dividindo por 2, depois arredonda e soma com o valor do scroll para deslizar horizontalmente a lista de filmes/series
        let listW = items.results.length * 250; //Calculando o limite que pode rolar para a direita
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
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
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 250
                }}>
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