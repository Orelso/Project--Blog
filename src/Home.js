import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "Music", body: "lorem", author: "Orelso", id: 1},
    {title: "Food", body: "lorem", author: "Sanni", id: 2},
    {title: "Leisure", body: "lorem", author: "Irene", id: 3}
  ])

  const handleClick = () => {
    setBlogs()
  }
 
  return (
    <div className='home'>
     <ul>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <h3>{blog.body}</h3>
                <p>{blog.author}</p>
            </div>
        ))}
     </ul>
    </div>
  );
};

export default Home;
