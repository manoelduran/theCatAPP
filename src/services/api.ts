import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/'
});

export async function SearchCats(): Promise<Cat[] | null> {
    const apiKey = String(process.env.API_KEY) ?? undefined;
    const result = await api.get('https://api.thecatapi.com/v1/breeds', {
        headers: {
            apiKey
        }
    });
    if (!result.data) {
        return null;
    }
    return result.data;
};