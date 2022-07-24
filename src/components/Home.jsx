import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem ipsum",
      author: "Josephine",
      id: 1,
    },
    {
      title: "Welcome Party",
      body: "Lorem ipsum",
      author: "Carrington",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "Lorem ipsum",
      author: "Josephine",
      id: 3,
    },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use Effect ran");
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Josephine")}
        title="Josephine's blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
