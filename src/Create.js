import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('juanjo');
    const [image, setImage] = useState('idefault');
    const comments = [];
    const [likes] = useState(0);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author, likes, image, comments};

        //console.log(blog);
        setIsPending(true);
        fetch('http://localhost:8000/blogs/', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        });

        history.push('/');
    }

    return ( 
        <div className="create">
            <h2>Añadir entrada</h2>
            <form onSubmit={handleSubmit}>
                <label>Título</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Cuerpo</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Autor: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="juanjo">juanjo</option>
                    <option value="jose maria">jose maria</option>
                    <option value="anonimo">anonimo</option>
                </select>
                <label>Imagen: </label>
                <select
                    value={image}
                    onChange={(e) => setImage(e.target.value)}>
                    <option value="icuello">cuello</option>
                    <option value="iespalda">espalda</option>
                    <option value="ibrazo1">brazo1</option>
                    <option value="ibrazo2">brazo2</option>
                    <option value="imuneca1">muneca1</option>
                    <option value="imuneca2">muneca2</option>
                    <option value="ipierna1">pierna1</option>
                    <option value="ipierna2">pierna2</option>
                    <option value="irodilla">rodilla</option>
                    <option value="itobillo1">tobillo1</option>
                    <option value="itobillo2">tobillo2</option>
                    <option value="idefault">defecto</option>

                </select>
                { !isPending && <button>Añadir</button> }
                { isPending && <button disabled>Añadiendo...</button> }

                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
                <p>{ image }</p>

            </form>
        </div>
     );
}
 
export default Create;