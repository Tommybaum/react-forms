import { useState } from "react"
const API_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate"

const Authenticate = (props) => {


    const buttonHandler = async () => {
        try{
            const response = await fetch(API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${props.token}`
                }
            });
            const data = await response.json();
            console.log(data)
            //setSuccessMessage(data.message)
        }
        catch(err){
            console.log(error)
            
        }
    }
    return(
    <>
        <h3>authenticate</h3>
        <p>token: {props.token}</p>
        <button onClick={buttonHandler}>authenticate</button>
    </>
    )
}
export default Authenticate