"use client";
import { useRouter } from "next/navigation";
import {MdDeleteOutline} from 'react-icons/md'
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { editBlog, deleteBlog } from "../../pages/api";
import { Modal } from "../Modal";

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
};

const blogs = (blog: BlogType) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState(blog.blogs);
  const router = useRouter();

function checkBlogs() {
  console.log(blogToEdit);
}

  const handleSubmitEditBlog = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // setBlogToEdit((prevBlog) => ({
    //   ...prevBlog,
    //   id: blog.blogs.id,
    //   title:blog.blogs.title,
    //   para:blog.blogs.para,
    //   date:blog.blogs.date
    // }));
  
    console.log(blogToEdit.id);
    setOpenModalEdit(false);
    await editBlog(blogToEdit);
    router.refresh();
  };

  const handleSubmitDeleteBlog = async (id:string) => {
    await deleteBlog(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setBlogToEdit((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
    console.log(checkBlogs());
  };

  return (
    <div className="card">
      <div  key={blog.blogs.id}>
        <h2 className="card-title">{blog.blogs.title}</h2>
        <p className="card-body">{blog.blogs.para}</p>
        <p>{blog.blogs.date}</p>
      </div>
      <div className="icons">
        <FaRegEdit  onClick={() => {
            setOpenModalEdit(true);
          }} />
        <MdDeleteOutline  onClick={() => {
            setOpenModalDelete(true);
          }}/>
      
            </div>
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form className="card" onSubmit={handleSubmitEditBlog} key={blogToEdit.id}>
            <div className="card-body">

            <input
              type="text"
              name="title"
              id="title"
              value={blogToEdit.title}
              onChange={handleChange}
              />
            <input
              type="text"
              name="para"
              id="para"
              value={blogToEdit.para}
              onChange={handleChange}
            />
            <input
              type="text"
              name="date"
              id="date"
              value={blogToEdit.date}
              onChange={handleChange}
              />
            <button type="submit">Submit</button>
              </div>
          </form>
        </Modal>
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <div className="deleteBox modalBody">
            <h3 className="text-lg">
              Are you sure, you want to delete this Blog?
            </h3>
            <button
              onClick={() => handleSubmitDeleteBlog(blog.blogs.id)}
              className="yesDltBtn"
            >
              yes
            </button>
          </div>
        </Modal>
    </div>
  );
};

export default blogs;
