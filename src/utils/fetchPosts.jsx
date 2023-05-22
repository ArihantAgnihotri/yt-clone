import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = "https://internship-service.onrender.com/videos?"
  export const fetchPosts = async (page) => {
      try {
        const response = await axios.get(`${BASE_URL}page=${page}`);
        const data = response.data;
        const posts = data.posts;
        console.log(posts);
        return posts;
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };