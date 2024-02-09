import Blogs from "./blogs";

const BlogList = ({blogs}:any) => {
  console.log(blogs);
  
    return ( 
       <div>
         
            {blogs.map((blog:any) => (<Blogs blogs={blog} key={blog.id} title={blog.title} para={blog.para} />))}
           
       </div>
     );
}
 
export default BlogList;