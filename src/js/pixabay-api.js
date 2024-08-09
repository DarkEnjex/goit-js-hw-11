const API_KEY = '45360350-58fd54754bd8f677bef7c2cc3';
const BASE_URL = 'https://pixabay.com/api/';


export function searchImages(query) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    return fetch(`${BASE_URL}?${searchParams}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}