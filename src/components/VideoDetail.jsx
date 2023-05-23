import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {Video} from './';
import { fetchData } from '../utils/fetchData';
const VideoDetail = () => {
  const[videoDetail, setVideoDetail]=useState(null);
  const id = useParams();
  const postId = id.id.slice(0,36);
  const videoId = id.id.slice(36);
  console.log(postId);
  console.log(videoId);
  const url = `https://cdn.gro.care/${videoId}`;
  
  useEffect(()=>{
    
  },[url]);

  return ( 
    <Box minHeight='95vh'>
      <Stack direction = {{xs : 'column', md:'row' }}>
      <Box flex={1}>
      <Box sx={{width: '100%', position: 'sticky', top : '86px'}}>
      <video className='react-player' controls >
      <source src={url} type="video/mp4"/>
      Sorry, your browser does not support this video 
     </video>
     <Typography variant = 'h5' fontWeight='bold' p={2}>
      Title
     </Typography>
      </Box>
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail