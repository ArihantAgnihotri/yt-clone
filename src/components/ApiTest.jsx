import React from "react";
import { useGlobalContext } from "./context/context";
import { Box } from "@mui/material";

const ApiTest = () => {
    const datax = useGlobalContext();
   console.log(datax.data);
  return (
   <div>
      <Box sx={{color: 'white'}}>
        <h1>Hello</h1>
        {datax.data.posts?.map((currentPost)=>{
            let creatorName = currentPost.creator.name;
            return <h2>{creatorName?creatorName:"No Name found"}</h2>;
        })}
      </Box>
      </div>
  )
}

export default ApiTest