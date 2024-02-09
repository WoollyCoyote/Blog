'use client'
import {useState} from "react"
import {Modal }from "../Modal"
import { addBlog } from "@/app/pages/api"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from "uuid";

const AddBlog = () => {
  const router = useRouter();

const [modalOpen,setModalOpen]=useState(false)
const [blog,setBlog] = useState({
    date:"",
    title:"",
    para:""
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
setBlog({
    ...blog,
    [e.target.name]:e.target.value
    })    
}

const handleSubmitNewBlog = async (e: React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault();
await addBlog({
  id:uuidv4(),
  date:blog.date,
  title:blog.title,
  para:blog.para
})
setBlog({
  date:"",
  title:"",
  para:""
})
setModalOpen(false)
router.refresh();

}

    return ( 
        <div>
        <button
          onClick={() => setModalOpen(true)}
          className="btn btn-primary w-full"
        >
          Start new Blog
        </button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <form onSubmit={handleSubmitNewBlog}>
            <div className="modal-action">
              <input
                name="title"
                onChange={handleChange}
                type="title"
                placeholder="BLOG Title"
                className="input input-bordered w-full"
                value={blog.title}
              />
              <input
                name="date"
                onChange={handleChange}
                type="date"
                placeholder="date"
                className="input input-bordered w-full"
                value={blog.date}
  
              />
              <input
                name="para"
                onChange={handleChange}
                type="para"
                placeholder="How is you're day?"
                className="input input-bordered w-full"
                value={blog.para}
  
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </div>
     );
}
 
export default AddBlog;