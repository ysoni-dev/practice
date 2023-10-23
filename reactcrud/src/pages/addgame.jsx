import {React, useState} from 'react'
import {addgames} from '../service/api'
import { useHistory } from 'react-router-dom'
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material';



const Addgame=()=>{


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



    const addgameDetails=async()=>{
        await addgames(data);
        history.push("/all");
    }


    return(
        <>
    

        <FormGroup style={{width:'50%',
        margin: '5% 0 0 25%',}}>
        <Typography variant="h4">Add Game</Typography>
        <FormControl>
        <InputLabel >GameName</InputLabel>
        <Input type="text" name="name" value={data.name} onChange={handleChange} />
        </FormControl>
        <FormControl>
        <InputLabel >Release Year</InputLabel>
        <Input type="number" name="release" value={data.release} onChange={handleChange} />
        </FormControl>
        <FormControl>
        <InputLabel >Downloads</InputLabel>
        <Input type="text" name="downloads" value={data.downloads} onChange={handleChange} />
        </FormControl>
        <Button variant="contained" color="primary" type="submit" onClick={()=>addgameDetails()} >Add Game</Button>
        </FormGroup>



        </>
    )
}
export default Addgame