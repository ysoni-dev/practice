import React, { useState } from 'react'
import {adddata} from '../apis/api.js'

const Form=()=>{



    const [data, setData] = useState({
        name:'',
        email:'',
        phone:'',
        address:''
    })

    const handleChange=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setData({...data,[name]:value})
        console.log(data)
    }


    const handleSubmit=async()=>{
           await adddata(data)
           console.log(data)
            

    }










    return(
        <>
        <h1>this is form</h1>
        <form >
            <label>Name</label>
            <input type="text" name="name" value={data.name} onChange={handleChange}></input>
            <label>Email</label>
            <input type="text" name="email" value={data.email} onChange={handleChange}></input>
            <label>Phone no</label>
            <input type="text" name="phone" value={data.phone} onChange={handleChange}></input>
            <label>Address</label>
            <input type="text" name="address" value={data.address} onChange={handleChange}></input>

            <button  onClick={()=>handleSubmit()}>Add</button>
        </form>
        </>
    )
}
export default Form