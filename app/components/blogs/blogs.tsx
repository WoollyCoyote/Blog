"use client";
import { useRouter } from "next/navigation";
import {MdDeleteOutline} from 'react-icons/md'
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { editBlog, deleteBlog } from "../../pages/api";
import { Modal } from "../Modal";

const blogs = (blog) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState(blog);
  const router = useRouter();

function checkBlogs() {
  console.log(blogToEdit);
}

  const handleSubmitEditBlog = async (e) => {
    e.preventDefault();
    setBlogToEdit({
      ...blogToEdit,
      id:blog.blogs.id,
      title:blog.blogs.title,
      para:blog.blogs.para,
      date:blog.blogs.date
    })
  
    console.log(blog.blogs.id);
    setOpenModalEdit(false);
    await editBlog(blogToEdit);
    router.refresh();
  };

  const handleSubmitDeleteBlog = async (id) => {
    await deleteBlog(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBlogToEdit({
      ...blog.blogs,
      [name]: value,
    });
    console.log(checkBlogs());
  };

  return (
    <div className="card">
      <div className="card-body" key={blog.blogs.id}>
        <h2 className="card-title">{blog.blogs.title}</h2>
        <p>{blog.blogs.para}</p>
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
          <form className="modalBody" onSubmit={handleSubmitEditBlog} key={blogToEdit.id}>
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
              value={blog.blogs.date}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
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
