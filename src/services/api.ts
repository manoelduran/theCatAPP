import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1'
});

export async function SearchCats(): Promise<Cat[]> {
    const apiKey = String(process.env.API_KEY);
    const result = await api.get('https://api.thecatapi.com/v1/breeds', {
        headers: {
            apiKey
        }
    });
    return result.data;
};

export async function SearchCatById(search: string): Promise<Cat[]> {
    const apiKey = String(process.env.API_KEY);
    const result = await api.get(`/breeds/search?q=${search}`, {
        headers: {
            apiKey
        }
    });
    return result.data;
};