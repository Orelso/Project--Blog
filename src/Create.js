import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState();
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
/* ---------------------------------------------------------------------------------------------------------(Will handle the submitting of the new blog)----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author}
        setIsPending(true) //4 Will show the loading...
        fetch("http://localhost:8005/blogs", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("NEW")
            setIsPending(false) //4 Will remove the Loading...
            history.push('/') //4 Will send us to the homepage after submitting
        })
    }
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//4 What's in the create page  
return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label>Blog Body</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='mario'>mario</option>
          <option value='luigi'>luigi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
