import React, {useState} from "react";
import Pagination from '@mui/material/Pagination';
import { Box, Typography } from "@mui/material"; 

export default function PaginationTest() {
    const [page, setPage]= useState(0);
    return (
        <Box>
            <Typography>{page}</Typography>
            <Pagination variant="outlined" color="secondary" count={10} defaultPage={page} onChange={(event, value)=>setPage(value)}/>
        </Box>
        

    );
  }