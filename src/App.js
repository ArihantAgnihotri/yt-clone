import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, VideoDetail, SearchFeed } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar sx={{ zIndex: "3" }} />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:page/:postId" element={<VideoDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="/*" element={<Feed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
