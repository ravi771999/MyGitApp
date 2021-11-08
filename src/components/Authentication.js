import React from 'react'
import { useState , useEffect} from 'react'
import Navbar from './Navbar';


export default function Authentication() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    return (
        <div>
            <Navbar/>
        </div>
    )
}
