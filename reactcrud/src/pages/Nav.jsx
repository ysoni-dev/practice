import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import makeStyles from '@emotion/styled'
import { red } from '@mui/material/colors'

// const useStyle = makeStyles({
//     header:{
//         background: 'red',
//         marginRight: 20,
//         position: 'static'
//     }
// })

const Navi=()=>{
    
    return(
            <>  <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{background:'green', position:'static', fontSize:20, paddingRight:'20px'}}>
                    <Toolbar style={{marginRight:'20'}}>
                    <NavLink exact to="/" style={{textDecoration:'none', color:'white',marginRight:'2%',fontFamily:'cursive'}}>Gaming Zone</NavLink>
                    <NavLink exact to="/add" style={{textDecoration:'none', color:'white',marginRight:'2%',fontFamily:'cursive'}}>AddGame</NavLink>
                    <NavLink exact to="/all" style={{textDecoration:'none', color:'white',marginRight:'2%',fontFamily:'cursive'}}>AllGame</NavLink>
                    </Toolbar>
                </AppBar>
                </Box>
            
            </>
    )
}

export default Navi