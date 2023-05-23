import { Link } from 'react-router-dom';
import React from 'react';
import { Typography, Card, CardContent, CardMedia, Tooltip,Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {VideoDetails} from './';
import { demoThumbnailUrl,demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoProfilePicture } from '../utils/constants';
const VideoCard = ({video}) => {
    console.log(video);
  return (
    <Card sx={{width : {md:'320px', sm: '100%'}, borderRadius:'10px'}}>
        <Link to={video.creator.id? `/video/${video.postId + video.submission.mediaUrl.slice(21,60)}`: demoVideoUrl}>
            <CardMedia 
                image= {video?.submission?.thumbnail}
                alt={video.creator.handle}
                sx={{width : 300, height: 150}}
                
            />
        </Link>
        
        <CardContent sx={{backgroundColor : '#1e1e1e', height: '160px'}}>
        <Link to={video.creator.id? `/video/${video.submission.mediaUrl.slice(21,100)}`: demoVideoUrl}>
            <Typography sx={{paddingBottom: '20px'}} variant='subtitle1' fontWeight='bold' color='white'>
              {video?.submission?.title.slice(0,60) || demoVideoTitle.slice(0,60)}  
            </Typography>
            <Tooltip title={video.creator.handle}>
            <Box sx={{position: 'relative', borderRadius:'50px'}}>
                <img src={video?.creator?.pic || demoProfilePicture } alt = {video?.creator.handle} className='profilePic'/>
            </Box> 
            </Tooltip>
        </Link>
        <Tooltip title={video.creator.handle}>
            <Typography sx={{paddingLeft: '35px'}} variant='subtitle1' fontWeight='bold' color='gray'>
            
              {video?.creator?.name || demoChannelTitle.slice(0,100)} 
                <CheckCircle sx={{fontSize:12, color: 'gray', ml: '5px'}} />
            </Typography>
        </Tooltip>
        </CardContent>
    </Card>
  )
}

export default VideoCard