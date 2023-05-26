import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Stack,
  Button,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import { CheckCircle, ThumbUp, Comment } from "@mui/icons-material";
import { Sidebar, Videos } from "./";
import axios from "axios";
const VideoDetail = () => {
  const id = useParams();
  const BASE_URL = "https://internship-service.onrender.com/videos?";
  const postId = id.postId;
  const page = id.page;
  let [posts, setPosts] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
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

  const truncateDescription = (description, maxLength) => {
    if (description?.length <= maxLength) {
      return description;
    }
    return description?.substring(0, maxLength) + "...";
  };

  const [showLikeError, setShowLikeError] = useState(false);
  const handleLikeButtonClick = () => {
    if (!selectedPost?.reaction.voted) {
      setShowLikeError(true);
    } else {
      // Handle like button click action
    }
  };

  const [showLCommentError, setShowCommentError] = useState(false);
  const handleCommentButtonClick = () => {
    if (!selectedPost?.comment.commentingAllowed) {
      setShowCommentError(true);
    } else {
      // Handle Comment button click action
    }
  };

  const selectedPost = posts?.find((post) => post.postId === postId);
  return (
    <Box
      flex={1}
      sx={{
        overflowY: "auto",
        pl: { md: "5rem", xs: 0 }, // Adjusted padding for smaller screens
        flexGrow: 1, // Added to occupy remaining space
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box
          sx={{
            height: { sx: "auto", md: "100%" },
            borderRight: "1px solid #3d3d3d",
            px: { xs: 0, md: 2.5 },
          }}
        >
          <Sidebar />
        </Box>

        <Box
          flex={1}
          sx={{
            overflowY: "auto",
            pl: { md: "5rem" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "10px",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <iframe
                src={selectedPost?.submission?.mediaUrl}
                title="Video"
                allow="fullscreen"
                style={{
                  height: "80vh",
                  border: "none",
                  paddingBottom: "0px",
                  margin: "auto",
                }}
              ></iframe>
            </Stack>

            <Typography
              variant="h5"
              fontWeight="bold"
              px={2}
              pt={2}
              sx={{ marginTop: { md: "-55px", xs: "-10px" } }}
            >
              {selectedPost?.submission.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Tooltip title={`@${selectedPost?.creator.handle}`}>
                <Typography
                  sx={{ display: "flex", alignItems: "center" }}
                  variant="body1"
                >
                  {selectedPost?.creator.name || "No channel name"}
                  <CheckCircle
                    sx={{ fontSize: "18px", color: "grey", ml: "5px" }}
                  />
                </Typography>
              </Tooltip>

              <Stack direction="row" gap="10px" alignItems="center">
                <Box
                  sx={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    startIcon={<ThumbUp />}
                    variant="text"
                    sx={{
                      color: "#fff",
                      fontSize: "1.2rem",
                      padding: 0,
                      opacity: selectedPost?.reaction.voted ? 1 : 0.5,
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
                      },
                      borderRadius: "30px",
                    }}
                    onClick={handleLikeButtonClick}
                  >
                    {selectedPost?.reaction.count}
                  </Button>
                </Box>
                <Snackbar
                  open={showLikeError}
                  autoHideDuration={2000}
                  onClose={() => setShowLikeError(false)}
                  sx={{
                    background: "rgba(20, 20, 20, 0.5)",
                    borderRadius: "20px",
                  }}
                >
                  <Alert
                    severity="error"
                    onClose={() => setShowLikeError(false)}
                    sx={{
                      background: "rgba(20, 20, 20, 0.5)",
                      "& .MuiAlert-message": {
                        color: "#fff", // Set the text color to white
                      },
                      borderRadius: "20px",
                    }}
                  >
                    This post is not a voted post.
                  </Alert>
                </Snackbar>

                <Box
                  sx={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    startIcon={<Comment />}
                    variant="text"
                    sx={{
                      color: "#fff",
                      fontSize: "1.2rem",
                      padding: 0,
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
                      },
                      opacity: selectedPost?.comment.commentingAllowed
                        ? 1
                        : 0.5,
                      borderRadius: "30px",
                    }}
                    onClick={handleCommentButtonClick}
                  >
                    {selectedPost?.comment.count}
                  </Button>
                </Box>

                <Snackbar
                  open={showLCommentError}
                  autoHideDuration={4000}
                  onClose={() => setShowCommentError(false)}
                  sx={{
                    background: "rgba(20, 20, 20, 0.5)",
                    borderRadius: "20px",
                  }}
                >
                  <Alert
                    severity="error"
                    onClose={() => setShowCommentError(false)}
                    sx={{
                      background: "rgba(20, 20, 20, 0.5)",
                      "& .MuiAlert-message": {
                        color: "white",
                      },
                      borderRadius: "20px",
                    }}
                  >
                    This post has comments disabled.
                  </Alert>
                </Snackbar>
              </Stack>
            </Stack>
            <Box
              sx={{
                backgroundColor: "rgba(68, 68, 68, 0.3)",
                padding: "20px",
                borderRadius: "20px",
                marginBottom: { xs: "50px", md: "0px" },
                mx: { xs: "20px", md: "0px" },
              }}
            >
              <Typography
                fontWeight="bold"
                variant="h6"
                sx={{ color: "#fff", marginBottom: "10px" }}
              >
                Description:
              </Typography>
              <Typography variant="body1" sx={{ color: "#fff", opacity: 0.7 }}>
                {showFullDescription
                  ? selectedPost?.submission?.description
                  : truncateDescription(
                      selectedPost?.submission?.description,
                      80
                    )}
              </Typography>
              {showFullDescription ? (
                <Button
                  onClick={toggleDescription}
                  variant="text"
                  sx={{ color: "#fff", fontSize: "0.9rem", marginTop: "10px" }}
                >
                  Show Less
                </Button>
              ) : (
                <Button
                  onClick={toggleDescription}
                  variant="text"
                  sx={{ color: "#fff", fontSize: "0.9rem", marginTop: "10px" }}
                >
                  Show More
                </Button>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          pb={{ md: 40, xs: 10 }}
          sx={{ mx: "auto", overflowY: "auto", maxHeight: "100vh" }}
        >
          <Typography
            fontWeight="bold"
            sx={{
              padding: "10px",

              marginBottom: "10px",
              fontSize: "1.7rem",
            }}
          >
            More Videos
          </Typography>

          <Videos pageNumber={page} postsSent={posts} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
