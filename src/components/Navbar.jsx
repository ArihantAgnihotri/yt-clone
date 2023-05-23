import { Stack} from "@mui/material"
import { Link } from "react-router-dom"
import {logo} from '../utils/constants';
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <Stack 
        direction= "row" alignItems="center" p={1.2}  
        sx={{position: 'sticky', background: '#000', top: 0, justifyContent : 'space-between'}}
    >
    <Link to='/' style ={{display:'flex', alignItems: 'center'}}>

        <img src={logo} alt='Logo' height={55} /><span><h3 style={{color:"red", fontSize:'1.5rem', paddingLeft : '0.5rem'}}>Y</h3></span><span><h3 style={{color:"white", fontSize:'1.3rem'}}>ouTube</h3></span> 
    </Link>
    <SearchBar />
    </Stack>
  )
}

export default Navbar