import { Link } from "react-router-dom";

//4 This is for the home page
const BlogList = ({ blogs, title }) => {
  return (
    <div className='blog-listme'>
      <h1>{title}</h1>
      <ul>
        {blogs.map((blog) => (
          <div className='blog-preview' key={blog.id}>
            <Link style={{  textDecoration: "none"}} to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <h3>{blog.body}</h3>
              <p>Written by: {blog.author}</p>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
