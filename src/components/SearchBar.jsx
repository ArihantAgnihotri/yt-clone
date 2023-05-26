import { Paper, IconButton, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
const SearchBar = () => {
  const theme = useTheme();
  const phones = useMediaQuery("(max-width: 480px)");

  return (
    <>
      {!phones ? (
        <Paper
          component="form"
          onSubmit={() => {}}
          sx={{
            borderRadius: 20,
            border: "3px solid red",
            pl: 2,
            color: "red",
          }}
        >
          <input
            className="search-bar"
            placeholder="Search for a video"
            value=""
            onChange={() => {}}
          />

          <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
            <SearchIcon style={{ color: "red" }} />
          </IconButton>
        </Paper>
      ) : (
        <IconButton
          type="submit"
          size="small"
          sx={{
            p: "20px",
            color: "red",
            visibility: { md: "hidden", xs: "visible" },
          }}
        >
          <SearchIcon style={{ color: "red" }} />
        </IconButton>
      )}
    </>
  );
};

export default SearchBar;
