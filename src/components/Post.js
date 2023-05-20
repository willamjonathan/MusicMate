import React from "react";

const Post = ({post, deleteT}) => {
    return(<>
    {post && post
    .sort((a,b)=> a.id> b.id ? 1 : -1)
    .map((p,index)=>{
        return(<React.Fragment key = {p.id}>



        </React.Fragment>)
    })
    
 
 }
    
    
    </>)
}