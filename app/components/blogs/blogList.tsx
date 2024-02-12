import Blogs from "./blogs";

type BlogType = {
  blogs: {
    id: string;
    title: string;
    para: string;
    date: string;
  };
  title:string,
  para:string,
  date:string,
  map(arg0: (blog: { id: string; title: string; para: string; date: string; }) => JSX.Element): React.ReactNode;
};

const BlogList = ({blogs}:BlogType) => {
  console.log(blogs);
  
    return ( 
       <div className="blogs">
         
            {blogs.map((blog:any) => (<Blogs blogs={blog} key={blog.id} title={blog.title} para={blog.para} />))}
           
       </div>
     );
}
 
export default BlogList;