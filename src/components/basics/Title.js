import React from 'react';




function Title(props){
    return(
        <div className="wrap__title">
        <h1>
            <strong>{props.text[0]}</strong>
            <em>{props.text[1]}</em>
            </h1>
         </div>   
        );
}
export default Title;