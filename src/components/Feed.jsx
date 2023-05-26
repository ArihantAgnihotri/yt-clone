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
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "91vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2.5 },
        }}
      >
        <Sidebar selectedCategory={category} setCategory={setCategory} />
      </Box>
      <Box
        sx={{
          overflowY: "Auto",
          height: "90vh",
          flex: 2,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "white",
            pt: { md: "0px", xs: "10px" },
            pl: { md: "50px", xs: "10px" },
            pb: "15px",
          }}
        >
          {category}
          <span style={{ color: "red" }}> Videos </span>
        </Typography>
        <Box sx={{ paddingLeft: { md: "50px", xs: "0px" } }}>
          <Videos {...props} />
        </Box>
        <Box
          sx={{
            mt: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Pagination
            count={10}
            showFirstButton={true}
            showLastButton={true}
            defaultPage={page}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white", // Set pagination item color to white
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Set background color to white when hovering
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Set background color to white
              },
            }}
            onChange={(event, value) => setPage(value - 1)}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;
