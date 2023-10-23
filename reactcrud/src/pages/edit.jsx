import {React, useEffect, useState} from 'react'
import {updategames} from '../service/api'
import {getgames} from '../service/api'
import { useHistory, useParams} from 'react-router-dom'
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material';



const Editgame=()=>{

    
    const {id} = useParams();
   
    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData=async()=>{
        const response =await  getgames(id);
        console.log(response.data)
        setData (response.data);
     }
    
    let history = useHistory()

    const [data, setData] = useState({
        name:'',
        release:'',
        downloads:''
    })

    
    


   

    const handleChange=(e)=>{
        
        const name = e.target.name
        const value = e.target.value
        setData ({...data, [name] : value})
        console.log(data)
    }



    const updategameDetails=async()=>{
        await updategames(id, data);
        history.push("/all");
    }


    return(
        <>
    

        <FormGroup style={{width:'50%',
        margin: '5% 0 0 25%'}}>
        <Typography variant="h4">Edit Game</Typography><br></br>
        <FormControl>
        <InputLabel >GameName</InputLabel>
        <Input type="text" name="name" value={data.name} onChange={handleChange} />
        </FormControl><br></br>
        <FormControl>
        <InputLabel >Release Year</InputLabel>
        <Input type="number" name="release" value={data.release} onChange={handleChange} />
        </FormControl><br></br>
        <FormControl>
        <InputLabel >Downloads</InputLabel>
        <Input type="text" name="downloads" value={data.downloads} onChange={handleChange} />
        </FormControl>
        <Button variant="contained" color="primary" type="submit" onClick={()=>updategameDetails()} >Edit Game</Button>
        </FormGroup>



        </>
    )
}
export default Editgame;