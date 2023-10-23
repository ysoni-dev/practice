import axios from 'axios'

const url = 'http://localhost:5000'

export const getgames = async (id)=>{
    id = id || ''
    return await axios.get(`${url}/all/${id}`);
}

export const addgames = async(data)=>{
    return await axios.post(`${url}/add`, data);
}

export const updategames = async(id, data)=>{
    return await axios.patch(`${url}update/${id}`,data);
}

export const deletegmaes=async(id)=>{
    return await axios.delete(`${url}/delete/${id}`)
}