import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = "https://internship-service.onrender.com/videos?"
  export const fetchData = async (page) => {
      try {
        const response = await axios.get(`${BASE_URL}page=${page}`);
        console.log(response)
        const data = response.data;
        console.log(data);
        const posts = data.data.posts;
        console.log(posts);
        return posts
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };