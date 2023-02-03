import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => { //4 ran at every render.
   setTimeout(() => {
    fetch('http://localhost:8005/blogs')
    .then(res => {
      if(!res.ok) {
        throw Error('Could not fetch the data :(')
      }
        return res.json()
    })
    .then((data) => {
        setBlogs(data)
        setIsPending(false)
    })
    .catch(err => {
      console.log(err.message);
    })
   }, 1000)
  }, []) //4 [] makes sure this useeffect only runs after the first initial render.
 
  return (
    <div className='home'>
      {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>} 
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Irene')} title="Irene's Blogs!" />  */}
    </div>
  );
};

export default Home;
