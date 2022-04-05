const API_KEY = '0767c52392ea03272a3c9d425ea2d929'; //LEMBRAR DE REMOVER ELA //Chave da API (v3 auth) the movie db
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {

}

export default {
    getHomeList: async () => { //Retorna vários objetos json que serão usados para criar as listas de filmes
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: []
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: []
            },
        ];
    }
}