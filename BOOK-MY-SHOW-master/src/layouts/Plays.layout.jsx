
import React from "react";

//components
import Navbar from "../components/navbar/navbar.component";
import PlaysCarousal from "../components/plays/PlaysCarousal.component";




const PlaysLayout = (props) => {
    return(
        <>
            
            <Navbar />
            
            {props.children}
        </>
    );
};

export default PlaysLayout;