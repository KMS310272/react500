import React from 'react';
import propType, { element } from "prop-types";//
import{Link} from "react-router-dom";

function ReferInfo({id, title, desc1, desc2, element, tag, version,view, use, definition,}) {
    console.log({id});
    return(
        <li>
            <Link to={{
                pathname:"refer-detail",
                state:{
                    id,
                    title,
                    desc1,
                    desc2,
                    element,
                    tag,
                    version,
                    view,
                    use,
                    definition,
                },

            }}>
            <span className="alpha">{id}</span>
            <span className="attr">{title}</span>
            <span className="desc"> {desc2}</span>
            </Link>
        </li>
    )    
}
ReferInfo.prototype ={
    id:propType.number.isRequired,
    title:propType.string.isRequired,
    desc1:propType.string.isRequired,
    desc2:propType.string.isRequired,
}//꼭 설정해줘야함!!
export default ReferInfo;