import React from 'react';
import {Stack, Box, Typography} from '@mui/material'; 
import {VideoCard} from './';
import {ChannelCard} from './'
const Videos = ({ posts }) => {
  console.log(posts);
  return (
    
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {posts?.map((item, idx)=>(
        <Box key={idx}>
          {item && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos