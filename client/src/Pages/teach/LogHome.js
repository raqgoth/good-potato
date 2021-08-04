import React,{ useEffect, useState } from "react";
import NavBar from '../../Components/teach/NavBar'
import Card from '../../Components/teach/Card'
import PostService from '../../Services/teach/PostService'


const LogHome = () => {
    const [posts,setPosts] = useState([]);

    //life cicle
    useEffect(() => {
        PostService.get()
        .then(res=>{
            setPosts(res.data);            
        });
     }, []);

    return (
        <div className="Home">
            <NavBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        {posts.map(item => 
                            (<Card 
                                key={item._id}
                                id={item._id}
                                title ={item.title} 
                                date={item.updatedAt} 
                                author={item.author} 
                                content={item.content}
                                limitComments={true}
                            />) 
                        )}     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogHome;

