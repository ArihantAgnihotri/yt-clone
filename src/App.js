import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, VideoDetail } from "./components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:page/:postId" element={<VideoDetail />} />
            <Route path="/*" element={<Feed />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
