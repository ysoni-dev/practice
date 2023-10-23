
import axios from 'axios'
const url = 'http://localhost:5005'

export const adddata =async(data)=>{
    return await axios.post(`${url}/add`, data)
} 

export const showdata =(id)=>{
    id=id || ""
    return axios.get(`${url}/show/${id}`)
}

export const deldata=(id)=>{
    return axios.delete(`${url}/delete/${id}`)
}