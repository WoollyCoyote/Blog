const baseurl = "https://milage.onrender.com";

export const addBlog = async (blog) => {
  const res = await fetch(`${baseurl}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editBlog = async (blog) => {
  const res = await fetch(`${baseurl}/blogs/${blog.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteBlog = async (id) => {
  await fetch(`${baseurl}/blogs/${id}`, {
    method: "DELETE",
  });
};

export const getAllBlogs = async () => {
  const res = await fetch(`${baseurl}/blogs`, { cache: "no-store" });
  const blogs = await res.json();
  return blogs;
};