import React, { useState , useEffect} from "react";
import {showdata,deldata} from '../apis/api'




const Show =()=>{
    const [data, setData] = useState([])

useEffect(() => {
    onLoad()
    
}, [])

const onLoad=async()=>{
   const res =await showdata()
   console.log(res.data)
   setData(res.data)
}

const delData=async(id)=>{
    await deldata(id)
    onLoad()
  

}
    return(
        <>
        <h2>data list</h2>
        {data.map((f)=>(
            
                <>
                
                <p>{f.name} <button onClick={()=>delData(f._id)}>del</button></p>
                <p>{f.email}</p>
                <p>{f.phone}</p>
                <p>{f.address}</p>
                </>
            
        ))}
        </>
    )                   
}
export default Show