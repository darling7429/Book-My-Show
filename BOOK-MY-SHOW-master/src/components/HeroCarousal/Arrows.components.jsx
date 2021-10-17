import React from "react";

//we are exporting the individual function.
export const NextArrow = (props) => {
   /*IT IS PASSING THREE PROPS IN ARROW */
   //className
   //style -> inline style.
   //onClick
    return( 
    <>
        <div className={props.className}
        style={{ ...props.style, backgroundColor: "black" }}
        onClick={props.onClick}/>

    </>
    );

};

 export const PrevArrow = (props) => {
    return( 
        <>
            <div className={props.className}
        style={{ ...props.style, backgroundColor: "black" }}
        onClick={props.onClick}/>
    
        </>
     );
};
