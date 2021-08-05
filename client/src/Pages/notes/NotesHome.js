import React,{ useEffect, useState } from "react";
import NavBarNote from '../../Components/notes/NavBarNote'
import Card from '../../Components/notes/Card'
import NoteService from '../../Services/notes/NoteService'


const NotesHome = () => {
    const [posts,setPosts] = useState([]);

    //life cicle
    useEffect(() => {
      NoteService.get()
        .then(res=>{
            setPosts(res.data);            
        });
     }, []);

    return (
        <div className="Home">
            <NavBarNote title="Home" />
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

export default NotesHome;

