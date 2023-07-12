const key = '0845e9b5ad5ad1b359e062d5db7b64da';

const requests={
    requestPopular: 'https://api.themoviedb.org/3/movie/popular?api_key='+key+'&language=en-US&page=1',
    requestTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key='+key+'&language=en-US&page=1',
    requestTrending: 'https://api.themoviedb.org/3/trending/all/day?api_key='+key,
    requestUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key='+key+'&language=en-US&page=1'
};

export default requests;
