import { useState, useEffect } from "react";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchData } from "../utils/fetchData";

const Feed = () => {
  const [category, setCategory] = useState("New");
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData(page).then((data) => {
      setPosts(data);
    });
  }, [page]);
  let props = {
    pageNumber: page,
    postsSent: posts,
    direction: "row",
    aspectRatio: "auto",
  };
  console.log(props);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2.5 },
        }}
      >
        <Sidebar selectedCategory={category} setCategory={setCategory} />
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "Auto",
          height: "90vh",
          flex: 2,
          justifyContent: "center",
          width: { xs: "100%", s: "100%", md: "40%" },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          md={2}
          sx={{ color: "white" }}
        >
          {category}
          <span style={{ color: "red" }}> Videos </span>
        </Typography>
        <Videos {...props} />
        <Box
          sx={{
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Pagination
            variant="outlined"
            color="secondary"
            count={10}
            showFirstButton={true}
            showLastButton={true}
            defaultPage={page}
            onChange={(event, value) => setPage(value - 1)}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;
