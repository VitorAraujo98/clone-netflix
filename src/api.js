const API_KEY="1624f05d4183d168f14f5029bdb03db8";

const categories = [
  {

     name: "trending",
     title:"Em alta",
     path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
   },
   {

    name: "netflixOriginals",
    title:"Originais Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    name: "topRated",
    title:"Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: "comedy",
    title:"Comédias",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  {

    name: "romances",
    title:"Romances",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=1074`,
  },
  {

    name: "documentaries",
    title:"Documentários",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
];

export const getMovies = async (path) => {
 try {
    
 } catch (error) {
    console.log("error getMovies;")
 }
}