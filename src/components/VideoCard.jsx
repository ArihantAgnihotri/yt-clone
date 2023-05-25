import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Box,
  Stack,
  Grow,
  Zoom,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoProfilePicture,
} from "../utils/constants";
const VideoCard = ({ video, page }) => {
  console.log(video);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="hoverGlow">
      <Card
        sx={{
          width: { md: "220px", sm: "100%" },
          backgroundColor: "black",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
          opacity: isHovered ? 1 : 0.6,
          transition: "opacity 0.3s",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          to={
            video.creator.id ? `/video/${page}/${video.postId}` : demoVideoUrl
          }
        >
          <Zoom in={"true"} style={{ transitionDelay: "300ms" }}>
            <CardMedia
              component="img"
              image={video?.submission?.thumbnail}
              alt={video.creator.handle}
              sx={{
                width: { md: "100%", xs: "300px" },
                height: { md: "auto", xs: "100%" },
                aspectRatio: { md: "16/20", xs: "4/3" },
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                position: "relative",
                zIndex: 1,
              }}
            />
          </Zoom>
        </Link>
        <Zoom in={"true"} style={{ transitionDelay: "500ms" }}>
          <CardContent
            className="noGlow"
            sx={{
              height: "80px",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 2,
              padding: "10px",
            }}
          >
            <Link
              to={
                video.creator.id
                  ? `/video/${page}/${video.postId}`
                  : demoVideoUrl
              }
            >
              <Typography
                sx={{ paddingBottom: "10px", fontSize: "17px" }}
                fontWeight="bold"
                color="white"
              >
                {video?.submission?.title.slice(0, 60) ||
                  demoVideoTitle.slice(0, 60)}
              </Typography>
              <Tooltip title={`@${video.creator.handle}`}>
                <Stack direction="row">
                  <Box>
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                      src={video?.creator?.pic || demoProfilePicture}
                      alt={video?.creator.handle}
                      className="profilePic"
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{ paddingLeft: "10px", paddingTop: "5px" }}
                      variant="subtitle2"
                      fontWeight="bold"
                      color="gray"
                    >
                      {video?.creator?.name || demoChannelTitle.slice(0, 100)}
                      <CheckCircle
                        sx={{ fontSize: 12, color: "gray", paddingLeft: "3px" }}
                      />
                    </Typography>
                  </Box>
                </Stack>
              </Tooltip>
            </Link>
          </CardContent>
        </Zoom>
      </Card>
    </div>
  );
};
export default VideoCard;
