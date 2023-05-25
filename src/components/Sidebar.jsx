import { useState, useEffect } from "react";
import { Divider, Stack } from "@mui/material";
import { categories } from "../utils/constants";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Sidebar = ({ selectedCategory, setCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "red",
            color: "white",
            width: "180px",
            paddingLeft: "10px",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.5",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
      <Divider />
    </Stack>
  );
};

export default Sidebar;
