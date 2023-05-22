import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
let API= 'https://internship-service.onrender.com/videos?';
const initialState={
    isLoading : true,
    message : "",
    data : {
        posts : [],
        page : 0,
        offset: 1
    }
};

const AppContext = React.createContext();
const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchApiData = async(url)=>{
        try{
            const res = await fetch(url);
            const result = await res.json();
            console.log(result.data);
            dispatch({
                type : 'GET_DATA',
                payload :{
                    data : result.data, 
                }
            });
        }catch(error){
            console.log(error);
        }

    }

    useEffect(()=>{
        fetchApiData(`${API}page=${state.data.page}`);
    }, []);



    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
};
const useGlobalContext=()=>{
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};