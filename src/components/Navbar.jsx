import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Box
      alignItems="center"
      pl={1}
      pr={1}
      sx={{
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" height={55} />
        <span>
          <h3
            style={{ color: "red", fontSize: "1.3rem", paddingLeft: "0.5rem" }}
          >
            G
          </h3>
        </span>
        <span>
          <h3 style={{ color: "white", fontSize: "1.1rem" }}>ro.Care</h3>
        </span>
      </Link>
      <SearchBar />
    </Box>
  );
};

export default Navbar;
