import Blogs from "./blogs";

const BlogList = ({blogs}) => {
  console.log(blogs);
  
    return ( 
       <div>
         
            {blogs.map((blog) => (<Blogs blogs={blog} key={blog.id} title={blog.title} para={blog.para} />))}
           
       </div>
     );
}
 
export default BlogList;