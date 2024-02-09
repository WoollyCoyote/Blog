import Blogs from "./blogs";

type BlogType = {
  blogs: {
    id: string;
    title: string;
    para: string;
    date: string;
  };
  map(arg0: (blog: { id: string; title: string; para: string; date: string; }) => JSX.Element): React.ReactNode;
};

const BlogList = ({blogs}: {blogs: BlogType}) => {
  console.log(blogs);
  
    return ( 
       <div>
         
            {blogs.map((blog: { id: string; title: string; para: string; date: string; }) => (<Blogs blogs={blog} key={blog.id} />))}
           
       </div>
     );
}
 
export default BlogList;