import axios from "axios";

const api = axios.create({
    baseURL: "https://catfact.ninja"
});

export const getData = async (signal) => {
    try{
        const response = await api.get('/facts', { signal });
        return response.data.data;
    }catch(error){
        throw Error(error.message);
    }
}