import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',  // Set your base URL here
    headers: {
        'Content-Type': 'application/json',
    },
});


export async function loginAdmin(payload: unknown){
    const {data} = await axiosInstance.post("/admin/signAdmin", payload);
    console.log(data)
    return(data)
}

export const postData = async (path: string, newData: unknown) => {
    const { data } = await axiosInstance.post(path, newData);
    return data;
};

