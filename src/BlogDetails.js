import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

//4 When you click on a blog it takes you to its own page.
const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, error, isPending,} = useFetch(`http://localhost:8005/blogs/` + id);
  const history = useHistory();
/* ---------------------------------------------------------------------------------------(Handles the Delete of the the blog Post)----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  const handleDelete = () => {
    fetch("http://localhost:8005/blogs/" + blog.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("NEW");
      history.push("/");
    });
  };
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//4 The page shows this!
return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h1> {blog.title}</h1>
          <h3> {blog.body}</h3>
          <h4>Written By: {blog.author}</h4>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
