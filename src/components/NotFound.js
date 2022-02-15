import React from "react";
import imagen from '../assets/images/notFound.jpg';

function NotFound(){
    return(
        <>
            <div className="w-100">
                <img  className="w-100" src={imagen}  alt="Error 404" />
            </div>
        </>
    )
}
export default NotFound;