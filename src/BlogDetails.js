import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams()
    const {data: blog, error, isPending} = useFetch(`http://localhost:8005/blogs/` + id)
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            { blog && (
                <article>
                    <h1> {blog.title}</h1>
                    <h3> {blog.body}</h3>
                    <h4>Written By: {blog.author}</h4>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;