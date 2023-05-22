import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar, Videos} from "./";
import { fetchData } from "../utils/fetchData";

const Feed = () => {

  const [category,setCategory] = useState("New");
  const [page, setPage]=useState(0);
  const [posts, setPosts]=useState([]);
  useEffect(()=>{
     fetchData(page).then((data)=>{setPosts(data)})
  }, [page]);
  return (
    <Stack 
      sx={{flexDirection:{sx:'column', md:'row'}}}
    >
      <Box
        sx={{height: {sx: 'auto', md: '92vh'}, borderRight : '1px solid #3d3d3d', px: {sx :0, md:2}}}
      >
        <Sidebar selectedCategory={category} setCategory={setCategory}/>
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff'}}>
          Copyright 2023 Arihant Agnihotri
        </Typography>

      </Box>
      <Box p={2} sx={{overflowY : 'Auto', height: '90vh', flex: 2}}>
          <Typography variant='h4' fontWeight="bold" md={2}
          sx = {{color: 'white'}}
          >
          {category}
          <span style={{color : "red"}}> Videos </span>
        </Typography>
        <Videos videos={posts}/>
      </Box>
      

    </Stack>
  )
}

export default Feed