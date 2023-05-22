import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { fetchPosts } from "../utils/fetchPosts";
// const ApiTest = () => {
//     const datax = useGlobalContext();
//    console.log(datax.data);
//   return (
//    <div>
//       <Box sx={{color: 'white'}}>
//         <h1>Hello</h1>
//         {datax.data.posts?.map((currentPost)=>{
//             let creatorName = currentPost.creator.name;
//             return <h2>{creatorName?creatorName:"No Name found"}</h2>;
//         })}
//       </Box>
//       </div>
//   )
// }
const ApiTest = () => {
  const [handles,setHandles] = useState("N/A");
  useEffect(()=>{
    fetchPosts(1).then((posts)=>setHandles(posts.creator.handle));
  }, []);
  console.log(handles);
return (
 <Box sx={{backgroundColor: 'red'}}>
 </Box>
)
}

export default ApiTest