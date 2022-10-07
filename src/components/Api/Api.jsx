import axios from "axios";

const Key = "api_key=8d439eb5ac7a153643a933bcb130103b";
const URl = "https://api.themoviedb.org/3"

export const getTrandingFilms = async () => {
   try {
     const response = await axios.get(`${URl}/trending/movie/week?${Key}`);
return response.data
   } catch (error) {
    return error
   } finally {
       
   }
};


export const getSearchFilms = async (value) => {
     const response = await axios.get(`${URl}/search/movie?${Key}&query=${value}&page=1`);
return response.data.results
};

export const getFilmById = async (id) => {

    const response = await axios.get(`${URl}/movie/${id}?${Key}`);
    return response.data
};

export const getActorDetailsFilm = async (id) => {
    const response = await axios.get(`${URl}/movie/${id}/credits?${Key}`);
    return response.data.cast
    
};

export const getRewievFilm = async (id) => {
    const response = await axios.get(`${URl}/movie/${id}/reviews?${Key}&page=1`);
    return response.data.results
};


// const URL = `https://pixabay.com/api/`
// const KEY = `29175258-0e972b66084e1db5719a62740`

// async function getImg() {
//    try {
//      const response = await axios.get
//         (`${URL}?key=${KEY}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`);
//     return response.data
//    } catch (error) {
//     console.log(error)
//    }
// };

// getImg().then(data => console.log(data))