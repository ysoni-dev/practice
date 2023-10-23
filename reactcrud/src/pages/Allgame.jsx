import {React, useEffect, useState} from 'react'
import { getgames } from '../service/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom'
import { Typography, Button } from '@mui/material';
import {deletegmaes} from '../service/api'
import Edit from '@mui/icons-material/EditTwoTone';
import { Delete} from '@mui/icons-material'
import { pink } from '@mui/material/colors'


const Allgame=()=>{

    const [game, setGame] = useState([])

    useEffect(() => {
        getAllGames() 
    }, [])

    const getAllGames= async()=>{
        const response = await getgames();
        console.log(response.data);
        setGame(response.data)
    }


    const deleteGame=async(id)=>{
        await deletegmaes(id);
        getAllGames();
    }
    return(
        <>
        <Typography variant="h3" style={{textAlign:'center', color:'tomato'}}> All game Data</Typography>
        
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell>Id</TableCell>
            <TableCell>Game Name</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Downloads</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        {
        game.map(mg=>(
                <TableRow>
                <TableCell>{mg._id}</TableCell>
                <TableCell>{mg.name}</TableCell>
                <TableCell>{mg.release}</TableCell>
                <TableCell>{mg.downloads}</TableCell>
                <TableCell component={Link} to={`/edit/${mg._id}`}><Edit color="success"/></TableCell>
                <TableCell> <Button onClick={()=>deleteGame(mg._id)}><Delete sx={{color:pink[500]}}></Delete></Button></TableCell>
                
                    </TableRow> ))}
         
        
            </TableBody>
        </Table>
    </TableContainer>
    {/* {game.map(mg=>(
        <p>{mg.year}</p>
    ))} */}
  


      
        

        </>
    )
}
export default Allgame