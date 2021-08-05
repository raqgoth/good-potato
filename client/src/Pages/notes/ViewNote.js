import React,{ useEffect, useState } from "react";
import NavBar from '../../Components/notes/NavBar'
import Card from '../../Components/notes/Card'
import PostService from '../../Services/notes/PostService'

const ViewNote = (props) => {
    const {match:{params}} = props;
    const [post,setPost] = useState([]);
    useEffect(() => {
        PostService.getById(params.postId)
        .then(res=>{
            setPost(res.data);            
        });
     }, []);

    return (
        <div className="ViewMore">
             <NavBar title="View more" />
             <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">                       
                        <Card
                            key={post._id}
                            id={post._id}
                            title ={post.title} 
                            date={post.updatedAt} 
                            author={post.author} 
                            content={post.content}
                            limitComments={false}
                        />
                    </div>
                </div>
             </div>
        </div>
    );
}
  
export default ViewNote