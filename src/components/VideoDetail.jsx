import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle, ThumbUp, Comment } from "@mui/icons-material";
import { Video, Videos } from "./";
import { fetchData } from "../utils/fetchData";
import axios from "axios";
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const id = useParams();
  const BASE_URL = "https://internship-service.onrender.com/videos?";
  const postId = id.postId;
  const page = id.page;
  const url = "https://cdn.gro.care/";
  let [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await axios.get(`${BASE_URL}page=${page}`);
        const data = response.data;
        const postsx = data.data.posts;
        setPosts(postsx);
      } catch (error) {
        console.error(error);
      }
    };
    fetcher();
  }, [page]);

  const selectedPost = posts?.find((post) => post.postId === postId);

  console.log(`Page: ${page} PostId: ${postId}`);
  console.log(posts);
  console.log("Selected Post:", selectedPost);
  console.log("Selected Post url:", selectedPost?.submission?.mediaUrl);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} sx={{ overflowY: "auto", maxHeight: "100vh" }}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <video className="react-player" controls>
              <source
                src={selectedPost?.submission?.mediaUrl}
                type="video/mp4"
              />
              Sorry, your browser does not support this video
            </video>
            <Typography variant="h5" fontWeight="bold" p={2}>
              {selectedPost?.submission.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Typography variant={{ sm: "subtitle1", md: "h6" }}>
                {selectedPost?.creator.name || "No channel name given"}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                />
              </Typography>
              <Stack direction="column" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  <ThumbUp /> {selectedPost?.reaction.count}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  <Comment /> {selectedPost?.comment.count}
                </Typography>
              </Stack>
            </Stack>
            <Box
              sx={{
                backgroundColor: "#1E1E1E",
                justifyContent: "center",
                justifyItems: "center",
                width: "100%",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              <Typography
                fontWeight="bold"
                variant="h6"
                sx={{ opacity: 0.7, padding: "" }}
              >
                Description:
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {selectedPost?.submission?.description}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          sx={{ overflowY: "auto", maxHeight: "100vh" }}
        >
          <Videos
            pageNumber={page}
            postsSent={posts}
            direction="column"
            aspectRatio="16/9"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
