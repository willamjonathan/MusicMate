import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const Post = ({post
    // , commentP ,likeP
    , deleteP }) => {
    return(<>
    {post && post
    .sort((a,b)=> a.id< b.id ? 1 : -1)
    .map((p,index)=>{
        return(<React.Fragment key = {p.id}>
            <div className="post-post">
            <div className = "content-post-bar">
                <div className = "post-title">
                    {p.title}
                </div>
                <div className="post-description">
                    {p.description}
                </div>
                <div className="post-file">
                    {p.selectedFile}
                </div>
                <div className =" post-underline"></div>
                <div className = "icon">
                    {/* <span onClick = {()=> commentP(p.id)} title="Comment">
                    <FontAwesomeIcon icon ={faCircleCheck}/>
                    </span>
                    <span onClick ={()=> likeP(p.id)} title ="Like">
                    <FontAwesomeIcon icon ={faPen}/>
                    </span> */}
                    <span onClick ={()=> deleteP(p.id)} title ="delete">
                    <FontAwesomeIcon icon ={faTrashCan}/>
                    </span>
                </div>
                <div className =" post-underline">

                </div>

            </div>
            
            </div>
        </React.Fragment>)
    })
    
 
 }
    
    
    </>)
}
export default Post;