import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom";
// import { UserContext } from '../App';

const Logout = () => {
    const navigate = useNavigate();
    // const {state, dispatch} = useContext(UserContext);
    //promises
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            // dispatch({type:"USER", payload:false})
            navigate('/login');
            if(!res.status === 200 ){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.lor(err);
        })
        
    });
    return (
        <>
            <h1>Log out page</h1>
        </>
    )
}

export default Logout
