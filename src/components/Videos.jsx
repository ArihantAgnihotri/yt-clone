import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard } from "./";
const Videos = ({ pageNumber, postsSent, direction, aspectRatio }) => {
  if (!postsSent?.length) return "Loading...";
  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {postsSent?.map((item, idx) => (
        <Box key={idx}>
          {item && (
            <VideoCard
              video={item}
              page={pageNumber}
              aspectRatio={aspectRatio}
            />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
