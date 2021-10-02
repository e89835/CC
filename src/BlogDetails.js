import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Images from "./Images";
import { useState } from "react";



const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const [comment, setComment] = useState('');

    const handleClickLike= (e) =>{
        e.preventDefault();
        console.log(blog);
        let count= blog.likes; count++; blog.likes = count;
        
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify(blog)
        }).then(() => {
            console.log('like updated');
        });
        history.push(0)
    }
    const handleClickDelete= () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/')
        })
    }
    const handleClickComments= (e) => {
        e.preventDefault();
        let comm= blog.comments;
        comm.push(comment);
        console.log(comm);

        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify(blog)
        }).then(() => {
            console.log('comment updated');
        });
        history.push(0)
    }


    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Publicado por { blog.author } </p>
                    
                    <img src={Images.find(id => id.title === blog.image).src} className="App-logo" alt="logo"/>

                    <div>{ blog.body }</div>
                    <button onClick={handleClickLike}>Me gusta</button>
                    <p>Me gusta: { blog.likes }</p>
                    <div className="blog-comments">
                    <div><h3> {blog.comments.length} Comentarios</h3></div>                    
                    <ul>
                        {blog.comments.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })}
                    </ul>
                    
                    <form onSubmit={handleClickComments}>  
                        <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <button>Añadir comentario</button>
                    </form>  

                    </div>
                    <div className="blog-delete">
                    <button onClick={handleClickDelete}>Eliminar entrada</button>
                    </div>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;
