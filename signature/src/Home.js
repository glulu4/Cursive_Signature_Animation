import React from 'react'
import Signature from './Signature';
import { Link } from 'react-router-dom';


export default function Home(){

    return (
        <div className="App">
            <h3>My Signature</h3>
            <div>
                <Signature />
            </div>

        <Link to="/dvd">Click here for bouncing dvd logo</Link>
            
        </div>
    )
}