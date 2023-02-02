// * calling the blogs={blogs} prop from the Home.js file
const BlogList = ({blogs, title}) => {
  
    
    return ( 
        <div className='blog-listme'>
            <h1>{title}</h1>
        <ul>
           {blogs.map((blog) => (
               <div className="blog-preview" key={blog.id}>
                   <h2>{blog.title}</h2>
                   <h3>{blog.body}</h3>
                   <p>Written by: {blog.author}!</p>
               </div>
           ))}
        </ul>
       </div>
     );
}
 
export default BlogList;


















//! calling the blogs={blogs} prop from the Home.js file with props
// const BlogList = (props) => {
//     const blogs = props.blogs
//     console.log(props, blogs);
//     const title = props.title
//     return ( 
//         <div className='blog-listme'>
//             <h1>{props.title}</h1>
//         <ul>
//            {blogs.map((blog) => (
//                <div className="blog-preview" key={blog.id}>
//                    <h2>{blog.title}</h2>
//                    <h3>{blog.body}</h3>
//                    <p>{blog.author}</p>
//                </div>
//            ))}
//         </ul>
//        </div>
//      );
// }