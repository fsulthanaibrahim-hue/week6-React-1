import React from "react"
function ListItem () {
    return (
         <div className="list-item">
            <hr/>
            <div className="list-title">
                <h4>My Title One</h4>
            </div>
            <div className="list-descr">
                This is very big description
            </div>
            <div className="list-label"> 
               <span> Label 1 </span>
               <span> Label 2 </span>
               <span> Label 3 </span>
            </div>
            <hr/>
         </div>   
    );
}
export default ListItem;