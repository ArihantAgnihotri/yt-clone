import { Link } from "react-router-dom";
import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Box,
} from "@mui/material";
import { AspectRatio, CheckCircle } from "@mui/icons-material";
import { VideoDetails } from "./";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoProfilePicture,
} from "../utils/constants";
const VideoCard = ({ video, page, direction, aspectRatio }) => {
  console.log(video);
  return (
    <div className="hoverGlow">
      <Card sx={{ width: { md: "320px", sm: "100%" }, borderRadius: "40px" }}>
        <Link
          to={
            video.creator.id ? `/video/${page}/${video.postId}` : demoVideoUrl
          }
        >
          <CardMedia
            component="img"
            image={video?.submission?.thumbnail}
            alt={video.creator.handle}
            sx={{
              width: { md: "100%", xs: "300px" },
              height: { md: "auto", xs: "100%" },
              aspectRatio: { md: { aspectRatio }, xs: "4/3" },
            }}
          />
        </Link>

        <CardContent
          className="noGlow"
          sx={{ backgroundColor: "#1e1e1e", height: "160px" }}
        >
          <Link
            to={
              video.creator.id ? `/video/${page}/${video.postId}` : demoVideoUrl
            }
          >
            <Typography
              sx={{ paddingBottom: "20px" }}
              variant="subtitle1"
              fontWeight="bold"
              color="white"
            >
              {video?.submission?.title.slice(0, 60) ||
                demoVideoTitle.slice(0, 60)}
            </Typography>
            <Tooltip title={video.creator.handle}>
              <Box sx={{ position: "relative", borderRadius: "50px" }}>
                <img
                  src={video?.creator?.pic || demoProfilePicture}
                  alt={video?.creator.handle}
                  className="profilePic"
                />
              </Box>
            </Tooltip>
          </Link>
          <Tooltip title={video.creator.handle}>
            <Typography
              sx={{ paddingLeft: "35px" }}
              variant="subtitle1"
              fontWeight="bold"
              color="gray"
            >
              {video?.creator?.name || demoChannelTitle.slice(0, 100)}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Tooltip>
        </CardContent>
      </Card>
    </div>
  );
};
export default VideoCard;
