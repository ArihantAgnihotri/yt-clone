import React , {useState}from 'react';
import {Stack, Box, Typography} from '@mui/material'; 
import {VideoCard} from './';
import {ChannelCard} from './'
const Videos = ({pageNumber, postsSent}) => {

  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2}>
      {postsSent?.map((item, idx)=>(
        <Box key={idx}>
          {item && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos