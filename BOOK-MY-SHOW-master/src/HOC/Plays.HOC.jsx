
import React from "react";
import {Route} from "react-router-dom";

//layout
import PlaysLayout from "../layouts/Plays.layout";

const PlaysHOC = ({component: Component,...rest}) =>{
    return (
        <>
        <Route
        {...rest}
        component={(props) =>(
            <PlaysLayout>
                <Component{...props}/>
            </PlaysLayout>
        )}
        />
        </>
    );
};

export default PlaysHOC ;