import axios from "axios";

const Key = "api_key=8d439eb5ac7a153643a933bcb130103b";
const URl = "https://api.themoviedb.org/3"

export const getTrandingFilms = async () => {
    const response = await axios.get(`${URl}/trending/movie/week?${Key}`);
return response.data
};

export const getSearchFilms = async () => {

};

export const getDetailsFilms = async () => {

};

export const getActorDetailsFilms = async () => {

};

export const getRewievFilms = async () => {

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