const API_KEY = '0767c52392ea03272a3c9d425ea2d929'; //LEMBRAR DE REMOVER ELA //Chave da API (v3 auth) the movie db
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint /*endpoint é o final da url json*/) => { //Essa constantante é que vai fazer a requisição na api
    const req = await fetch(`${API_BASE}${endpoint}`); //Fazendo a requição
    const json = req.json(); //Convertendo a resposta da requisição em json
    return json;
}

export default {
    getHomeList: async () => { //getHomeList é uma função que Retorna vários objetos json que serão usados para criar as listas de filmes
        return [ //Retorna lista de objetos json dos filmes e series
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}` /*Esse parâmetro que está sendo passado dentro de basicFetch é o endpoint*/)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}` /*endpoint*/)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }
}